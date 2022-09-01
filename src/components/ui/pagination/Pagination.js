import React from 'react';
import { pageChanged } from '../../../features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state.videos);
    const { page } = useSelector((state) => state.filter);

    const active = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
    const inactive = "bg-gray-200 text-gray-600 px-4 py-1 rounded-full cursor-pointer";

    const pages = Math.ceil(videos.length / 4);
    const range = [];
    for (let i = 1; i <= pages; i++) {
        range.push(i);
    }
    const handlePage = (pagee) => {
        dispatch(pageChanged(pagee))
    }
    return (
        <section className="pt-12">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
            >
                {
                    range.map((pagee) => (
                        <div className={(pagee === page) ? active : inactive} onClick={() => handlePage(pagee)}>
                            {pagee}
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Pagination;