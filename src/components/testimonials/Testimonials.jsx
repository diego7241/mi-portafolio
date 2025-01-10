import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"

import { Pagination } from 'swiper/modules'; // Importación correcta
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        id: 1,
        image: Image1,
        title: "Carlos Rodríguez",
        subtitle: "CEO en Innovatech Solutions",
        comment:
            "El trabajo realizado superó nuestras expectativas. La página web fue desarrollada de manera rápida y con una interfaz moderna y funcional. ¡Muy recomendado!",
    },
    {
        id: 2,
        image: Image3,
        title: "María Pérez",
        subtitle: "Gerente de Marketing en Creative Designs",
        comment:
            "Excelente atención y profesionalismo. La implementación de las herramientas de diseño y desarrollo web impulsó nuestro proyecto significativamente. 🚀",
    },
    {
        id: 3,
        image: Image1,
        title: "Juan Martín",
        subtitle: "Desarrollador en FreelanceTech",
        comment:
            "Fue un placer trabajar en conjunto. El diseño UI/UX es intuitivo y atractivo, cumpliendo con todos los requerimientos. ¡Gracias por el excelente trabajo!",
    },
];


const Testimonials = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Clientes y opiniones</h2>

            <Swiper className="testimonials__container grid"
                // Install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};


export default Testimonials;
