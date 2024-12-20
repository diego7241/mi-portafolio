import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            {/* Instagram */}
            <a href="https://www.instagram.com/juandiego.gr/?hl=es-la" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>

            {/* GitHub */}
            <a href="https://github.com/diego7241" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            {/* LinkedIn */}
            <a href="www.linkedin.com/in/juan-diego-gonzales-ramos-13724b243" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@juandiego.gr" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
            </a>

            {/* Twitter */}
            <a href="https://x.com/diego2012xd" className="home__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </div>

    );
};

export default HeaderSocials;
