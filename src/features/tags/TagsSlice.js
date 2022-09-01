import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTags } from './TagsAPI';

const initialState = {
    tags: [], // array of videos
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tags = action.payload;
        }).addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.tags = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default tagsSlice.reducer;