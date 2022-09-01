import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tags: [],
    searchTag: "",
    searchAuthor: '',
    page: 1,
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
        },
        searchByAuthor: (state, action) => {
            state.searchAuthor = action.payload;
        },
        resetSearch: (state) => {
            state.searchTag = "";
            state.tags = [];
            state.searchAuthor = '';
        }
    },

});

export default filterSlice.reducer;
export const { searchTag, tagSelected, tagUnselected, searchByAuthor, resetSearch } = filterSlice.actions;