import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bannerService = createApi({
  reducerPath: "banner",
  tagTypes: "banners",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createBanner: builder.mutation({
        query: (data) => {
          return {
            url: "/api/banners",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["banners"],
      }),
      getBanners: builder.query({
        query: () => {
          return {
            url: "/api/banners",
            method: "GET",
          };
        },
        providesTags: ["banners"],
      }),
      updateBanner: builder.mutation({
        query: ({ formData, bannerId }) => {
          return {
            url: `/api/banners/${bannerId}`,
            method: "PUT",
            body: formData,
          };
        },
        invalidatesTags: ["banners"],
      }),
      deleteBanner: builder.mutation({
        query: ({ bannerId }) => {
          return {
            url: `/api/banners/${bannerId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["banners"],
      }),
    };
  },
});
export const {
  useCreateBannerMutation,
  useGetBannersQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannerService;
export default bannerService;
