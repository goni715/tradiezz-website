"use client";
import SubmitButton from "@/components/form/SubmitButton";
import LocationMap, { LatLngTuple } from "@/components/Location/LocationMap";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { locationSchema } from "@/schema/candidate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type TFormValues = z.infer<typeof locationSchema>;

const UpdateLocationForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const coordinates = user?.coordinates || [0,0];
  const initialLongitude = coordinates[0];
  const initialLatitude = coordinates[1];

  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    initialLatitude,
    initialLongitude,
  ]);

  const [updateProfile, { isLoading }] = useUpdateCandidateProfileMutation();

  const { handleSubmit, setValue, watch } = useForm({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      latitude: initialLatitude.toString(),
      longitude: initialLongitude.toString(),
      address: user?.address,
      postalCode: user?.postalCode || "",
      city: user?.city || ""
    },
  });

  // Watch latitude and longitude
  const latitude = watch("latitude");
  const longitude = watch("longitude");
  const address = watch("address");
  const city = watch("city");
  const postalCode = watch("postalCode");

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
    selectedPostalCode?: string,
    selectedCity?: string
  ) => {
    setSelectedLocation(location);
    // setAddress(selectedAddress ?? "");
    // setPostalCode(selectedPostalCode ?? "");

    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
    setValue("address", selectedAddress ?? "");
    setValue("postalCode", selectedPostalCode ?? "");
    setValue("city", selectedCity ?? "");
  };

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    updateProfile(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl text-gray-800 font-semibold mb-4">
        Update Map Location
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Location address</label>
          <input
            type="text"
            disabled
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
            value={address}
            readOnly
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Postal Code</label>
            <input
              type="text"
              disabled
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
              value={postalCode}
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              disabled
              className="w-full border border-gray-300 rounded px-3 py-2 disabled focus:outline-none disabled:cursor-not-allowed"
              value={city}
              readOnly
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
          <LocationMap
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          />
        </div>
        <SubmitButton isLoading={isLoading}> Save Changes </SubmitButton>
      </form>
    </div>
  );
};

export default UpdateLocationForm;
