import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tags: [],
    searchTag: "",
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchTag: (state, action) => {
            state.searchTag = action.payload;
        },
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagUnselected: (state, action) => {
            state.tags = state.tags.filter(tag => tag !== action.payload);
        }
    },

});

export default filterSlice.reducer;
export const { searchTag, tagSelected, tagUnselected } = filterSlice.actions;