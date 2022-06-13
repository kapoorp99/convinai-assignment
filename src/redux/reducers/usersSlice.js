import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../../api/users";

export const fetchUsers = createAsyncThunk("users/fetchall", async () => {
    try {
        const res = await fetchAllUsers()
        return { data: res }
    }
    catch (err) {
        return { error: "Error while fetching users data" }
    }
})


const initialState = {
    data: {},
    loading: false,
    error: ""
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching users data"
        },
        [fetchUsers.fulfilled]: (state, action) => {
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


export default usersSlice.reducer