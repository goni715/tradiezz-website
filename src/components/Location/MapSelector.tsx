/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

export interface TLocation {
  lat: number
  lng: number
  address: string
  city?: string
  postalCode?: string
}

interface MapSelectorProps {
  onLocationSelect: (location: TLocation) => void
  selectedLocation: TLocation | null
}

export default function MapSelector({
  onLocationSelect,
  selectedLocation,
}: MapSelectorProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current).setView([51.52055, 0.10814], 13)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    mapInstanceRef.current = map

    map.on("click", async (e) => {
      const { lat, lng } = e.latlng

      if (markerRef.current) {
        map.removeLayer(markerRef.current)
      }

      markerRef.current = L.marker([lat, lng]).addTo(map)

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
        )
        const data = await res.json()

        const address = data.display_name || `${lat}, ${lng}`
        const city =
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          ""
        const postalCode = data.address?.postcode || ""

        onLocationSelect({
          lat,
          lng,
          address,
          city,
          postalCode,
        })
      } catch {
        onLocationSelect({
          lat,
          lng,
          address: `${lat}, ${lng}`,
        })
      }
    })

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [onLocationSelect])

  useEffect(() => {
    if (!mapInstanceRef.current || !selectedLocation) return

    if (markerRef.current) {
      mapInstanceRef.current.removeLayer(markerRef.current)
    }

    markerRef.current = L.marker([
      selectedLocation.lat,
      selectedLocation.lng,
    ]).addTo(mapInstanceRef.current)

    mapInstanceRef.current.setView(
      [selectedLocation.lat, selectedLocation.lng],
      13
    )
  }, [selectedLocation])

  return <div ref={mapRef} className="w-full h-full" />
}
