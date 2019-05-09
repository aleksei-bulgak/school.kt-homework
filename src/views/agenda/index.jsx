import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, Event } from 'react-timeline-scribble';

import './index.css';

const Agenda = props => (
  <React.Fragment>
    <Description {...props} />
    <TimelineComponent {...props} />
  </React.Fragment>
);

const Description = () => (
  <section id="agenda">
    <div className="agenda">
      <div className="agenda__wrapper wrapper">
        <div className="agenda__lections agenda__info">
          <h3 className="agenda__info_title">
            9
            <br />
            лекций
          </h3>
          <p>лекция проходит каждую неделю</p>
        </div>
        <div className="agenda__personal agenda__info">
          <h3 className="agenda__info_title">
            13
            <br />
            лекторов и менторов
          </h3>
          <p>самые опытные и заинтересованные разработчики</p>
        </div>
      </div>
    </div>
  </section>
);

const TimelineComponent = ({ events }) => (
  <section id="timeline">
    <div className="timeline">
      <h3 className="timeline__title">Расписание</h3>
      <div className="timeline__component">
        <Timeline>
          {
            events.map(event => (
              <Event
                key={event.title}
                interval={event.date}
                title={event.title}
                subtitle={event.presenter}
              >
                {event.description}
              </Event>
            ))
          }
        </Timeline>
      </div>
    </div>
  </section>
);

TimelineComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Agenda;
