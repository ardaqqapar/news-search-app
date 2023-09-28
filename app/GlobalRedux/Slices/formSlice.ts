import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  query: string;
  sortType: string;
  items: string;
}

const initialState: FormState = {
  query: '',
  sortType: 'newest',
  items: '10',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setQuery, setSortType, setItems } = formSlice.actions;

export default formSlice.reducer;
