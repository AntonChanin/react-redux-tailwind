import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, DataRow } from '../../models';

export const githubApi = createApi({
  reducerPath: 'faker/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakerapi.it/api/v1/',
  }),
  endpoints: build => ({
    searchUsers: build.query<DataRow[], string>({
      query: (search: string) => ({
        url: 'books',
        params: {
          '_quantity': search,
        }
      }),
      transformResponse: (response: ServerResponse<DataRow>) => response.data,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;