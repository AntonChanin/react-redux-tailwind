import { configureStore } from '@reduxjs/toolkit';
import { fakerApi } from './fakerApi/faker.api';

export const store = configureStore({
  reducer: {
    [fakerApi.reducerPath]: fakerApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fakerApi.middleware),
});