import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Timeline, Event } from 'react-timeline-scribble';
import VisibilitySensor from 'react-visibility-sensor';

import './index.css';

const Agenda = ({ events }) => (
  <React.Fragment>
    <Description />
    <TimelineComponent events={events} />
  </React.Fragment>
);

const Description = () => {
  const [visibileAgenda, setVisibileAgenda] = useState(false);
  const [visibileInfo, setVisibileInfo] = useState(false);
  return (
    <section id="agenda">
      <div
        className="agenda"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/agenda.jpg)` }}
      >
        <div className="agenda__wrapper wrapper">
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className={`agenda__lections agenda__info ${
                  isVisible || visibileAgenda ? 'agenda__info--visible' : ''
                }`}
              >
                {isVisible && !visibileAgenda ? setVisibileAgenda(isVisible) : ''}
                <h3 className="agenda__info_title">
                  9
                  <br />
                  лекций
                </h3>
                <p>лекция проходит каждую неделю</p>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className={`agenda__personal agenda__info ${
                  isVisible || visibileInfo ? 'agenda__info--visible' : ''
                }`}
              >
                {isVisible && !visibileInfo ? setVisibileInfo(isVisible) : ''}
                <h3 className="agenda__info_title">
                  13
                  <br />
                  лекторов и менторов
                </h3>
                <p>самые опытные и заинтересованные разработчики</p>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

const TimelineComponent = ({ events }) => (
  <section id="timeline">
    <div className="timeline">
      <h3 className="timeline__title">Расписание</h3>
      <div className="timeline__component">
        <Timeline>
          {events.map(event => (
            <Event
              key={event.title}
              interval={event.date}
              title={event.title}
              subtitle={event.presenter}
            >
              {event.description}
            </Event>
          ))}
        </Timeline>
      </div>
    </div>
  </section>
);

Agenda.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
};

TimelineComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Agenda;
