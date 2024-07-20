/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { isError, typedCatchHandler } from "../../../lib/helpers/rtkHelper";

import { getStatusesReguest, getCategoriesReguest } from "./dictService";
import { defaultActsDictionary, IActDictItem } from "./models";

export const getStatusesDict = createAsyncThunk<IActDictItem[], undefined, { rejectValue: string }>(
  "ent/dict/getStatuses",
  // @ts-ignore
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await getStatusesReguest();

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "ent/dict/getStatuses");
    }
  },
);

export const getCategoriesDict = createAsyncThunk<IActDictItem[], undefined, { rejectValue: string }>(
  "ent/dict/getCategories",
  // @ts-ignore
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await getCategoriesReguest();

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "ent/dict/getCategories");
    }
  },
);

const actsPartsSlice = createSlice({
  initialState: defaultActsDictionary,
  name: "ent/dict/actsParts",

  extraReducers: (builder) => {
    builder
      .addCase(getStatusesDict.pending, (state) => {
        state.status.isFetching = true;
        state.status.error = null;
      })
      .addCase(getStatusesDict.fulfilled, (state, action) => {
        state.status.isFetching = false;
        state.status.data = action.payload; // todo: нормализовать здесь? - подумать!
      })
      .addCase(getCategoriesDict.pending, (state) => {
        state.category.isFetching = true;
        state.category.error = null;
      })
      .addCase(getCategoriesDict.fulfilled, (state, action) => {
        state.category.isFetching = false;
        state.category.data = action.payload; // todo: нормализовать здесь? - подумать!
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.status.error = action.payload;
        state.status.isFetching = false;
      });
  },
  reducers: {},
});

export const actsPartsReducer = actsPartsSlice.reducer;
