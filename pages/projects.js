import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const projects = [
  {
    "id": 4,
    "title": "Collaborative Data Management Platform",
    "description": "A secure, internal web application designed to facilitate collaborative data management using uploaded Excel spreadsheets. This platform enables multiple users with varying roles (including administrators) to perform actions such as viewing, editing, and deleting data, with changes reflected in near real-time.  The system prioritizes data integrity and provides a robust audit trail of all modifications.",
    "tags": ["Java", "Spring Boot", "React JS", "Excel", "Data Management", "Collaboration", "Multi-user", "Internal Tool", "Security", "REST API"],
    "image": "/images/data-management-tool.jpg",
    "link": "#",
    "features": [
      "Secure file upload of Excel spreadsheets (.xlsx, .xls)",
      "Real-time data viewing and editing capabilities",
      "Role-based access control (RBAC) for managing user permissions",
      "Comprehensive data validation and error handling",
      "Audit logging of all data modifications and user actions",
      "Advanced search and filtering functionality",
      "Automated data refresh and synchronization",
      "User-friendly interface with intuitive navigation",
      "Support for concurrent user access and collaboration",
      "Export data to various formats (e.g., Excel, CSV)"
    ],
    "stats": [
      { "value": "1000+", "label": "Daily Active Users (Internal)" },
      { "value": "100K+", "label": "Records Processed Daily" },
      { "value": "99.9%", "label": "System Uptime" }
    ]
  },
  
  {
    id: 1,
    title: "Video Summarization",
    description: "Leveraging Deep Learning and Computer Vision, this application automatically generates concise summaries of videos."
    +" Built with Flask for the backend and React JS for a dynamic user interface.",
    tags: ["Deep Learning", "Computer Vision", "Flask", "React JS"],
    image: "/images/project-ecommerce.jpg",
    link: "https://example-ecommerce.com",
    codeLink: "https://github.com/Ankit1696/video_summarization",
    features: [
      "Automatic extraction of key video segments",
      "Customizable summary length",  
      "Support for various video formats",
      "Intuitive web interface"
    ],
    stats: [
      { value: "3.2s", label: "Avg. load time" },
      { value: "98%", label: "Lighthouse score" },
      { value: "+$500K", label: "Revenue generated" }
    ]
  },



  {
    "id": 2,
    "title": "My Web Development Portfolio",
    "description": "A meticulously crafted portfolio website built with modern web technologies, including React JS and Tailwind CSS, to showcase my skills and passion for web development. Explore a diverse range of projects, demonstrating my proficiency in front-end development, responsive design, and creating engaging user experiences.",
    "tags": ["React JS", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Responsive Design", "UI/UX"],
    "image": "/images/portfolio-website.jpg",
    "link": "https://your-portfolio-link.com",
    "codeLink": "https://github.com/Ankit1696/portfolio",
    "features": [
      "Interactive project showcase with detailed descriptions and live demos",
      "Clear and concise presentation of technical skills and proficiencies",
      "Easy-to-use contact form for inquiries and collaborations",
      "Responsive design ensuring optimal viewing on all devices"
    ],
    "stats": [
      { "value": "5+", "label": "Years of Experience" },
      { "value": "10+", "label": "Projects Showcased" },
      { "value": "100%", "label": "Client Satisfaction (if applicable)" }
    ]
  },
  {
    "id": 3,
    "title": "Library Management System",
    "description": "A robust web application developed using Java Spring Boot for a scalable and secure backend, and React JS for a responsive and interactive user interface. This system streamlines library operations, including catalog management, member management, borrowing/returning books, and generating reports.",
    "tags": ["Java", "Spring Boot", "React JS", "JavaScript", "HTML", "CSS", "REST API", "Database Management"],
    "image": "/images/library-management.jpg",
    "link": "https://github.com/Ankit1696/lms",
    "codeLink": "https://github.com/Ankit1696/lms",
    "features": [
      "Book catalog management (add, edit, delete books)",
      "Member management (registration, profile management)",
      "Book borrowing and returning functionality",
      "Search and filtering of books by title, author, genre",
      "Admin dashboard for system management"
    ],
    "stats": [
      { "value": "1000+", "label": "Books Managed" },
      { "value": "500+", "label": "Registered Members" },
      { "value": "99%", "label": "Availability Rate" }
    ]
  },
  {
    "id": 5,
    "title": "Secure Online Voting System",
    "description": "A robust and secure online voting system designed for [Company Name]'s internal use, facilitating transparent and efficient voting processes. This system supports various voting methodologies, ensures voter anonymity, and provides comprehensive audit trails to maintain the integrity of the voting process.  It is built with security and scalability in mind, leveraging [mention key tech like Java, React, Blockchain if applicable, otherwise keep generic like 'modern web technologies'].",
    "tags": ["Voting System", "Online Voting", "Security", "Internal Tool", "Auditing", "Elections", "Polls",   "Java", "Spring Boot", "React"],
    "image": "/images/voting-system.jpg",
    "link": "https://github.com/Ankit1696/votesystem",
    "codeLink": "https://github.com/Ankit1696/votesystem",
    "features": [
      "Secure voter authentication and authorization",
      "Support for multiple voting methodologies (e.g., single choice, multiple choice, ranked choice)",
      "Real-time vote casting and recording",
      "End-to-end encryption of votes to ensure anonymity",
      "Comprehensive audit trails for verification and accountability",
      "Role-based access control (RBAC) for election administrators and voters",
      "Scalable architecture to handle concurrent voting sessions",
      "User-friendly interface for easy participation",
      "Integration with [Company Name]'s internal authentication system",
      "Detailed reporting and analytics on voting results"
    ],
    "stats": [
      { "value": "10,000+", "label": "Potential Voters" },
      { "value": "99.99%", "label": "System Uptime" },
      { "value": "Strong", "label": "Encryption Standard" }
    ]
  },
  {
    "id": 6,
    "title": "NLP Word Generation Model",
    "description": "This project explores the use of Natural Language Processing (NLP) techniques to generate words. The repository contains code and resources for training and implementing a model that can predict and create new words based on a given dataset. This could be useful for applications like autocompletion, text generation, or educational tools. The project likely utilizes Python and popular NLP libraries.",
    "tags": ["NLP", "Natural Language Processing", "Word Generation", "Python", "Machine Learning", "Text Generation"],
    "image": "/images/nlp-word-generator.jpg",
    "link": "https://github.com/Ankit1696/NLP/blob/master/generate_word.ipynb",
    "codeLink": "https://github.com/Ankit1696/NLP/blob/master/generate_word.ipynb",
    "features": [
      "Word generation using NLP techniques",
      "Model training and implementation",
      "Potential for autocompletion or text generation applications",
      "Uses Python and NLP libraries (e.g., TensorFlow, PyTorch, NLTK)",
      "Jupyter Notebook implementation"
    ],
    "stats": [
      { "value": "Python", "label": "Primary Language" },
      { "value": "NLP Libraries", "label": "Dependencies" },
      { "value": "Jupyter Notebook", "label": "Code Format" }
    ]
  }
  
  
  
]

const filters = [
  { id: 'all', name: 'All Projects' },
  // { id: 'web', name: 'Web Applications' },
  // { id: 'mobile', name: 'Mobile Apps' },
  // { id: 'ecommerce', name: 'E-Commerce' }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={slideUp}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl"
              variants={slideUp}
            >
              A selection of my best work showcasing technical skills and creative solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section id='projects'> 
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Filter Controls */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              variants={slideUp}
              customDelay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.section 
          className="mt-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Project Impact by Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100K+</p>
              <p className="text-gray-600 dark:text-gray-400">Users Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4.8/5</p>
              <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</p>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.section> */}

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I am currently available for freelance work and interesting project opportunities. Let us discuss how I can help bring your ideas to life.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
            <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      </section>
    </Layout>
  )
}