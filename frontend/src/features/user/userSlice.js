import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    userInfo : "",
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async(userId)=>{
    const data = await axios.get(`https://api.github.com/users/${userId}`);
    return data.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false
            state.userInfo = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.userInfo = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer;