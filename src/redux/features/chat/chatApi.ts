
import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { IParam } from "@/types/global.type";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/chat/get-chats",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 120,
      providesTags: [TagTypes.chats],
    }),
  }),
});

export const { useGetChatsQuery } = chatApi;
