import Image from "next/image";
import Link from "next/link";

export default function LoyaltyAppPage() {
  return (
    <main className="bg-white min-h-screen py-10 px-4 md:px-0">
      {/* Header Section */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <Image src="/logo.png" alt="Indreni Loyalty App" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Indreni Loyalty App</h1>
        <p className="text-lg text-gray-700">Join our loyalty program and enjoy exclusive rewards every time you visit Indreni Coffee!</p>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto mb-10">
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li>Download the Indreni Loyalty App from the App Store or Google Play.</li>
            <li>Sign up with your phone number or email.</li>
            <li>Earn points with every purchase.</li>
            <li>Redeem points for free drinks, discounts, and special offers.</li>
            <li>Get notified about exclusive events, products, and promotions.</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-3xl mx-auto mb-10">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Free Coffee", desc: "Redeem points for your favorite drinks." },
              { title: "Exclusive Offers", desc: "Get access to members-only discounts and events." },
              { title: "Birthday Rewards", desc: "Enjoy a special treat on your birthday." },
              { title: "Easy Tracking", desc: "Track your points and rewards in the app." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded p-4">
                <h3 className="font-bold text-gray-700 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get the App */}
      <section className="max-w-3xl mx-auto mb-10">
        <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get the App</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <Link href="#" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Download for iOS</Link>
            <Link href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Download for Android</Link>
          </div>
        </div>
      </section>

      {/* Join Now */}
      <section className="max-w-3xl mx-auto mb-10">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Now</h2>
          <p className="text-gray-700 mb-4">Ready to start earning rewards? Sign up in-store or download the app to get started!</p>
          <Link href="#" className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">Sign Up</Link>
        </div>
      </section>

      {/* Sign In */}
      <section className="text-center text-gray-600 mt-8">
        <p>Already a member? <Link href="#" className="text-blue-600 hover:underline">Sign in to your account</Link></p>
      </section>
    </main>
  );
}
