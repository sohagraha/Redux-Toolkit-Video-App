import React from 'react';
import Like from '../../../../assets/like.svg';
import DisLike from '../../../../assets/unlike.svg';

const LikeDislike = () => {
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={Like}
                        alt="Like"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={DisLike}
                        alt="Unlike"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    100K
                </div>
            </div>
        </div>
    );
};

export default LikeDislike;