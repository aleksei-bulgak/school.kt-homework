import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Contacts = ({ contactEmail, socialNetworks }) => (
  <React.Fragment>
    <section id="contacts">
      <div className="contacts">
        <h3 className="contacts__title">Контакты</h3>
        <p className="contacts__email">{contactEmail}</p>
        <div className="contacts__social-networks">
          {
            socialNetworks.map(network => (
              <div className={`${network.class} contacts__social-networks_item`}>
                {/* eslint-disable-next-line */}
                <a
                  href={network.link}
                  className={`fa fa-${network.class}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  </React.Fragment>
);

Contacts.propTypes = {
  contactEmail: PropTypes.string.isRequired,
  socialNetworks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Contacts;
