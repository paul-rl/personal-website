export default function Navbar({ sections, scrollToSection}) {
    return (
        <nav className="space-y-2 text-gray-300 text-xl mt-8">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className="block hover:text-yellow-400"
                    onClick={() => scrollToSection(section.id)}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
}