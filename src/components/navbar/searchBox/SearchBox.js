import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTag as searchText } from '../../../features/filter/filterSlice'
import { useMatch, useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const dispatch = useDispatch();
    const { searchTag } = useSelector(state => state.filter);
    const [searchValue, setSearchValue] = useState(searchTag);

    const match = useMatch("/");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(searchText(searchValue));
        if (!match) {
            navigate("/")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </form>
    );
};

export default SearchBox;