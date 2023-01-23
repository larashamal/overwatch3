import React from 'react';
import { Link } from 'react-router-dom';
import OverwatchHero from '../OverwatchHero/OverwatchHero';

const Home = () => {
    return (
        <div>
        <Link to="/" element={<Home />}>Home</Link> <br />
        <Link to="/heroes" element={<OverwatchHero />}>Heroes</Link>
        </div>
    );
};

export default Home;