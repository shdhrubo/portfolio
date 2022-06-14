import React from 'react';
import Contacts from '../../Contacts/Contacts';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;