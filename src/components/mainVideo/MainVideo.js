import React from 'react';
import RelatedVideos from '../relatedVideos/RelatedVideos';
import VideoDescription from './videoDescription/VideoDescription';
import VideoPlayer from './videoPlayer/VideoPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideo } from '../../features/video/videoSlice';
import { useParams } from 'react-router-dom';
import Loading from '../ui/loading/Loading';
import Error from '../ui/error/Error';

const MainVideo = () => {
    const dispatch = useDispatch();
    const { videoId } = useParams();

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    const { video, isLoading, isError, error } = useSelector((state) => state.video);

    let content;

    if (isLoading) {
        content = <Loading />;
    } else if (!isLoading && isError) {
        content = <Error error={error} />;
    } else if (!isLoading && !isError && video.id) {
        content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                {/* <!-- video player --> */}

                <VideoPlayer video={video} />
                {/* <!-- video description --> */}
                <VideoDescription video={video} />
            </div>
            {/* <!-- related videos --> */}
            <RelatedVideos />
        </div>;
    }
    else if (!isLoading && !isError && !video?.id) {
        content = <div>No video found</div>;
    }


    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {
                    content
                }
            </div>
        </section>
    );
};

export default MainVideo;