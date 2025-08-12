import React from 'react';
// import ModelImage from '../assets/model.png'; // Adjust the path as necessary
const Skills = () => {
  const skills = [
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", percentage: 90 },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", percentage: 85 },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 80 },
    // { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", percentage: 85 },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 90 },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 95 },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 85 },
    { name: "3D Printing", logo: "https://cdn-icons-png.flaticon.com/512/4503/4503941.png", percentage: 80 },
    { name: "CNC", logo: "https://cdn-icons-png.flaticon.com/512/2267/2267943.png", percentage: 75 },
    // { name: "Aeromodelling", logo:{ModelImage} , percentage: 70 },
    { name: "Electronics", logo: "https://cdn-icons-png.flaticon.com/512/2821/2821739.png", percentage: 85 },
    { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", percentage: 90 },
    { name: "ESP32", logo: "https://cdn-icons-png.flaticon.com/512/6119/6119533.png", percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-16 h-16 mb-3"
              />
              <h3 className="text-center">{skill.name}</h3>
              <div className="skill-percentage">
                <span>{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;