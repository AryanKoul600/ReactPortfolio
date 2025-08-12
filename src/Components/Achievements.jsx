import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      year: "2025",
      title: "WRO World Robot Olympiad",
      description: "Participated in the WRO World Robot Olympiad, showcasing innovative robotics solutions."
      // description: "In this hackathon, I developed a web application that helps students for their studies by providing resources and tools for effective learning. The application received positive feedback for its user-friendly interface and functionality.And we secured 3rd rank in the Hackathon"
    },
    {
      year: "2025",
      title: "Rising Star Award – Aviotron Aerospace Pvt. Ltd.",
      description: "Honored with the Rising Star Award for outstanding contributions and innovation at Aviotron Aerospace Pvt. Ltd."
    },
    {
      year: "2022",
      title: "Scanning Security System",
      // description: "Developed a scanning security system that can be implemented in multiple colleges."
      description: "This project involved creating a scanning security system that can be implemented in multiple colleges, enhancing campus safety and security protocols.And got Selected in Innovation Incubation Enterpreneurship cell promising"
    },
    {
      year: "2021",
      title: "Navdhara Hackathon",
      description: "Achieved first position in the Navdhara Hackathon for developing an innovative solution under time constraints."
    },
    {
      year: "2020",
      title: "ACM Hackathon",
      description: "In this hackathon, I developed a web application that helps students for their studies by providing resources and tools for effective learning. The application received positive feedback for its user-friendly interface and functionality.And we secured 3rd rank in the Hackathon"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        
        <div className="relative border-l-2 border-secondary pl-8 ml-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-12 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="bg-tertiary p-6 rounded-lg shadow-lg">
                <span className="inline-block px-3 py-1 bg-primary text-secondary text-sm font-semibold rounded mb-2">
                  {achievement.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-textSecondary">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;