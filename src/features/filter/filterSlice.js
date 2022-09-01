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
            state.page = 1;
        },
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
            state.page = 1;
        },
        tagUnselected: (state, action) => {
            state.tags = state.tags.filter(tag => tag !== action.payload);
            state.page = 1;
        },
        searchByAuthor: (state, action) => {
            state.searchAuthor = action.payload;
            state.page = 1;
        },
        pageChanged: (state, action) => {
            state.page = action.payload;
        },
        resetSearch: (state) => {
            state.searchTag = "";
            state.tags = [];
            state.searchAuthor = '';
            state.page = 1;
        }
    },

});

export default filterSlice.reducer;
export const { searchTag, tagSelected, tagUnselected, searchByAuthor, resetSearch, pageChanged } = filterSlice.actions;