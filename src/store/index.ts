import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { githubApi } from './fakerApi/faker.api';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);