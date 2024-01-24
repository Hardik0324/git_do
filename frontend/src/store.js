import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import userRepoReducer from "./features/user/userRepoSlice"

const store = configureStore({
    reducer:{
        user: userReducer,
        userRepo: userRepoReducer
    },
})


export default store
  