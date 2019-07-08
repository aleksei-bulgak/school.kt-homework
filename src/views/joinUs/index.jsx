import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import './index.css';

const JoinUs = ({ slack }) => {
  const [visibile, setVisibile] = useState(false);
  return (
    <section id="join-us">
      <div
        className="join-us"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/join-us.jpg)` }}
      >
        <VisibilitySensor>
          {({ isVisible }) => {
            if (isVisible && !visibile) {
              setVisibile(isVisible);
            }
            return (
              <React.Fragment>
                <h3 className={`join-us__title ${isVisible || visibile ? 'join-us--visible' : ''}`}>
                  Присоединяйтесь к нашему slack
                </h3>
                <a
                  href={slack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`join-us__link ${isVisible || visibile ? 'join-us--visible' : ''}`}
                >
                  School.kt Slack
                </a>
              </React.Fragment>
            );
          }}
        </VisibilitySensor>
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
  );
};

JoinUs.propTypes = {
  slack: PropTypes.string.isRequired,
};

export default JoinUs;
