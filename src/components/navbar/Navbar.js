import React, { useState } from 'react';
import SearchBox from './searchBox/SearchBox';
import logoImage from '../../assets/lws.svg';
import searchImage from '../../assets/search.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { searchTag } = useSelector(state => state.filter);
    const [searchValue, setSearchValue] = useState(searchTag);
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to="/">
                    <img
                        className="h-10"
                        src={logoImage}
                        alt="Learn with Sumit"
                    />
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <SearchBox />
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchImage}
                        alt="Search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;