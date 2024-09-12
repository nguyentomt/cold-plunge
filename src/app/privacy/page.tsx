import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
  
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Image
                src="/metalabs-logo.svg"
                width="240"
                height="240"
                alt="MetaLabs Logo"
                className=""
              />
          <h1 className="text-2xl p-4">Privacy Policy</h1>

          <div className="text-left pl-4 md:w-3/4">
          <h2 className="py-2 text-xl">I. Data Collection and Use</h2>
          <p className="py-2">MetaLabs uses Google and Facebook Authentication to provide a secure and seamless user login experience. Through these services, we may collect your username, email address, and profile picture (if applicable). This information is used to create your account, identify you when you log in, and potentially personalize your experience on our web app.</p>
          
          
          <h2 className="py-2 text-xl">II. Third-Party Services</h2>
          <p className="py-2">MetaLabs integrates Google Auth and Facebook Auth through login buttons on our website. To learn more about the data practices of Google and Facebook, please refer to their privacy policies: </p>


          <h2 className="py-2 text-xl">III. Cookies</h2>
          <p className="py-2">The Google Maps API we use may set cookies to store user preferences, such as your preferred map view.  These cookies do not identify you personally and help us improve your experience with the map functionalities. If you are located in the European Union, you can control how cookies are used through your browser settings. Additionally, we follow the guidelines set out in the EU User Consent Policy (<a href="https://www.google.com/about/company/user-consent-policy/" className="underline" target="_new">EU User Consent Policy</a>) to ensure transparency and user control over cookies.</p>
          
          <p className="py-4">We will not save, share, or sell your data from Google Auth, Facebook Auth, or Google Maps.</p>
          <Link href="/" className="py-4 underline">Back to Main Page</Link>
          </div>

          
        </main>
    );
  }
  