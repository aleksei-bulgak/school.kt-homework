import React from 'react';
import './index.css';

const logo = {
  width: 120,
  height: 120,
};

const Navigation = () => (
  <section id="navigation">
    <div className="navigation__section">
      <nav className="navigation wrapper">
        <div className="navigation__logo">
          <a href="#header">
            <img src={`${process.env.PUBLIC_URL}/images/school-logo.svg`} alt="school.kt" width={logo.width} />
          </a>
        </div>
        <ul className="navigation__list">
          <li className="navigation__list_item">
            <a href="#lectors">Лекторы</a>
          </li>
          <li className="navigation__list_item">
            <a href="#mentors">Менторы</a>
          </li>
          <li className="navigation__list_item">
            <a href="#timeline">Расписание</a>
          </li>
          <li className="navigation__list_item">
            <a href="#meetup-location">Площадка</a>
          </li>
          <li className="navigation__list_item">
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Navigation;
