"use client";
import React, { useRef } from 'react';
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { STRINGS } from "./constants/strings";
import Navbar from './components/Navbar';
import Project from './components/Project'

export default function Home() {
  const scrollableContentRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && scrollableContentRef.current) {
      const offset = 40;
      const sectionPosition = section.offsetTop - scrollableContentRef.current.offsetTop - offset;

      scrollableContentRef.current.scrollTo({ 
        top: sectionPosition,
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div 
        style={{paddingLeft:"5%", paddingRight: "5%"}}
        className="max-w-8xl mx-auto min-h-screen grid grid-cols-[30%_70%] gap-8"
      >
        {/* Fixed Column */}
        <div className="sticky mx-auto top-0 h-screen p-8 text-white">
          <Header/>
          <Navbar sections={STRINGS.navbar.home} scrollToSection={scrollToSection}/>
        </div>

        {/* Scrollable Column */}
        <div 
          ref={scrollableContentRef}
          style={{ textAlign: 'justify' }}
          className="pr-96 overflow-x-hidden overflow-y-scroll h-screen p-8 no-scrollbar">
          <div>
            <section id="about" className="mb-20">
              <About />
            </section>
            
            <section id="experience" className="mb-20">
              {STRINGS.experience.jobs.map((job, index) => (
                <Experience key={index} job={job} />
              ))}
            </section>

            <section id="projects" className="mb-12">
              {STRINGS.experience.projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </section>
          </div>
        </div>
      </div>  
    </div>
  );
}
