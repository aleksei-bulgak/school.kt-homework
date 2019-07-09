import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Contacts = ({ contactEmail, socialNetworks }) => (
  <section id="contacts">
    <div className="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <p className="contacts__email">{contactEmail}</p>
      <div className="contacts__social-networks">
        {socialNetworks.map(network => (
          <a
            href={network.link}
            key={network.class}
            className={`${network.class} contacts__social-networks_item`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/social/${network.class}.svg)`,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* empty span to turn off alert related to not allowed link tags */}
            <span />
          </a>
        ))}
      </div>
    </div>
  </section>
);

Contacts.propTypes = {
  contactEmail: PropTypes.string.isRequired,
  socialNetworks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Contacts;
