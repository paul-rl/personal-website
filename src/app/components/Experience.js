import { STRINGS } from "../constants/strings";

export default function Experience({ job }) {
    return (
      <div className="grid grid-cols-[min-content_auto] gap-x-8 mb-12">
        {/* Date */}
        <div className="text-gray-400 text-lg font-medium w-[120px] text-right">
          {job.time}
        </div>

        {/* Experience Details */}
        <div>
          <h2 className="text-yellow-400 font-bold text-xl mb-4">
            {job.position + " @ " + job.company}
          </h2>

          {/* Description */}
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            {job.bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          {/* Technologies */}
          <div className="flex space-x-2">
            {job.technologies.map((tech, index) => (
              <span
                key={index}
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