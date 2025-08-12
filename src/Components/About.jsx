import React from 'react';
import Aryan_Image from '../assets/Aryan_Image.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-textSecondary mb-4">
              Hello! I'm a passionate developer and maker with a love for both software and hardware projects. 
              My journey in technology started when I was young, and I've been exploring various domains ever since.
            </p>
            <p className="text-textSecondary mb-4">
              On the software side, I work with languages like C++, Python, and JavaScript, building web applications 
              with React and styling them with Tailwind CSS. I enjoy creating clean, efficient, and user-friendly interfaces.
            </p>
            <p className="text-textSecondary">
              My hardware interests include 3D printing, CNC machining, aeromodelling, electronics, and working with 
              microcontrollers like Arduino and ESP32. I love bringing ideas to life through a combination of software and hardware.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-tertiary rounded-lg relative z-10 overflow-hidden">
              <img 
                src={Aryan_Image} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 w-full h-80 border-2 border-secondary rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;