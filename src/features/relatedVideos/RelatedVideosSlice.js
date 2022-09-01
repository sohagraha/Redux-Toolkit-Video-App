import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedVideos } from './RelatedVideosAPI';

const initialState = {
    videos: [], // array of videos
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchRelatedVideos = createAsyncThunk('videos/fetchRelatedVideos', async (url) => {
    const relatedVideos = await getRelatedVideos(url);
    return relatedVideos;
});

const relatedVideoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        }).addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default relatedVideoSlice.reducer;