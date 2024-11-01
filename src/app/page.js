"use client";
import React, { useRef, useState, useEffect } from 'react';
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { STRINGS } from "./constants/strings";
import Navbar from './components/Navbar';
import Project from './components/Project'
import { ST } from 'next/dist/shared/lib/utils';


export default function Home() {
  const scrollableContentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && scrollableContentRef.current) {
      const offset = window.innerHeight * 0.1;
      const sectionPosition = section.offsetTop - scrollableContentRef.current.offsetTop - offset;

      scrollableContentRef.current.scrollTo({ 
        top: sectionPosition,
        behavior: 'smooth' 
      });
    }
  };

  
  useEffect(() => {
    const options = { 
      root: scrollableContentRef.current, 
      threshold: 0.8
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Intersecting ", entry.target.id);
          setActiveSection(entry.target.id);
        }
      })
    };

    const observer = new IntersectionObserver(observerCallback, options);
  
    const sections = scrollableContentRef.current.querySelectorAll("#about, #experience, #projects, #resume");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    }
  });
  

  return (
    <div className="bg-background min-h-screen">
      <div 
        style={{paddingLeft:"5%", paddingRight: "5%"}}
        className="max-w-8xl mx-auto min-h-screen grid grid-cols-[30%_70%] gap-8"
      >
        {/* Fixed Column */}
        <div className="sticky mx-auto top-0 h-screen p-8 text-white">
          <Header/>
          <Navbar 
            sections={STRINGS.navbar.home} 
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />

        </div>

        {/* Scrollable Column */}
        <div 
          ref={scrollableContentRef}
          style={{ textAlign: 'justify' }}
          className="pt-12 pr-96 overflow-x-hidden overflow-y-scroll h-screen p-8 no-scrollbar">
          <div>
            <section id="about" className="mb-20">
              <About />
            </section>
            
            <section id="experience" className="mb-20">
              {STRINGS.experience.jobs.map((job, index) => (
                <Experience key={index} job={job} />
              ))}
            </section>

            <section id="projects" className="mb-24">
              {STRINGS.experience.projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </section>

            <section id="resume" className="mb-12">
              <h2 className="text-yellow-400 font-bold text-xl mb-24">
                <a 
                  href={STRINGS.resume} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center hover:underline">
                    You can find my resume right here!
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                </a>
              </h2>
            </section>
            <footer className=" text-gray-300 p-4 text-center mt-8">
              <p className="text-sm max-w-sm mx-auto">
                 Greatly inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Brittany Chiang</a>&apos;s website. I&apos;d also like to give a great thank you to all my more artistic friends who I pestered for feedback on the design constantly. And a great thank you to <strong>YOU</strong> for making it this far!
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Made in {new Date().getFullYear()} 
              </p>
            </footer>
            
          </div>
        </div>
      </div>  
    </div>
  );
}
