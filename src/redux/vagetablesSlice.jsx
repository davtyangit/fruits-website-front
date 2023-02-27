import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchVagetables = createAsyncThunk("vagetables/FetchVagetables", async () => {
    try {
        const res = await axios.get('http://localhost:3004/vagetables')
        const data = res.data
        console.log(data, 'da')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchLimitedVagetables = createAsyncThunk("vagetables/FetchLimitedVagetables", async () => {
    try {
        const res = await axios.get('http://localhost:3004/vagetables?_limit=6')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchVagetablesById = createAsyncThunk("vagetables/FetchVagetablesById", async (id) => {
    try {
        const res = await axios.get(`http://localhost:3004/vagetables/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const SearchVagetables = createAsyncThunk("vagetables/SearchVagetables", async (query) => {
    try {
        const res = await axios.get(`http://localhost:3004/vagetables?q=${query}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

const vagetablesSlice = createSlice({
    name: "vagetables",
    initialState: {
        vagetables: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchVagetables.pending, (state, action) => {
                state.loading = true
            }).addCase(FetchVagetables.fulfilled, (state, action) => {
                state.loading = false
                state.vagetables = action.payload
            }).addCase(FetchVagetables.rejected, (state, action) => {
                state.error = null;
                state.loading = false
            })

            .addCase(FetchLimitedVagetables.pending, (state, action) => {
                state.loading = true
            }).addCase(FetchLimitedVagetables.fulfilled, (state, action) => {
                state.loading = false
                state.vagetables = action.payload
            }).addCase(FetchLimitedVagetables.rejected, (state, action) => {
                state.error = null;
                state.loading = false
            })

            .addCase(FetchVagetablesById.pending, (state) => {
                state.loading = true
            }).addCase(FetchVagetablesById.fulfilled, (state, action) => {
                state.loading = false
                state.vagetables = action.payload
            }).addCase(FetchVagetablesById.rejected, (state) => {
                state.error = null;
                state.loading = false
            })

            .addCase(SearchVagetables.pending, (state) => {
                state.loading = true
            }).addCase(SearchVagetables.fulfilled, (state, action) => {
                state.loading = false
                state.vagetables = action.payload
            }).addCase(SearchVagetables.rejected, (state) => {
                state.error = null;
                state.loading = false
            })
    }
})

export default vagetablesSlice.reducer