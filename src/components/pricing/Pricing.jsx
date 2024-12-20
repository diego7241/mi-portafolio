import React from 'react';
import "./pricing.css";
import { FaLaptopCode, FaProjectDiagram, FaTools } from "react-icons/fa";

const Pricing = () => {
    return (
        <section className="pricing container section">
            <h2 className="section__title">Planes de Servicios</h2>

            <div className="pricing__container grid">
                <div className="pricing__item">
                    <FaLaptopCode className="pricing__icon" />
                    <h3 className="pricing__plan">Diseño Web Básico</h3>
                    <p className="pricing__title">Ideal para pequeños negocios y sitios personales. Incluye diseño responsivo y 1 página.</p>
                    <p className="pricing__support">Soporte por email</p>
                    <h3 className="price">
                        $ 99 <span>/ Proyecto</span>
                    </h3>
                    <a href='#contact' className='btn'>Solicita Ahora</a>
                </div>

                <div className="pricing__item best">
                    <span className='badge'>Recomendado</span>
                    <FaProjectDiagram className="pricing__icon" />
                    <h3 className="pricing__plan">Paquete Avanzado</h3>
                    <p className="pricing__title">Sitios web completos con hasta 5 páginas, diseño responsivo y SEO básico.</p>
                    <p className="pricing__support">Soporte Mon-Fri</p>
                    <h3 className="price">
                        $ 199 <span>/ Proyecto</span>
                    </h3>
                    <a href='#contact' className='btn'>Solicita Ahora</a>
                </div>

                <div className="pricing__item">
                    <FaTools className="pricing__icon" />
                    <h3 className="pricing__plan">Desarrollo Personalizado</h3>
                    <p className="pricing__title">Proyectos a medida: tiendas online, landing pages y herramientas avanzadas.</p>
                    <p className="pricing__support">Soporte 24/7 y mantenimiento</p>
                    <h3 className="price">
                        $ 299 <span>/ Proyecto</span>
                    </h3>
                    <a href='#contact' className='btn'>Solicita Ahora</a>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
