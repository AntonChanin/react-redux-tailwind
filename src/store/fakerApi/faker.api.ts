import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, DataRow } from '../../models';

export const githubApi = createApi({
  reducerPath: 'faker/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakerapi.it/api/v1/',
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<DataRow[], string>({
      query: (search: string) => ({
        url: 'books',
        params: {
          '_locale': 'ru_RU',
          '_quantity': 15,
          '_seed': search,
        },
      }),
      transformResponse: (response: ServerResponse<DataRow>) => response.data,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;