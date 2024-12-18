/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import talentRequestService from "./talentRequestService";
import { TalentRequest, TalentRequestSliceState } from "../types";

const initialState: TalentRequestSliceState = {
    talentRequests: [],
    talentRequest: {
        candidateSkills: {
            coreSkill: "",
            skillLevel: "",
        },
        jobDescription: {
            qualifications: "",
            responsibilities: "",
        },
        startDate: "",
        talentRequestTitle: "",
        requestStatus: "",
    },
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createTalentRequest = createAsyncThunk(
    "talentRequests/createTalentRequest",
    async (talentRequest: TalentRequest, thunkAPI) => {
        try {
            return await talentRequestService.createTalentRequest(
                talentRequest
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

export const getAllTalentRequests = createAsyncThunk(
    "talentRequests/getAllTalentRequests",
    async (_, thunkAPI) => {
        try {
            return await talentRequestService.getAllTalentRequests();
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

export const getTalentRequestById = createAsyncThunk(
    "talentRequests/getTalentRequestById",
    async (talentRequestId: string, thunkAPI) => {
        try {
            return await talentRequestService.getTalentRequestById(
                talentRequestId
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

export const talentRequestSlice = createSlice({
    name: "talentRequest",
    initialState,
    reducers: {
        reset: () => initialState,
    },

    extraReducers: (builder) => {
        builder

            .addCase(createTalentRequest.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(createTalentRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.talentRequest = action.payload;
            })

            .addCase(createTalentRequest.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload as string;
            })

            .addCase(getAllTalentRequests.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTalentRequests.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.talentRequests = action.payload;
            })
            .addCase(getAllTalentRequests.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload as string;
            })

            .addCase(getTalentRequestById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTalentRequestById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.talentRequest = action.payload;
            })
            .addCase(getTalentRequestById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
            });
    },
});

export const { reset } = talentRequestSlice.actions;
export default talentRequestSlice.reducer;
