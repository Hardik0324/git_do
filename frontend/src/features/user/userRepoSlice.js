import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userRepoInfo: [],
  error: "",
};

export const fetchUserRepo = createAsyncThunk("user/fetchUserRepo", async (userRepoUrl) => {
  const data = await axios.get(userRepoUrl);
  return data.data;
});

const userRepoSlice = createSlice({
  name: "userRepo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserRepo.fulfilled, (state, action) => {
      state.loading = false;
      state.userRepoInfo = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserRepo.rejected, (state, action) => {
      state.loading = false;
      state.userRepoInfo = [];
      state.error = action.error.message;
    });
  },
});

export default userRepoSlice.reducer;
