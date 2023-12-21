import React from 'react';
import person1 from "../../assets/images/person4.jpg"
import person2 from "../../assets/images/person3.jpg"
import person3 from "../../assets/images/person6.jpg"
import person5 from "../../assets/images/person1.jpg"
import person4 from "../../assets/images/person2.jpg"
const TeamMember = ({ name, role, photo }) => {
  return (
    <div className="team-member">
      <img src={photo} alt={name} className="team-member-photo" />
      <div className="team-member-name">{name}</div>
      <p className="team-member-role">{role}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Tour Guide',
      photo:person1,
    },
    {
      name: 'Jane Smith',
      role: 'Tour Coordinator',
      photo: person2,
    },
    {
      name: 'Michael Johnson',
      role: 'Historical Expert',
      photo:  person3,
    },
    {
      name: 'Emily Davis',
      role: 'Customer Service',
      photo:  person4,
    },
    {
      name: 'David Wilson',
      role: 'Logistics Manager',
      photo:  person5,
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;