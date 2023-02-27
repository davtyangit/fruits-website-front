import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchFruits = createAsyncThunk("fruits/FetchFruits", async () => {
    try {
        const res = await axios.get('http://localhost:3004/products')
        const data = res.data
        console.log(data, 'da')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchCardContent = createAsyncThunk("fruits/FetchCardContent", async () => {
    try {
        const res = await axios.get('http://localhost:5000/card-data')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchLimitedFruits = createAsyncThunk("fruits/FetchLimitedFruits", async () => {
    try {
        const res = await axios.get('http://localhost:3004/products?_limit=6')
        const data = res.data
        console.log(data, 'da')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchFruitsById = createAsyncThunk("fruits/FetchFruitsById", async (id) => {
    try {
        const res = await axios.get(`http://localhost:3004/products/${id}`)
        const data = res.data
        console.log(data, 'da')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const SearchFruit = createAsyncThunk("fruits/SearchFruit", async (query) => {
    try {
        const res = await axios.get(`http://localhost:3004/products?q=${query}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const RemoveFromCard = createAsyncThunk("products/RemoveFromCard", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:5000/card-data/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const AddToCard = createAsyncThunk("products/AddToCard", async (newData) => {
    try {
        const res = await axios.post(`http://localhost:5000/card-data`, newData)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})


const fruitsSlice = createSlice({
    name: "fruits",
    initialState: {
        fruits: [],
        loading: false,
        card: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(AddToCard.pending, (state, action) => {
                state.loading = true
            }).addCase(AddToCard.fulfilled, (state, action) => {
                state.loading = false
                state.card.length = state.card.length + 1
            }).addCase(AddToCard.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(FetchFruits.pending, (state, action) => {
                state.loading = true
            }).addCase(FetchFruits.fulfilled, (state, action) => {
                state.loading = false
                state.fruits = action.payload
            }).addCase(FetchFruits.rejected, (state, action) => {
                state.error = null;
                state.loading = false
            })

            .addCase(RemoveFromCard.pending, (state) => {
                state.loading = true
            }).addCase(RemoveFromCard.fulfilled, (state, action) => {
                state.card = state.card.filter((item) => item.id !== action.payload)
                state.loading = false
            }).addCase(RemoveFromCard.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            })

            .addCase(FetchCardContent.pending, (state, action) => {
                state.loading = true
            }).addCase(FetchCardContent.fulfilled, (state, action) => {
                state.loading = false
                state.card = action.payload
            }).addCase(FetchCardContent.rejected, (state, action) => {
                state.error = null;
                state.loading = false
            })

            .addCase(FetchLimitedFruits.pending, (state, action) => {
                state.loading = true
            }).addCase(FetchLimitedFruits.fulfilled, (state, action) => {
                state.loading = false
                state.fruits = action.payload
            }).addCase(FetchLimitedFruits.rejected, (state, action) => {
                state.error = null;
                state.loading = false
            })

            .addCase(FetchFruitsById.pending, (state) => {
                state.loading = true
            }).addCase(FetchFruitsById.fulfilled, (state, action) => {
                state.loading = false
                state.fruits = action.payload
            }).addCase(FetchFruitsById.rejected, (state) => {
                state.error = null;
                state.loading = false
            })

            .addCase(SearchFruit.pending, (state) => {
                state.loading = true
            }).addCase(SearchFruit.fulfilled, (state, action) => {
                state.loading = false
                state.fruits = action.payload
            }).addCase(SearchFruit.rejected, (state) => {
                state.error = null;
                state.loading = false
            })
    }
})

export default fruitsSlice.reducer