import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const NextAction = () => (
  <svg
    x="0px"
    y="0px"
    width="38.417px"
    height="18.592px"
    viewBox="0 0 38.417 18.592"
    className="header__next"
  >
    <g>
      <path
        d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"
      />
    </g>
  </svg>
);

const Header = ({ slack }) => (
  <header id="header" className="header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.jpg)` }}>
    <h1 className="header__title">Курсы по Kotlin</h1>
    <p className="header__description">От Belarus Kotlin User Group</p>
    <p className="header__description">Первый набор окончен, присоединяйтесь к нашему slack</p>
    <a
      href={slack}
      target="_blank"
      rel="noopener noreferrer"
      className="header__link"
    >
      School.kt Slack
    </a>
    <a href="#intro" className="header__next"><NextAction /></a>
  </header>
);

Header.propTypes = {
  slack: PropTypes.string.isRequired,
};

export default Header;
