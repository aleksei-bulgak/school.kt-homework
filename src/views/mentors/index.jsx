import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class MentorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: props.mentors,
      link: props.link,
    };
  }

  render() {
    const { mentors, link } = this.state;
    return (
      <React.Fragment>
        <section id="mentors">
          <div className="mentors__container">
            <div className="wrapper">
              <h2 className="mentors__title">Менторы</h2>
              <div className="mentors__list">
                {
                  mentors.map(mentor => (
                    <Mentor
                      key={mentor.name + mentor.lastName}
                      {...mentor}
                    />
                  ))
                }
              </div>
              <div className="mentors--action">
                <a href={link}>Стать ментором</a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const Mentor = ({
  avatar,
  name,
  lastName,
  title,
}) => (
  <React.Fragment>
    <div className="mentors__list_item mentor">
      <div
        className="mentor__avatar"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + avatar})` }}
        src={avatar}
      />
      <h3 className="mentor__fullName">{`${name} ${lastName}`}</h3>
      <p className="mentor__title">{title}</p>
    </div>
  </React.Fragment>
);

MentorsList.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.any).isRequired,
  link: PropTypes.string.isRequired,
};

Mentor.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MentorsList;
