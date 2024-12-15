import { createAppSlice } from "./createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface TalentState {
    position: string
}

const initialState: TalentState = {
    position: "",
}

export const testSlice = createAppSlice({
    name: "talent",
    initialState,
    reducers: (create) => ({
        changeRole: create.reducer((state) => {
            state.position = "fulfilled"
        }),
        changeStatus: create.reducer((state, action: PayloadAction<string>) => {
            state.position = action.payload
        }),
    }),
    selectors: {
        selectRole: (talent) => talent.position,
    },
})

export const { changeRole, changeStatus } = testSlice.actions
export const { selectRole } = testSlice.selectors
