import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",   // ✅ MUST BE STRING
  reducers: {
    setSearch: (state, action) => action.payload
  }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;