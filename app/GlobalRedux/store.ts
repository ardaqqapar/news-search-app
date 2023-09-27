'use client';

import { configureStore } from "@reduxjs/toolkit";

import formReducer from './Slices/formSlice'
import newsReducer from './Slices/newsSlice'

const store = configureStore({
  reducer: {
    form: formReducer,
    news: newsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
