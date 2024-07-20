import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../features/session/sessionSlice";
import actsListReducer from "pages/ActsPage/data/actsListSlice";
import { actsPartsReducer } from "./dictionaries/";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    actsList: actsListReducer,
    dictionaries: combineReducers({
      acts: actsPartsReducer,
    }),
    session: sessionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
