import React from 'react';
import VideoGridItem from './videoGridItem/VideoGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/loading/Loading';
import Error from '../ui/error/Error';

const VideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
    const { tags, searchTag: search, searchAuthor: author } = useSelector((state) => state.filter);
    console.log(author);
    useEffect(() => {
        dispatch(fetchVideos({ tags, search, author }));
    }, [dispatch, tags, search, author]);

    let content;

    if (isLoading) {
        content = <Loading />;
    } else if (!isLoading && isError) {
        content = <Error error={error} />;
    }
    else if (!isLoading && !isError && videos?.length === 0) {
        content = <div>No videos found</div>;
    }
    else if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map((video) => <VideoGridItem key={video.id} video={video} />);
    }

    return (
        <section className="pt-6">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
                {/* <!-- single video --> */}
                {
                    content
                }

                {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
            </div>
        </section>
    );
};

export default VideoGrid;