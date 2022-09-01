import React from 'react';
import Like from '../../../../assets/like.svg';
import DisLike from '../../../../assets/unlike.svg';
import { useDispatch } from 'react-redux';
import { setLike, setDislike } from '../../../../features/video/videoSlice';


const LikeDislike = ({ id, likes, unlikes }) => {
    const dispatch = useDispatch();

    const hitLike = (id) => {
        fetch(`https://video-app-sr.herokuapp.com/videos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                likes: likes + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        dispatch(setLike(id));
    }
    const hitDislike = (id) => {
        fetch(`https://video-app-sr.herokuapp.com/videos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                unlikes: unlikes + 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        dispatch(setDislike(id))
    }
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1 items-center cursor-pointer" onClick={() => {
                hitLike(id)
            }}>
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
                    {likes}
                </div>
            </div>
            <div className="flex gap-1 items-center cursor-pointer" onClick={() => {
                hitDislike(id)
            }}>
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
                    {unlikes}
                </div>
            </div>
        </div>
    );
};

export default LikeDislike;