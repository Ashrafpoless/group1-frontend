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

      <div className="about-hyf-container">
        <h1>What we learnt in Hack Your Future</h1>
        <p>
          In Hack Your Future, we develop skills in web development through hands-on projects and teamwork. 
          We guide you from the very basics of development to building complex web applications. 
          Our hands-on approach ensures you work with every technology shaping the field. 
          Here’s what you’ll explore:
        </p>

        <ul className="about-hyf-list">
          <li><strong>Before the Course:</strong> Environment setup and account configuration to prepare for development.</li>
          <li><strong>Workflows:</strong> Discover how to efficiently develop projects, both individually and in a team, using workflows.</li>
          <li><strong>Agile Development:</strong> Learn how to collaboratively plan and build HTML/CSS websites.</li>
          <li><strong>UX/UI Design:</strong> Explore design thinking, focusing on users and what it means to be user-centered in your designs.</li>
          <li><strong>JavaScript Essentials:</strong> An introduction to JavaScript programming, emphasizing writing faster, better, and cleaner code.</li>
          <li><strong>Advanced JavaScript:</strong> Delve into the more complex aspects of JavaScript, building a strong foundation in programming.</li>
          <li><strong>Algorithms and Problem Solving:</strong> Engage in practical coding tasks and JavaScript exercises to enhance problem-solving skills.</li>
          <li><strong>Separation of Concerns:</strong> Learn how to break down complex web applications into manageable, understandable tasks, simplifying collaboration.</li>
          <li><strong>Building Real-Time Applications:</strong> Master the JavaScript event loop and learn how to handle data from multiple sources (HTTP APIs) for dynamic web apps.</li>
          <li><strong>Databases:</strong> Work with relational databases, including creating and updating records.</li>
          <li><strong>Node.js & RESTful APIs:</strong> Build server-side applications using Node.js and Express, mastering RESTful API development.</li>
          <li><strong>Component-Based Design:</strong> Learn how to build dynamic Single Page Applications (SPAs) using reusable components and explore frontend frameworks.</li>
        </ul>
      </div>

      <div className="blog-info">
        <h2>About Our Bloggie App</h2>
        <p>Welcome to our Bloggie App! We love to provide our readers with great stories. They cover a wide range of 
           topics from art, science, technology, cinema, design amd food etc. Whether you're here to learn a concept, be inspired, 
           or stay up to date on these trends — our goal is to bring valuable information to you.
        </p>
        <p>We started our blog to provide a space for curious minds to gather, chat, read and share about what other experts 
          and practitioners are thinking. Our goal is to provide a welcoming space for discovering new resources and 
          networking within related fields of interest.
        </p>
        <p>We're just getting started, and there’s a lot more content coming your way. If you have ideas or topics you’d 
          like us to cover, feel free to contact us. Thanks for being part of our journey!
        </p>
      </div>

      <h2 className='team'>Our Team</h2>
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
