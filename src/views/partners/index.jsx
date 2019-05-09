import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Partners = ({ partners, config }) => (
  <React.Fragment>
    <section id="partners">
      <div className="partners wrapper">
        <div className="partners__content">
          <h3 className="partners__title">Партнеры</h3>
          <p className="partners__description">Спасибо следующим компаниям за поддержку School.kt</p>
        </div>
        <div className="parners__logos">
          {
            partners.map(partner => (
              <Partner key={partner} logo={partner} config={config} />
            ))
          }
        </div>
      </div>
    </section>
  </React.Fragment>
);

const Partner = ({ logo, config }) => (
  <div className="parners__logos_item">
    <img src={process.env.PUBLIC_URL + logo} width={config.width} alt="partner logo" />
  </div>
);

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.any).isRequired,
  config: PropTypes.objectOf(PropTypes.string).isRequired,
};

Partner.propTypes = {
  logo: PropTypes.string.isRequired,
  config: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Partners;
