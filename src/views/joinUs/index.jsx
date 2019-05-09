import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const JoinUs = ({ slack }) => (
  <React.Fragment>
    <section id="join-us">
      <div className="join-us">
        <h3 className="join-us__title">Присоединяйтесь к нашему slack</h3>
        <a
          href={slack}
          target="_blank"
          rel="noopener noreferrer"
          className="join-us__link"
        >
          School.kt Slack
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 200"
          preserveAspectRatio="none"
          className="join-us-bottom"
        >
          <path d="M640 195.5L0 0v200h1280V0" />
        </svg>
      </div>
    </section>
  </React.Fragment>
);

JoinUs.propTypes = {
  slack: PropTypes.string.isRequired,
};

export default JoinUs;
