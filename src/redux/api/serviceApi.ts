import { baseApi } from "./baseApi"; // assuming baseApi.ts is set up

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: ({ name, price, duration, sortBy, page = 1, limit = 10 }) => ({
        url: "/services",
        params: { name, price, duration, sortBy, page, limit },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }: { id: string }) => ({
                type: "Services",
                id,
              })),
              { type: "Services", id: "LIST" },
            ]
          : [{ type: "Services", id: "LIST" }],
    }),
  }),
});

export const { useGetAllServicesQuery } = servicesApi;
