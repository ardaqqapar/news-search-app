import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/app/types';
import { RootState } from '../store';

interface NewsState {
  news: Article[];
  page: number;
  url: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: NewsState = {
  news: [],
  page: 0,
  url: '',
  isLoading: false,
  isError: false,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async ({ page, URL }: { page: number; URL: string }) => {
  const response = await fetch(`${URL}&page=${page}`);
  const data = await response.json();
  return data.response.results;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.news = [...state.news, ...action.payload];
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectNews = (state: RootState) => state.news.news;
export const selectPage = (state: RootState) => state.news.page;
export const selectUrl = (state: RootState) => state.news.url;

export const { setUrl, setPage } = newsSlice.actions;

export default newsSlice.reducer;

