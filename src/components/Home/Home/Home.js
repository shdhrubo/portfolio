import React from 'react';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;