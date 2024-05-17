import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

  return (
    <footer className='footer-container' id='resume'>

        <div className='footer-left'>
            <p>&copy; 2024 Shayan Dhillon</p>
        <p2> ▶ Made using ReactJS, HTML, CSS and JavaScript!</p2>
        </div>
        

        <div className='footer-center'>
            <Button buttonStyle='btn--outline' buttonSize='btn--med' onClick={scrollToTop}>
            ▲ Return to top ▲
        </Button>
        </div>


        <div className='footer-right'>
                <p>Résumé: </p>
                <a href='./ShayanDhillon_Resume_developer.pdf' download="resume.pdf">
                    <i className="fa fa-file" aria-hidden="true"/>
                </a>

        </div>
        

    </footer>
  );
}

export default Footer;
