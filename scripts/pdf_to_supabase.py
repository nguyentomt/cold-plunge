import pdfplumber
import re
import os
from dotenv import load_dotenv
from supabase import create_client
from datetime import datetime

load_dotenv(".env.local")

# CONFIG
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
PDF_PATH = "customers.pdf"

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing Supabase credentials in .env.local")

# Init Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Helper: extract minutes from treatment string
def parse_minutes(treatment_type):
    match = re.search(r"(\d+)", treatment_type)
    return int(match.group(1)) if match else None

# Helper: reward mapping
def calc_ldv(minutes):
    return {20: 2, 30: 3, 60: 6}.get(minutes, 0)

appointments = []

with pdfplumber.open(PDF_PATH) as pdf:
    for page in pdf.pages:
        table = page.extract_table()
        if table:
            headers = [h.lower().strip() for h in table[0]]
            for row in table[1:]:
                if not any(row):  # skip empty
                    continue
                first_name = row[0].strip()
                last_name = row[1].strip()
                date_str = row[2].strip()
                treatment = row[3].strip()

                minutes = parse_minutes(treatment)
                ldv = calc_ldv(minutes)

                try:
                    appointment_date = datetime.strptime(date_str, "%Y-%m-%d").date()
                except ValueError:
                    print(f"⚠️ Skipping invalid date: {date_str}")
                    continue

                appointments.append({
                    "first_name": first_name,
                    "last_name": last_name,
                    "appointment_date": appointment_date.isoformat(),
                    "treatment_type": treatment,
                    "treatment_minutes": minutes,
                    "ldv_reward": ldv
                })

if not appointments:
    print("❌ No appointments found in PDF.")
else:
    # Preview
    print("\n📋 Parsed Appointments:")
    for appt in appointments:
        print(f"- {appt['first_name']} {appt['last_name']} | {appt['appointment_date']} | "
              f"{appt['treatment_type']} ({appt['treatment_minutes']} min) | LDV: {appt['ldv_reward']}")

    # Confirmation prompt
    confirm = input("\n✅ Insert into Supabase? (y/n): ").strip().lower()
    if confirm == "y":
        res = supabase.table("appointments").insert(appointments).execute()
        if res.data:
            print(f"✅ Inserted {len(appointments)} appointments into Supabase")
        else:
            print(f"⚠️ Insert may have failed: {res}")
    else:
        print("❌ Insert cancelled.")
