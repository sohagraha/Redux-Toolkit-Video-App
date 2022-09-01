import React, { useEffect } from 'react';
import { fetchTags } from '../../features/tags/TagsSlice';
import Tag from './tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearch } from '../../features/filter/filterSlice';

const Tags = () => {

    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.tags);
    const { tags: selectedTags, searchTag, searchAuthor } = useSelector((state) => state.filter);
    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const clearFilter = () => {
        dispatch(resetSearch())
    }

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
            </div>
            {
                (selectedTags?.length) > 0 || searchTag || searchAuthor ? <div className="max-w-7xl mx-auto px-5 py-2 lg:px-0 flex auto flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer flex justify w-fit" onClick={clearFilter}>
                        Clear Filter
                    </div>
                </div> : null
            }
        </section>
    ) : null;
}

export default Tags;