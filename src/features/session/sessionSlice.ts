import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { postAuthRequest } from "./sessionService";
import { defaultSession, ISessionState, Site, Token } from "./models";
import { normalizeIsAdmin } from "./normalize";
import { isError, typedCatchHandler } from "../../lib/helpers/rtkHelper";
import { saveToken } from "../../api/tokenHelper";

export const initialState: ISessionState = defaultSession;

export const postAuth = createAsyncThunk<{ access_token: string }, undefined, { rejectValue: string }>(
  "entities/session/postAuth",
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await postAuthRequest({ login: "sbt-aft-oad", password: "" });

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "entities/session/postAuth");
    }
  },
);

const sessionSlice = createSlice({
  initialState,
  name: "entities/session",

  extraReducers: (builder) => {
    builder
      .addCase(postAuth.pending, (state) => {
        state.auth.isFetching = true;
        state.auth.error = null;
      })
      .addCase(postAuth.fulfilled, (state, action) => {
        state.auth.isFetching = false;
        state.auth.data = action.payload; // todo: нормализовать здесь? - подумать!
        state.isAdmin = normalizeIsAdmin(action.payload.access_token);
        const token = action.payload.access_token;
        state.token = token;
        saveToken(token);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.auth.error = action.payload;
        state.auth.isFetching = false;
      });
  },
  reducers: {
    clearAdmin(state) {
      state.isAdmin = null;
    },
    clearSession() {
      return initialState;
    },
    clearToken(state) {
      state.token = null;
    },
    setToken(state, { payload }: PayloadAction<Token>) {
      state.token = `Bearer ${payload}`;
    },
    setUserCurrentSite(state, { payload }: PayloadAction<Site>) {
      state.user.currentSite = payload;
    },
    setUserCurrentSiteFail(state) {
      state.user.currentSite = null;
    },
  },
});

export const { clearAdmin, clearSession, clearToken, setToken, setUserCurrentSite, setUserCurrentSiteFail } =
  sessionSlice.actions;

export default sessionSlice.reducer;
