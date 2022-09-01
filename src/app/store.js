import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';
import tagsReducer from '../features/tags/TagsSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,

  },
});
