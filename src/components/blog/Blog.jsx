import React from 'react';
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Mis Publicaciones</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Diseño Web</span></a>
                        <a href="#"><img src={Image1} alt="Herramientas Diseño Web" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">3 Herramientas Esenciales para Diseño Web</h3>
                        <div className="blog__meta">
                            <span>17 Enero, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Juan Diego</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Herramientas de Diseño </span></a>
                        <a href="#"><img src={Image2} alt="Photoshop y Figma" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Cómo Usar Photoshop y Figma para Prototipos </h3>
                        <div className="blog__meta">
                            <span>10 Enero, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Juan Diego</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Proyectos Freelance</span></a>
                        <a href="#"><img src={Image3} alt="Proyectos Freelance" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Proyectos Freelance: Cómo Iniciar tu Negocio Online</h3>
                        <div className="blog__meta">
                            <span>06 Enero, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Juan Diego</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
