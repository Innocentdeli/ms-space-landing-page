import React from 'react';
import Header from '../Layouts/Header';
import Country from '../Components/Country';
import ImageCard from './ImageCard';
// import Footer from './Footer';

const Home = () => {
    const imageCount = 4
    return (
        <div>
            <Header />
            <Country />
            <ImageCard />
        </div>
    );
}

export default Home;