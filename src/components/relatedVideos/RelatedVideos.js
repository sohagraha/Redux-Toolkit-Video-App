import React from 'react';
import Video from './video/Video';

const RelatedVideos = () => {
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            <Video />
        </div>
    );
};

export default RelatedVideos;