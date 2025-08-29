"use client";

import LocationMap, { LatLngTuple } from "@/components/Location/LocationMap";
import { useUpdateCandidateLocationMutation } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { locationSchema } from "@/schemas/candidate.schema";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { z } from "zod";

type TFormValues = z.infer<typeof locationSchema>;

const UpdateLocationForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const coordinates = user?.locations?.coordinates ?? [0, 0];
  const initialLongitude = coordinates[0];
  const initialLatitude = coordinates[1];

  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    initialLatitude,
    initialLongitude,
  ]);
  // const [address, setAddress] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");

  const [updateLocation, { isLoading }] = useUpdateCandidateLocationMutation();

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      latitude: initialLatitude.toString(),
      longitude: initialLongitude.toString(),
      address: "",
      postalCode: "",
    },
  });

  // Watch latitude and longitude
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  // Update map when latitude/longitude change in form
  useEffect(() => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  // Update address and postal code in form state
  const handleLocationSelect = (
    location: LatLngTuple,
    selectedAddress?: string,
    selectedPostalCode?: string
  ) => {
    setSelectedLocation(location);
    // setAddress(selectedAddress ?? "");
    // setPostalCode(selectedPostalCode ?? "");

    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
    setValue("address", selectedAddress ?? "");
    setValue("postalCode", selectedPostalCode ?? "");
  };

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    updateLocation(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl text-gray-800 font-semibold mb-4">
        Update Map Location
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
          <LocationMap
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          />
        </div>

        {/* Show Address */}
        {/* <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={address}
            readOnly
          />
        </div> */}

        {/* Show Postal Code */}
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

export default UpdateLocationForm;
