import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Diseño Web",
        description:
            "Experiencia en la creación y personalización de sitios web modernos y responsivos usando HTML, CSS, React, Wordpress.",
    },
    {
        id: 2,
        image: Image2,
        title: "Herramientas de Diseño",
        description:
            "Uso avanzado de herramientas como Figma, Photoshop e Illustrator para prototipado y creación de interfaces atractivas.",
    },
    {
        id: 3,
        image: Image3,
        title: "Optimización de Proyectos",
        description:
            "Me enfoco en el rendimiento, SEO y buenas prácticas de desarrollo para que tu proyecto sea eficiente y accesible.",
    },
];


const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
