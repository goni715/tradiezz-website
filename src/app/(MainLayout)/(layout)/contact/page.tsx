/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useCallback, useEffect } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import ContactForm from "@/components/contact/ContactForm"

// Define the type for the Google Maps API
declare global {
  interface Window {
    google: any
  }
}

// Default center coordinates (you can change these to your business location)
const defaultCenter = {
  lat: 41.8781,
  lng: -87.6298, // Chicago coordinates as an example
  //  lat: 23.7619,
  // lng: 90.4331, // Chicago coordinates as an example
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const ContactPage = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
  
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
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
          <span className="font-medium text-gray-900">Just saying hello!</span>
        </li>
      </ol>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Let&rsquo;s Build Something Together 
      </h2>
      <p className="text-gray-900">
        We believe in direct, honest connections, and that starts with us. Drop us a message using the contact form below or email us directly. We’ll get back to you as soon as we can. 
      </p>
    </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
             Contact with us
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Dynamic Map Section */}
        <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden shadow-md">
          {isMounted && (
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  fullscreenControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  styles: [
                    {
                      featureType: "administrative",
                      elementType: "geometry",
                      stylers: [{ visibility: "on" }],
                    },
                    {
                      featureType: "poi",
                      stylers: [{ visibility: "simplified" }],
                    },
                  ],
                }}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          )}
        </div>
      </main>
    </div>
  )
}

export default ContactPage;