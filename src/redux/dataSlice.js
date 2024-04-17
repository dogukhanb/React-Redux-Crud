import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDateFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingDateFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
    },
    deleteDateFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((dt) =>
          dt.id == action.payload.id ? { ...dt, ...action.payload } : dt
        ),
      ];
    },
    searchDateFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDateFunc,
  deleteDateFunc,
  updateDataFunc,
  sortingDateFunc,
  searchDateFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
