import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            {/* Instagram */}
            <a href="https://www.instagram.com/tu_usuario" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>

            {/* GitHub */}
            <a href="https://github.com/tu_usuario" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tu_usuario" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@tu_usuario" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/tu_usuario" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </div>

    );
};

export default HeaderSocials;
