import React from 'react'
import CardPresentation from '../Components/CardPresentation';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import SocialLink from '../Components/SocialLink';
import WhatIs from '../Components/WhatIs';

const Home = () => {



    return (
        <>
            <Hero/>
            <WhatIs/>

            <CardPresentation/>
            <SocialLink/>
            <Footer/>
        </>
    );
}



export default Home;