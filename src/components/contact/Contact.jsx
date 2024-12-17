import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contáctame</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Hablemos de tu próximo proyecto 🚀</h3>
                    <p className="contact__details">
                        ¿Prefieres hablar directamente? ¡Envíame un email o llena este formulario!
                    </p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                                placeholder='Tu nombre' />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input"
                                placeholder='Tu correo electrónico' />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input"
                            placeholder='Asunto' />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className='contact__form-input'
                            placeholder='Escribe tu mensaje aquí...'
                        ></textarea>
                    </div>
                    <button type="submit" className='btn'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
