/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

interface Location {
  lat: number
  lng: number
  address: string
}

interface MapSelectorProps {
  onLocationSelect: (location: Location) => void
  selectedLocation: Location | null
}

export default function MapSelector({ onLocationSelect, selectedLocation }: MapSelectorProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current).setView([40.7128, -74.006], 10) // Default to NYC

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    mapInstanceRef.current = map

    // Handle map clicks
    map.on("click", async (e) => {
      const { lat, lng } = e.latlng

      // Remove existing marker
      if (markerRef.current) {
        map.removeLayer(markerRef.current)
      }

      // Add new marker
      const marker = L.marker([lat, lng]).addTo(map)
      markerRef.current = marker

      // Reverse geocoding to get address
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        )
        const data = await response.json()
        const address = data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`

        onLocationSelect({ lat, lng, address })
      } catch (error) {
        console.error("Error getting address:", error)
        onLocationSelect({ lat, lng, address: `${lat.toFixed(6)}, ${lng.toFixed(6)}` })
      }
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [onLocationSelect])

  // Update marker when selectedLocation changes
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedLocation) return

    // Remove existing marker
    if (markerRef.current) {
      mapInstanceRef.current.removeLayer(markerRef.current)
    }

    // Add marker at selected location
    const marker = L.marker([selectedLocation.lat, selectedLocation.lng]).addTo(mapInstanceRef.current)
    markerRef.current = marker

    // Center map on selected location
    mapInstanceRef.current.setView([selectedLocation.lat, selectedLocation.lng], 13)
  }, [selectedLocation])

  return <div ref={mapRef} className="w-full h-full" />
}
