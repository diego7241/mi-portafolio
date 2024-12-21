import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const subject = form.current.subject.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !subject || !message) {
            toast.error('Por favor, completa todos los campos antes de enviar..');
            return;
        }

        emailjs.sendForm(
            'Gmail', // Service ID
            'template_afxjw1a', // Template ID
            form.current,
            'zZFrax6CAP7rqtST1' // Public Key
        )
            .then((result) => {
                toast.success('¡Mensaje enviado exitosamente!');
                e.target.reset(); // Limpia el formulario después de enviar
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
            });
    };

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

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Tu correo electrónico"
                                required
                            />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input
                            type="text"
                            name="subject"
                            className="contact__form-input"
                            placeholder="Asunto"
                            required
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn">Enviar Mensaje</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;
