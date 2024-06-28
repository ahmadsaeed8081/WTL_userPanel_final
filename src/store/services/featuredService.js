import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const featuredService = createApi({
  reducerPath: "featured",
  tagTypes: "featureds",
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
      createFeatured: builder.mutation({
        query: (data) => {
          return {
            url: "/api/featured",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["featureds"],
      }),
      getFeatured: builder.query({
        query: () => {
          return {
            url: "/api/featured",
            method: "GET",
          };
        },
        providesTags: ["featureds"],
      }),
      updateFeatured: builder.mutation({
        query: ({ formData, bannerId }) => {
          return {
            url: `/api/featured/${bannerId}`,
            method: "PUT",
            body: formData,
          };
        },
        invalidatesTags: ["featureds"],
      }),
      deleteFeatured: builder.mutation({
        query: ({ bannerId }) => {
          return {
            url: `/api/featured/${bannerId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["featureds"],
      }),
    };
  },
});
export const {
  useCreateFeaturedMutation,
  useGetFeaturedQuery,
  useUpdateFeaturedMutation,
  useDeleteFeaturedMutation,
} = featuredService;
export default featuredService;
