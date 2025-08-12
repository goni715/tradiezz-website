"use client";

import { useState } from "react";
import LocationMap, { LatLngTuple } from "../Location/LocationMap";

const ContactMap = () => {
  // Use LatLngTuple for precise typing: [number, number]
  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    51.5072, 0.1276,
  ]);

  const handleLocationSelect = (location: LatLngTuple) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <LocationMap
        onLocationSelect={handleLocationSelect}
        selectedLocation={selectedLocation}
      />
    </>
  );
};

export default ContactMap;
