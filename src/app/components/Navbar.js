export default function Navbar({ sections, scrollToSection, activeSection }) {
    return (
        <nav className="space-y-2 text-gray-300 text-xl mt-8 pl-6">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`block ${activeSection === section.id ? 'text-yellow-400' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
}