import React from 'react';
import './home.css';
import Me from '../../assets/logo.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="Avatar" className="home__img" />
                <h1 className="home__name">Juan Diego</h1>
                <span className="home__education">I’m a Front-End Developer</span>

                <HeaderSocials />

                <a href='#contact' className='btn'>CONTRATAME</a>
                <ScrollDown />


            </div>
            <Shapes />
        </section>
    );
};

export default Home;
