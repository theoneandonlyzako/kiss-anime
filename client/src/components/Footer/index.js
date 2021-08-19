import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 footer">
      <div className="container">
        <p id='footer-content'>
        &copy;2021 by
        <a href="https://github.com/bgerner" target="_blank" rel="noreferrer"> Ben Gerner </a>
        /\
        <a href="https://github.com/RotichD" target="_blank" rel="noreferrer"> Dylan Rotich </a>
        /\
        <a href="https://github.com/d-trecker" target="_blank" rel="noreferrer"> Dylan Trecker </a>
        /\
        <a href="https://github.com/thisEmcee" target="_blank" rel="noreferrer"> Michael Chambers </a>
        /\
        <a href="https://github.com/theoneandonlyzako" target="_blank" rel="noreferrer"> Zak Stamps </a>
        </p>
        </div>
    </footer>
  );
};

export default Footer;
