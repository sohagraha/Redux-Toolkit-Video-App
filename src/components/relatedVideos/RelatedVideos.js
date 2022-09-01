import React, { useEffect } from 'react';
import { fetchRelatedVideos } from '../../features/relatedVideos/RelatedVideosSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Video from './video/Video';
import Loading from '../ui/loading/Loading';
import Error from '../ui/error/Error';

const RelatedVideos = ({ currentVideoId, tags }) => {

    const dispatch = useDispatch();

    let url = tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${currentVideoId}&_limit=5` : `id_ne=${currentVideoId}&_limit=5`;

    useEffect(() => {
        dispatch(fetchRelatedVideos(url));
    }, [dispatch, url]);

    const { videos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);

    let content = null;

    if (isLoading) {
        content = <Loading />;
    }
    else if (!isLoading && isError) {
        content = <Error error={error} />;
    }
    else if (!isLoading && !isError && videos?.length === 0) {
        content = <div>No videos found</div>;
    }
    else if (!isLoading && !isError && videos?.length > 0) {
        content = <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {
                videos.map((video) => (
                    <Video key={video.id} video={video} />
                ))
            }
        </div>
    }


    return (
        <>
            {
                content
            }
        </>
    );
};

export default RelatedVideos;