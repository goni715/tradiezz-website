"use client";

import LocationMap, { LatLngTuple } from "@/components/Location/LocationMap";
import { useUpdateCandidateLocationMutation } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";

interface LocationFormData {
  latitude: string;
  longitude: string;
  address: string;
  postalCode: string;
}

const SetLocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    51.5072, 0.1276,
  ]);
  // const [address, setAddress] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");

  const [updateLocation, { isLoading }] = useUpdateCandidateLocationMutation();

  const { handleSubmit, setValue, watch } = useForm<LocationFormData>({
    defaultValues: {
      latitude: "51.5072",
      longitude: "0.1276",
      address: "",
      postalCode: "",
    },
  });

  const latitude = watch("latitude");
  const longitude = watch("longitude");

  useEffect(() => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  const handleLocationSelect = (
    location: LatLngTuple,
    selectedAddress?: string,
    selectedPostalCode?: string
  ) => {
    setSelectedLocation(location);
    // setAddress(selectedAddress || "");
    // setPostalCode(selectedPostalCode || "");

    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
    setValue("address", selectedAddress || "");
    setValue("postalCode", selectedPostalCode || "");
  };

  const onSubmit = (data: LocationFormData) => {
    updateLocation(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl text-gray-800 font-semibold mb-4">
        Set Map Location
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
          <LocationMap
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          />
        </div>

        {/* Address display */}
        {/* <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={address}
            readOnly
          />
        </div> */}

        {/* Postal code display */}
        {/* <div>
          <label className="block font-medium mb-1">Postal Code</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={postalCode}
            readOnly
          />
        </div> */}

        <button
          type="submit"
          className="px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default SetLocationForm;
