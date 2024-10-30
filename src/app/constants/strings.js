export const STRINGS = {
    header: {
        title: "Gian Paul Ramirez",
        subtitle: "Software Developer"
    },

    about: {
        intro: "One of my earliest memories is of playing Sonic Heroes on my brother’s PS2. Or at least, thinking that I did as I expertly mashed on what I now know was an unplugged controller. It didn’t take long for me to wonder how this magical box was able to put me in the pilot’s seat of some of the best stories ever told. When I was exposed to coding in high school I was finally able to take a peek behind the curtain, and I was hooked.",
        
        school: (
            <>
                That spark led me to pursue my Bachelor’s in Computer Science at the
                <span className="text-yellow-400 font-semibold"> University of Central Florida</span>. 
                During my time there, I was able to sharpen my skills through a wide array of projects, 
                ranging from a <span className="text-yellow-400 font-semibold">mobile poker application</span>, 
                to a lunar <span className="text-yellow-400 font-semibold">multi-robot system</span>, 
                and having a full circle moment by making a small <span className="text-yellow-400 font-semibold">video game</span>. 
                Each of these projects pushed me to grow as a communicator, collaborator, and designer.
            </>
        ),
        

        internship: (
            <>
                Focusing on my fundamentals during school paid off as I was able to land a set of internships at 
                <span className="text-yellow-400 font-semibold"> Amazon</span>, where I worked on bringing Alexa to wearable devices. It was during my first internship that I got a peek at just how wide the world of Software Engineering is, which inspired me to pursue my <span className="text-yellow-400 font-semibold"> Master's of Computer Science</span>. Now, I channel this curiosity for the systems behind these interactive experiences to create clean and user-friendly experiences, just like this one!
            </>
        ),

        freetime: (
            <>
                When I’m not at my computer you can usually find me Blanka ball-ing across the screen in Street Fighter 6, finding new music and discussing it with my friends during our album club, trying to lift increasingly heavier weights for no good reason at all, or putting all the random facts scattered around my brain to good use at a bar trivia.
            </>
        )
    },
    
    experience: {
        jobs: [
            {
                position: "SWE Intern",
                company: "Amazon",
                time: "Summer 2022",
                bullets: [
                    "Designed and developed Alexa's timers, alarms, and reminders for smartwatches during a transition in management.",
                    "Created a design document outlining application architecture and iterated on feedback from area experts.",
                    "Implemented design while taking into account data privacy concerns and minimizing the impact of previous technical debt.",
                    "Adapted quickly by learning new technologies to create a local database, reducing alert latency by 25% during connectivity losses and system restarts."
                ],
                technologies: [
                    "Java",
                    "WearOS",
                    "Android",
                    "SQLite"
                ]
            },
            {
                position: "Propel Program Intern",
                company: "Amazon",
                time: "Summer 2021",
                bullets: [
                    "Created a prototype for a phone-free Alexa application for smartwatches. Collaborated with leaders to define the milestones and timeline of deliverables during a team-wide project transition.",
                    "Learned to utilize CMake and Gradle for build automation. Found, documented, and addressed library incompatibilities, creating build scripts while familiarizing myself with Bash and the command-line interface.",
                    "Leveraged previous knowledge of multithreading and singleton design patterns to overcome memory and activity lifecycle limitations. Wrote a document addressing pitfalls during the development process to facilitate hand-off.",
                ],
                technologies: [
                    "CMake",
                    "Gradle",
                    "Bash",
                    "Git"
                ]
            },
            {
                position: "Undergraduate Learning Assistant",
                company: "UCF",
                time: "Fall 2020",
                bullets: [
                    "Offered 1-on-1 office hours for students in Computer Science I, aiding with class assignments while bolstering industry-standard practices like version control usage, leading to a 10% increase in session attendance.",
                    "Enabled students to develop a deeper understanding of key concepts, such as tree traversal, through active listening skills. Aided faculty in creating supplemental sessions, which covered major gaps in student-body knowledge.",
                ],
                technologies: [
                    "Data Structures & Algorithms",
                    "Git"
                ]
            }
        ]
    }
}