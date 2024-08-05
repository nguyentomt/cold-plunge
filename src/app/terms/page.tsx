import Image from "next/image";
import Link from "next/link";

export default async function Terms() {
  
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Image
                src="/metalabs-logo.svg"
                width="240"
                height="240"
                alt="MetaLabs Logo"
                className=""
              />
          <h1 className="text-2xl p-4">Terms of Service</h1>
          

          <div className="text-left pl-4 md:w-3/4">
            <p>Welcome to MetaLabs! These Terms of Service (&quot;Terms&quot;) govern your access and use of our web application (&quot;App&quot;). By accessing or using the App, you agree to be bound by these Terms.</p>

            <h2 className="py-2 text-xl">1. Compliance</h2>
                <p>You agree to use the App in accordance with these Terms and the terms of service of any third-party services you use to access the App, including Google and Facebook.</p>
                <p>You acknowledge that your use of Google and Facebook login is subject to their respective terms of service.</p>
            
            <h2 className="py-2 text-xl">2. Google Maps API</h2>
                <p>Our App utilizes Google Maps API to provide certain functionalities.</p>
                <p>You agree to comply with the terms of service set forth by Google for Google Maps API use link to Google Maps API Terms of Service.</p>
                <p>This includes restrictions on how the map is displayed and used within the App.</p>
                

                <h2 className="py-2 text-xl">3. User Accounts</h2>
                <p>You may be required to create an account to access certain features of the App.</p>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                <h2 className="py-2 text-xl">4. Acceptable Use</h2>
                <p>You agree to use the App for lawful purposes only.</p>
                <p>You agree not to use the App in any way that violates any applicable laws or regulations.</p>
                <p>You further agree not to use the App in a way that could damage, disable, overburden, or impair the App or any server or network connected to the App.</p>

                <h2 className="py-2 text-xl">5. Intellectual Property</h2>
                <p>The App and all its content, including but not limited to text, graphics, logos, images, and software, are the property of MetaLabs or its licensors and protected by copyright and other intellectual property laws.</p>
                <p>You agree not to modify, reproduce, distribute, or create derivative works of the App or its content without the express written permission of MetaLabs.</p>

                <h2 className="py-2 text-xl">6. Termination</h2>
                <p>We may terminate your access to the App for any reason, at any time, and without notice.</p>

                <h2 className="py-2 text-xl">7. Disclaimer</h2>
                <p>You agree to use the App in accordance with these Terms and the terms of service of any third-party services you use to access the App, including Google and Facebook.</p>

                <h2 className="py-2 text-xl">8. Limitation of Liability</h2>
                <p>You agree to use the App in accordance with these Terms and the terms of service of any third-party services you use to access the App, including Google and Facebook.</p>

                <h2 className="py-2 text-xl">9. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

                <h2 className="py-2 text-xl">10. Dispute Resolution</h2>
                <p>Any dispute arising out of or relating to these Terms shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be held in Huntington Beach, CA.</p>

                <h2 className="py-2 text-xl">11. Entire Argument</h2>
                <p>These Terms constitute the entire agreement between you and MetaLabs regarding your use of the App.</p>

                <h2 className="py-2 text-xl">12. Severability</h2>
                <p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</p>

                <h2 className="py-2 text-xl">13. Changes to the Terms</h2>
                <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. You are advised to review these Terms periodically for any changes. Your continued use of the App after the posting of any revised Terms constitutes your acceptance of such revised Terms.</p>

                <h2 className="py-2 text-xl">14. Contact Us</h2>
                <p className="pb-4">If you have any questions about these Terms, please contact us at <a href="mailto:contact@metalabs.com" target="_new" className="underline">contact@metalabs.com</a></p>

            <Link href="/" className="mt-4 py-8 underline">Back to Main Page</Link>
          </div>

          
        </main>
    );
  }
  