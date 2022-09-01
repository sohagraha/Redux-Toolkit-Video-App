import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideo } from './videoAPI';

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: null,
};

export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setLike: (state, action) => {
            state.video.likes = state.video.likes += 1;

        },
        setDislike: (state, action) => {
            state.video.unlikes = state.video.unlikes += 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.video = action.payload;
        }).addCase(fetchVideo.rejected, (state, action) => {
            state.isLoading = false;
            state.video = {};
            state.isError = true;
            state.error = action.error?.message;
        });
    },
});

export default videoSlice.reducer;
export const { setLike, setDislike } = videoSlice.actions;