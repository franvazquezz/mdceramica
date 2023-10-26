import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = 'http://localhost:3001'
export const newStudentDB = createApi({
  reducerPath: "newStudentDB",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    postNewStudent: builder.mutation({
      query: (data) => ({
        url: `/students`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostStudentMutation } = newStudentDB;