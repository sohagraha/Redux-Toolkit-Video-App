import React from 'react';
import RelatedVideos from '../relatedVideos/RelatedVideos';
import VideoDescription from './videoDescription/VideoDescription';
import VideoPlayer from './videoPlayer/VideoPlayer';

const MainVideo = () => {
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* <!-- video player --> */}

                        <VideoPlayer />
                        {/* <!-- video description --> */}
                        <VideoDescription />
                    </div>
                    {/* <!-- related videos --> */}
                    <RelatedVideos />
                </div>
            </div>
        </section>
    );
};

export default MainVideo;