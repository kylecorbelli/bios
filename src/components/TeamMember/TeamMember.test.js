import React from 'react';
import ReactDOM from 'react-dom';
import TeamMember from './TeamMember';

const person = {
  name: 'Kyle',
  titles: [
    'Cofounder',
    'Web Developer',
    'Software Engineer'
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamMember teamMember={person} tabIndex={0} />, div);
});
