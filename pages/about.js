import Layout from '../components/Layout'
import SkillBar from '../components/SkillBar'
import { motion } from 'framer-motion'
import { BriefcaseIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const skills = [
  { name: 'Java', level: 95 },
  {name: 'Spring-boot', level: 95 },
  { name: 'React & Next.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  {name: 'Deep Learning', level: 70 },
  {name: 'NLP', level: 70}
]

const experience = [
  {
    role: "Software Develper Engineer - 2",
    company: "IQVIA",
    period: "2021 - Present",
    achievements: [
        "Developed and maintained scalable software solutions using Spring Boot and Vaadin, enhancing system performance and user experience.",
        "Collaborated with cross-functional teams to design, implement, and optimize new features, ensuring alignment with business goals.",
        "Led code reviews and provided mentorship to junior developers, fostering a culture of continuous improvement and knowledge sharing.",
        "Utilized modern technologies and frameworks such as Spring Boot, Vaadin, and Java, contributing to the development of high-quality, robust applications.",
        "Implemented best practices in software development, including Agile methodologies, version control, and automated testing, to ensure efficient and reliable delivery of projects.",
        "Troubleshot and resolved complex technical issues, improving system stability and reducing downtime."
    ]
  },
  {
    role: "Trainee Software Engineer",
    company: "Signity Solutions",
    period: "2020 - 2021",
    achievements: [
      "Developed website using spring boot and node js",
      "Improved Lighthouse scores by 30% across projects"
    ]
  }
]

const education = [
  {
    degree: "Masters in Artificial Intelligence & Machine Learning",
    institution: "Bits-Pilani",
    period: "2023 - 2025",
    highlights: [
      "Specialized in Deep Learning and NLP"
    ]
  },
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Chandigarh University",
    period: "2016-2020",
    highlights: [
      "Webapp developement, Data Structure and Algorightm, Android developement"
    ]
  }
]

const certifications = [
  {
    name: "Google Professional UX Design",
    year: "2021"
  },
  {
    name: "AWS Certified Developer",
    year: "2020"
  }
]

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={slideUp}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Me
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl"
              variants={slideUp}
            >
              I am a passionate developer with 4+ years of experience creating
              exceptional digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section id='about'>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <motion.div
            className="lg:w-2/3"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Bio Section */}
            <motion.section className="mb-16" variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Who I Am
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I am a passionate and results-driven Software Engineer with
                  over 4 years of professional experience, currently working at
                  IQVIA, where I design and develop enterprise-level
                  applications using Java, Spring Boot, and Vaadin. I have a
                  strong focus on backend development, database design, and
                  delivering clean, maintainable code. I work closely with
                  cross-functional teams in an Agile environment, actively
                  participating in PI Planning, sprint ceremonies, and
                  continuous improvement initiatives.
                </p>

                <p>
                  I’ve contributed to multiple internal tools, including a data
                  management web application that supports features like data
                  upload/download, CRUD operations, and advanced filtering using
                  Spring Boot, Vaadin, and PostgreSQL. Additionally, I developed
                  an ad generation web application that allows clients to create
                  and manage advertisements dynamically through a custom-built
                  Java-based web interface.
                </p>
                <p>
                  Academically, I hold a Bachelor’s degree in Computer Science
                  and Engineering from Chandigarh University, where I gained a
                  solid foundation in core subjects such as Data Structures and
                  Algorithms (DSA), Design and Analysis of Algorithms (DAA), and
                  Computer Graphics. I am currently pursuing a Master’s in
                  Artificial Intelligence and Machine Learning from BITS Pilani,
                  further strengthening my expertise in modern technologies.
                </p>

                <p>
                  {" "}
                  My tech stack includes Java, Spring Boot, Vaadin, PostgreSQL,
                  MySQL, Git, GitLab, Jira, and emerging experience with React
                  and Python. I am a quick learner, team player, and always
                  eager to take on new challenges while contributing to
                  high-impact software solutions.
                </p>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section className="mb-16" variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section variants={slideUp}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <BriefcaseIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                Professional Experience
              </h2>
              <div className="space-y-10">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="pl-8 relative border-l-2 border-indigo-100 dark:border-gray-700"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-2 border-white dark:border-gray-800" />
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {edu.institution} • {edu.period}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {edu.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {cert.name}
                    </span>
                    <span className="text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Fun Facts
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p>🏆 Won 3 hackathons in college</p>
                <p>🌍 Lived in 4 different countries</p>
                <p>☕ Can not start the day without coffee</p>
                <p>📚 Read 50+ books last year</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </Layout>
  );
}