"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Bookmark, BookmarkCheck, Lock } from "lucide-react";
import { ICandidate } from "@/types/candidate.type";
import Image from "next/image";
import CandidateButton from "../ui/CandidateButton";
import { useRouter } from "next/navigation";
import findLabel from "@/utils/findLabel";
import { candidateExperienceOptions } from "@/data/candidate.options";
import { useAddRemoveFavoriteCandidateMutation } from "@/redux/features/candidate/candidateApi";

interface TProps {
  candidate: ICandidate;
  viewMode: "list" | "grid";
}

const CandidateCard: React.FC<TProps> = ({ candidate, viewMode }) => {
  const router = useRouter();
  const imageSrc = candidate.profileImg || "/images/profile_placeholder.png";

  const [isFavorite, setIsFavorite] = useState(false);
  const [addRemoveFavoriteCandidate] = useAddRemoveFavoriteCandidateMutation();

  useEffect(() => {
    setIsFavorite(candidate?.isFavorite);
  }, [candidate]);

  const toggleFavourite = (userId: string) => {
    setIsFavorite((prev) => !prev);
    addRemoveFavoriteCandidate({
      candidateUserId: userId,
    });
  };

  const PrivateBadge = ({ viewMode }: { viewMode: "list" | "grid" }) => (
    <div className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
      <Lock size={12} />
      {viewMode === "grid" && <span>Private</span>}
    </div>
  );

  /* ================= LIST VIEW ================= */
  if (viewMode === "list") {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm">
        {/* Avatar */}
        <div className="relative">
          {candidate.isPrivate && <PrivateBadge viewMode="list" />}

          <Image
            src={imageSrc}
            alt="candidate"
            width={64}
            height={64}
            className="h-16 w-16 rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {candidate.fullName}
              </h3>

              <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                <MapPin size={12} />
                <span className="line-clamp-1">{candidate.address}</span>
                <span className="mx-1">•</span>
                <span className="capitalize">
                  {findLabel(candidateExperienceOptions, candidate.experience)}
                </span>
              </div>
            </div>

            {/* Favorite */}
            <button
              onClick={() => toggleFavourite(candidate.userId)}
              className="cursor-pointer rounded-md p-1 text-gray-400 hover:text-blue-500"
            >
              {isFavorite ? (
                <BookmarkCheck className="h-5 w-5 text-blue-500" />
              ) : (
                <Bookmark className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Action */}
        <CandidateButton
          size="sm"
          variant="outline"
          disabled={candidate.isPrivate}
          onClick={() => {
            if (candidate.isPrivate) return;
            router.push(`/find-candidates/details/${candidate.userId}`);
          }}
          className={`${
            candidate.isPrivate
              ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:text-black"
              : "hover:bg-yellow-500 hover:text-black"
          }`}
        >
          {candidate?.isPrivate ? "Send Request" : "View Profile"}
        </CandidateButton>
      </div>
    );
  }

  /* ================= GRID VIEW ================= */
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-300 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm">
      {/* Image */}
      <div className="relative">
        {candidate.isPrivate && <PrivateBadge viewMode="grid" />}

        <Image
          src={imageSrc}
          alt="candidate"
          width={400}
          height={300}
          className="h-44 w-full rounded-lg object-cover"
        />

        {/* Favorite */}
        <button
          onClick={() => toggleFavourite(candidate.userId)}
          className="absolute right-2 top-2 cursor-pointer rounded-full bg-white/90 p-1 text-gray-500 hover:text-blue-500"
        >
          {isFavorite ? (
            <BookmarkCheck className="h-5 w-5 text-blue-500" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="mt-3 flex-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {candidate.fullName}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
          <MapPin size={12} />
          <span className="line-clamp-1">{candidate.address}</span>
        </div>
      </div>

      {/* Action */}
      <CandidateButton
        size="sm"
        variant="outline"
        disabled={candidate.isPrivate}
        onClick={() => {
          if (candidate.isPrivate) return;
          router.push(`/find-candidates/details/${candidate.userId}`);
        }}
        className={`${
          candidate.isPrivate
            ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
            : "hover:bg-yellow-500 hover:text-black"
        }`}
      >
        {candidate?.isPrivate ? "Send Request" : "View Profile"}
      </CandidateButton>
    </div>
  );
};

export default CandidateCard;
