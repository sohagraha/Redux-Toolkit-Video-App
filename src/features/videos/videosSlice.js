import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideos } from './videosApi';

const initialState = {
    videos: [], // array of videos
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos();
    return videos;
});

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        }).addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default videoSlice.reducer;