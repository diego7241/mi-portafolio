import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Proyectos Completos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">Cup of coffe</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">10</h3>
                    <span className="about__subtitle">Clientes Satisfechos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-clock"></i> {/* Ícono de reloj */}
                <div>
                    <h3 className="about__title">500+</h3>
                    <span className="about__subtitle">Horas de Aprendizaje</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox
