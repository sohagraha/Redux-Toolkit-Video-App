import React from 'react';
import LikeDislike from './likeDislike/LikeDislike';

const VideoDescription = ({ video }) => {
    const { title, date, description, likes, unlikes } = video;
    return (
        <div>
            <h1
                className="text-lg font-semibold tracking-tight text-slate-800"
            >
                {title}
            </h1>
            <div
                className="pb-4 flex items-center space-between border-b"
            >
                <h2
                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                >
                    Uploaded on {date}
                </h2>

                {/* <!-- like/unlike --> */}
                <LikeDislike likes={likes} unlikes={unlikes} />
            </div>

            <div
                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
            >
                {description}
            </div>
        </div>
    );
};

export default VideoDescription;