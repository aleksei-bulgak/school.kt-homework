import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Navigaton from './navigation';
import Intro from './intro';
import LectorsList from './lectors';
import MentorsList from './mentors';
import Agenda from './agenda';
import Partners from './partners';
import JoinUs from './joinUs';
import Contacts from './contacts';
import Footer from './footer';

import lectorsInfo from '../assets/lectors.json';
import mentorsInfo from '../assets/mentors.json';
import config from '../assets/config.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectors: lectorsInfo.lectors,
      mentors: mentorsInfo.mentors,
      config: {
        ...config,
      },
    };
  }

  render() {
    const { lectors } = this.state;
    const { mentors } = this.state;
    const {
      config: {
        slack,
        partners,
        contacts,
        photographers,
        location,
      },
    } = this.state;
    return (
      <React.Fragment>
        <Navigaton />
        <Header slack={slack} />
        <Intro />
        <LectorsList lectors={lectors} />
        <MentorsList mentors={mentors} link={config.mentor} />
        <Agenda {...config} />
        <Location location={location} />
        <Partners partners={partners.logo} config={partners.config} />
        <JoinUs slack={slack} />
        <Contacts contactEmail={contacts.email} socialNetworks={contacts['social-networks']} />
        <Footer photographers={photographers} />
      </React.Fragment>
    );
  }
}

const Location = ({ location }) => (
  <iframe
    id="meetup-location"
    title={location.title}
    src={location.url}
    className="meetup-location"
  />
);

Location.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Main;
