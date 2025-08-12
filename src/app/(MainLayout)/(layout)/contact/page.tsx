"use client"
import ContactForm from "@/components/contact/ContactForm"
import MapLoading from "@/components/loader/MapLoading";
import dynamic from "next/dynamic";



const ContactPage = () => {
  const ContactMap = dynamic(() => import('@/components/contact/ContactMap'), {
    ssr: false,
    loading: () => <MapLoading />
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-gray-500 mb-2"> Get in Touch </h1>
            <h1 className="text-md font-bold text-gray-800 mb-4">
              Have a question? Need support? Want to speak to a real human? We’d
              love to hear from you.
            </h1>
            <div className="py-6 rounded-2xl ">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Common Reasons to Get in Touch
              </h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-700">
                <li>
                  <span className="font-medium text-gray-900">
                    Help creating or updating your candidate profile
                  </span>
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Support with posting a job or managing applications
                  </span>
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Questions about pricing, plans, or how hiring works
                  </span>
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Reporting a technical issue or bug
                  </span>
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Just saying hello!
                  </span>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Let&rsquo;s Build Something Together
              </h2>
              <p className="text-gray-900">
                We believe in direct, honest connections, and that starts with
                us. Drop us a message using the contact form below or email us
                directly. We’ll get back to you as soon as we can.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Contact with us
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Dynamic Map Section */}
        <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden shadow-md">
          <ContactMap />
        </div>
      </main>
    </div>
  )
}

export default ContactPage;