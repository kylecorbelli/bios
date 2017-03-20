import React from 'react';
import TeamMember from './components/TeamMember';
import teamMembers from './team-members';

const App = () => (
  <div>
    {teamMembers.map((teamMember, index) => (
      <TeamMember
        tabIndex={index}
        key={`teamMember-${index}`}
        teamMember={teamMember}
      />
    ))}
  </div>
);

export default App;
