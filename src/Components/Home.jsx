import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <p className="text-secondary mb-2">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Aryan Koul</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-6">I build amazing things.</h2>
          <p className="text-textSecondary text-lg mb-8 max-w-xl">
            I'm a developer specializing in creating exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:bg-opacity-10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;