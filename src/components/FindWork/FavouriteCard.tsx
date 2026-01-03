/* eslint-disable react-hooks/exhaustive-deps */
import {
  useAddRemoveFavouriteJobMutation,
  useGetFavouriteJobIdsQuery,
} from "@/redux/features/job/jobApi";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";

type TProps = {
  jobId: string;
};

const FavouriteCard = ({ jobId }: TProps) => {
  const [addRemoveFavouriteJob] = useAddRemoveFavouriteJobMutation();
  const { data, isLoading, isError } = useGetFavouriteJobIdsQuery(undefined);
  const favouriteJobIds = data?.data || [];
  const [isFavourite, setIsFavourite] = useState(false);

  // Update isFavourite when favouriteJobIds are loaded
  useEffect(() => {
    setIsFavourite(favouriteJobIds.includes(jobId));
  }, [favouriteJobIds, jobId]);

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
    addRemoveFavouriteJob({
      jobId
    });
  };

  if (isLoading || isError) return null;

  if (!isLoading && !isError) {
    return (
      <>
        {isFavourite ? (
          <BookmarkCheck
            onClick={toggleFavourite}
            className="h-5 w-5 cursor-pointer text-blue-500"
          />
        ) : (
          <Bookmark
            onClick={toggleFavourite}
            className="h-5 w-5 cursor-pointer text-gray-800"
          />
        )}
      </>
    );
  }
};

export default FavouriteCard;
