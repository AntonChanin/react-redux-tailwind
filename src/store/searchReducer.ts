import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  search: string;
}

const LS_SERCH_KEY = 'search';

const initialState: SearchState = {
  search: JSON.parse(localStorage.getItem(LS_SERCH_KEY) ?? '[]'),
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      localStorage.setItem(LS_SERCH_KEY, JSON.stringify(state.search));
    },
  },
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
