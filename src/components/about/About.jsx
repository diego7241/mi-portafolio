import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre Mi</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">

                    <div className="about__info">
                        <p className="about__description">
                            Soy Juan Diego, desarrollador con experiencia en Desarrollo Web,
                            UI/UX Designy herramientas como Figma,Photoshop e Illustrator
                            Me especializo en combinar creatividad y funcionalidad, asegurando sitios web
                            visualmente atractivos y funcionales.
                        </p>
                        <a href="/mi-portafolio/cv.pdf" className="btn" download="JuanDiego_CV.pdf">Download CV</a>


                    </div>


                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development "></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX design</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photoshop/illustratorr</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
