import { STRINGS } from "../constants/strings";

export default function Header() {
    return (
        <div className="bg-background p-6 text-center max-w-x mx-auto rounded-lg mb-20">
            {/* Profile Image */}
            <div className="mb-4">
                <img
                    src="/images/header/header.png"
                    alt={STRINGS.header.title}
                    className="w-56 h-56 mx-auto rounded-md"
                />
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl font-bold text-yellow-400">{STRINGS.header.title}</h1>
            <p className="text-gray-300 text-xl">{STRINGS.header.subtitle}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/gpaul-rl7/" target="_blank" rel="noopener noreferrer">
                <img src="/images/logos/LinkedIn.png" alt="LinkedIn Logo" className="w-8 h-8" />
              </a>
              <a href="https://github.com/paul-rl" target="_blank" rel="noopener noreferrer">
                <img src="/images/logos/GitHub.png" alt="GitHub Logo" className="w-8 h-8" />
              </a>
              <a href="mailto:gpaul.rl7@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/logos/Mail.png" alt="Mail Logo" className="w-8 h-8" />
              </a>
            </div>
        </div>
    );
}