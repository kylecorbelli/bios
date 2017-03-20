import React, { PropTypes } from 'react';
import styles from './TeamMember.css';

const TeamMember  = ({ teamMember: { name, titles }, tabIndex }) => (
  <div className={styles.TeamMember} tabIndex={tabIndex}>
    <p className={styles.name}>{name}</p>
    <ul className={styles.titleList}>
      {titles.map((title, index) => (
        <li
          key={`title-${index}`}
        >
          {title}
        </li>
      ))}
    </ul>
  </div>
);

TeamMember.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  teamMember: PropTypes.shape({
    name: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired
};

export default TeamMember;
