import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakerApi = createApi({
  reducerPath: 'faker/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakerapi.it/api/v1/',
  }),
  endpoints: build => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: 'books',
        params: {
          '_quantity': search,
        }
      })
    }),
  }),
});

export const { useSearchUsersQuery } = fakerApi;