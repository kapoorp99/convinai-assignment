import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../../api/users";


export const fetchUser = createAsyncThunk("users/fetchsingle", async (userid) => {
    try {
        const res = await fetchUserById(userid)
        return { data: res }
    }
    catch (err) {
        return { error: "Error while fetching user data" }
    }
})


const initialState = {
    data: {},
    loading: false,
    error: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.loading = true
        },
        [fetchUser.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching users data"
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.data = action.payload.data
            }
            else if (action.payload.error) {
                state.error = action.payload.error
            }
        },
    }
})


export default userSlice.reducer