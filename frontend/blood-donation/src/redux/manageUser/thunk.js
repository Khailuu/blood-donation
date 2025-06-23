import { manageUserService } from "../../services/manageUserService"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("manageUser/login", async (payload, {rejectWithValue}) => {
    try {
        const response = await manageUserService.login(payload)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
