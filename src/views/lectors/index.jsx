import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LectorsList = ({ lectors }) => (
  <section id="lectors">
    <div className="lectors__container">
      <div className="wrapper">
        <div className="lectors__title">
          <h2>Лекторы</h2>
          <p>Практики, используют Kotlin на работе и вне её</p>
        </div>
        <div className="lectors__list">
          {
            lectors.map(lector => (
              <Lector
                key={lector.name + lector.lastName}
                {...lector}
              />
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

const Lector = ({
  avatar,
  name,
  lastName,
  title,
  description,
}) => (
  <div className="lectors__list_item lector">
    <div
      className="lector__avatar"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + avatar})` }}
    />
    <h3 className="lector__fullName">
      {name}
      {' '}
      {lastName}
    </h3>
    <p className="lector__title">{title}</p>
    <p className="lector__coverletter">{description}</p>
  </div>
);

LectorsList.propTypes = {
  lectors: PropTypes.arrayOf(PropTypes.any),
};

LectorsList.defaultProps = {
  lectors: [],
};

Lector.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LectorsList;
