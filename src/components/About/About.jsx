import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const teamMembers = [
  {
    name: 'Ashraf Poless', 
    position: 'Team Member',
    linkedInUrl: 'https://www.linkedin.com/in/ashraf-poless-034349317',
  },
  {
    name: 'Kevin Osegueda',
    position: 'Team Member',
    linkedInUrl: 'https://www.linkedin.com/in/kevin-osegueda',
  },
  {
    name: 'Betül Aydıntürk',
    position: 'Team Member',
    linkedInUrl: 'https://www.linkedin.com/in/betul-aydinturk-b3b35a61',
  },
  {
    name: 'Pallavi Sarwar',
    position: 'Team Member', 
    linkedInUrl: 'https://www.linkedin.com/in/pallavi-sarwar-060596192',
  },
  {
    name: 'Gemechis Fikadu',
    position: 'Team Member',
    linkedInUrl: 'https://www.linkedin.com/in/gemechis-fikadu',
  },
];  

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our blog! We are passionate about sharing valuable content.</p>

      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
