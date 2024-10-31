import { HomeIcon } from '@heroicons/react/outline';

export default function Project({ project }) {
    return (
      <div className="grid grid-cols-[min-content_auto] gap-x-8 mb-12">
        
        <div className="text-gray-400 w-[120px] flex items-center">
          <img src={project.pic} alt={project.title} className="rounded-md justify-center" />
        </div>

        
        <div>
          <h2 className="text-yellow-400 font-bold text-xl mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={project.link ? "flex items-center hover:underline" : ""}>
                {project.title}
                {project.link ?
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg> : null
                }

            </a>
          </h2>

          
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            {project.description}
          </ul>
          
          
          <div className="flex space-x-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                style={{backgroundColor: "#48342c"}}
                className="bg-gray-800 text-yellow-400 text-sm font-medium py-1 px-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
}