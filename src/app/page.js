import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { STRINGS } from "./constants/strings";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div 
        style={{paddingLeft:"5%", paddingRight: "5%"}}
        className="max-w-8xl mx-auto min-h-screen grid grid-cols-[30%_70%] gap-8"
      >
        {/* Fixed Column */}
        <div className="sticky mx-auto top-0 h-screen p-8 text-white">
          {/* Header*/}
          <Header/>
          
          {/* Navbar Section (Bottom Links) */}
          <nav className="space-y-2 text-gray-300 text-xl mt-8">
            <a href="#who-am-i" className="block hover:text-yellow-400">Who am I?</a>
            <a href="#where-have-i-worked" className="block hover:text-yellow-400">Where have I worked?</a>
            <a href="#what-have-i-made" className="block hover:text-yellow-400">What have I made?</a>
          </nav>
        </div>

        {/* Scrollable Column */}
        <div 
          style={{ textAlign: 'justify' }}
          className="max-w-4xl overflow-y-scroll h-screen p-8">
          <div>
            <div className="mb-12">
              <About />
            </div>
            
            
            {STRINGS.experience.jobs.map((job, index) => (
              <Experience key={index} job={job} />
            ))}
          </div>
        </div>
      </div>  
    </div>
  );
}
