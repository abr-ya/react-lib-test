import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IActSearchRequestParams } from "api/index";
import { isError, typedCatchHandler } from "lib/helpers/rtkHelper";

import { IFormData } from "../SearchContainer/interfaces";

import { findActsReguest } from "./actsService";
import { normalizeActsListResponse } from "./normalize";

import { IActListData } from ".";

interface IState {
  data: IActListData;
  error: string | null;
  formData: IFormData;
  isEmptyModal: boolean;
  isFetching: boolean;
  page: number;
  start: "new" | "prev";
}

const initialForm: IFormData = {
  category: [],
  date1from: "",
  date1to: "",
  date2from: "",
  date2to: "",
  date3from: "",
  date3to: "",
  input1: "",
  input2: "",
  status: [
    { label: "Черновик", value: "draft" },
    { label: "На согласовании", value: "for_approval" },
  ],
};

const initialState: IState = {
  data: {
    content: [],
    pageable: { pageNumber: 1, pageSize: 20 },
    totalElements: 0,
    totalPages: 0,
  },
  error: null,
  formData: initialForm,
  isEmptyModal: false,
  isFetching: false,
  page: 1,
  start: "new",
};

export const findActs = createAsyncThunk<number, IActSearchRequestParams, { rejectValue: string }>(
  "acts/find",
  // @ts-ignore
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await findActsReguest(params);

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "acts/find");
    }
  },
);

const actsListSlice = createSlice({
  initialState,
  name: "actsList",

  extraReducers: (builder) => {
    builder
      .addCase(findActs.pending, (state) => {
        state.isFetching = true;
        state.error = null;
        if (state.start === "new") state.page = 1;
      })
      .addCase(findActs.fulfilled, (state, action: PayloadAction<any>) => {
        state.isFetching = false;
        state.data = normalizeActsListResponse(action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isFetching = false;
        state.data = initialState.data;
      });
  },
  reducers: {
    actSetFormData(state, { payload }: PayloadAction<IFormData>) {
      state.formData = payload;
    },
    actSetPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    actSetStart(state, { payload }: PayloadAction<"new" | "prev">) {
      state.start = payload;
      state.error = null;
    },
    isEmptyModalOff(state) {
      state.isEmptyModal = false;
    },
    isEmptyModalOn(state) {
      state.isEmptyModal = true;
    },
    reset() {
      return initialState;
    },
  },
});

export const { actSetFormData, actSetPage, actSetStart, reset } = actsListSlice.actions;

export default actsListSlice.reducer;
