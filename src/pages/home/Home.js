import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Tags from '../../components/tags/Tags';
import Pagination from '../../components/ui/pagination/Pagination';
import VideoGrid from '../../components/videoGrid/VideoGrid';

const Home = () => {
    return (
        <div>
            <Tags />
            <VideoGrid />
            <Pagination />
        </div>
    );
};

export default Home;