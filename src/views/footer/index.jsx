import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const date = new Date().getFullYear();

const Footer = ({ photographers }) => (
  <footer id="footer">
    <div className="footer">
      <div className="footer__photo-credits">
        <h4 className="footer__photo-credits_title">PHOTO CREDITS</h4>
        {
          photographers.map(photographer => (
            <a
              key={photographer.link}
              href={photographer.link}
              className="footer__photo-credits_item"
              target="_blank"
              rel="noopener noreferrer"
            >
              {photographer.fullName}
            </a>
          ))
        }
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright_item">{`© ${date} School.kt`}</p>
        <p className="footer__copyright_item">All rights reserved</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  photographers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Footer;
