import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { githubApi } from './fakerApi/faker.api';
import { fakerReducer } from './fakerApi/faker.slice';
import { searchReducer } from './searchReducer';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    faker: fakerReducer,
    searchString: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;