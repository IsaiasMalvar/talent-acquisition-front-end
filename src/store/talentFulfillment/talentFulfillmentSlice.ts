/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import talentFulfillmentService from "./talentFulfillmentService";
import {
    TalentFulfillmentSliceState,
    TalentRequestFulfillment,
} from "../types";

const initialState: TalentFulfillmentSliceState = {
    talentFulfillments: [],
    talentFulfillment: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getAllTalentFulfillments = createAsyncThunk(
    "talentFulfillments/getAllFulfillments",
    async (_, thunkAPI) => {
        try {
            return await talentFulfillmentService.getAllTalentFulfillments();
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getTalentFulfillmentById = createAsyncThunk(
    "talentFulfillments/getTalentFulfillmentById",
    async (talentFulfillmentId: string, thunkAPI) => {
        try {
            const talentFulfillment =
                await talentFulfillmentService.getTalentFulfillmentById(
                    talentFulfillmentId
                );
            return talentFulfillment;
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const approveTalentFulfillmentJobPost = createAsyncThunk(
    "talentFulfillments/approveTalentFulfillmentJobPost",
    async (approvedTalentFulfillment: TalentRequestFulfillment, thunkAPI) => {
        try {
            return await talentFulfillmentService.approveTalentFulfillmentJobPost(
                approvedTalentFulfillment
            );
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const talentFulfillmentSlice = createSlice({
    name: "talentFulfillment",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTalentFulfillments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTalentFulfillments.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.talentFulfillments = action.payload;
            })
            .addCase(getAllTalentFulfillments.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload as string;
            })

            .addCase(getTalentFulfillmentById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTalentFulfillmentById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.talentFulfillment = action.payload;
            })
            .addCase(getTalentFulfillmentById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
            })
            .addCase(approveTalentFulfillmentJobPost.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(
                approveTalentFulfillmentJobPost.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.talentFulfillment = action.payload;
                }
            )

            .addCase(
                approveTalentFulfillmentJobPost.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload as string;
                }
            );
    },
});

export const { reset } = talentFulfillmentSlice.actions;
export default talentFulfillmentSlice.reducer;
