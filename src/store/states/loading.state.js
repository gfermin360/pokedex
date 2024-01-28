import { createSlice } from "@reduxjs/toolkit";

const loadingModal = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setLoadingModalG: ((state, action) => action.payload)
  }
})

export const { setLoadingModalG } = loadingModal.actions
export default loadingModal.reducer