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
      {/* Header */}
      {/* <header className="bg-gray-50 py-4 px-4 md:px-8 flex justify-between items-center border-b border-gray-200">
        <div className="font-medium">Contact</div>
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span>Contact</span>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="text-sm text-gray-500 mb-2">Who we are</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We care about customer services</h1>
            <p className="text-gray-600 mb-6">
              Want to chat? We&apos;d love to hear from you! Get in touch with our Customer Success Team to inquire
              about speaking events, advertising rates, or just say hello.
            </p>
            {/* <div>
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded transition duration-300">
                Email Support
              </button>
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <ContactForm/>
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