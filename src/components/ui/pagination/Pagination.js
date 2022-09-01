import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const { videos } = useSelector((state) => state.videos);
    const pages = Math.ceil(videos.length / 4);
    const range = [];
    for (let i = 1; i <= pages; i++) {
        range.push(i);
    }
    return (
        <section className="pt-12">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
            >
                {
                    range.map((page) => (
                        <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
                            {page}
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Pagination;