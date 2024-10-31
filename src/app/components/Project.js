export default function Project({ project }) {
    return (
      <div className="grid grid-cols-[min-content_auto] gap-x-8 mb-12">
        {/* Date */}
        <div className="text-gray-400 text-lg font-medium w-[120px] text-right">
        <img src={project.pic} alt={project.title} className="rounded-md" />
        </div>

        {/* Experience Details */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={project.link ? "hover:underline" : ""}>
                {project.title}
            </a>
          </h2>

          {/* Description */}
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            {project.description}
          </ul>
          
          {/* Technologies */}
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