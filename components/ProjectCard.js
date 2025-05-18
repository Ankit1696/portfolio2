import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({ project, variants, customDelay = 0 }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: customDelay }}
      className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 h-full"
    >
      {/* Project Image - Uncomment if you want to use images */}
      {/* <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div> */}

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.stats && (
            <span className="flex items-center text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
              <ChartBarIcon className="h-4 w-4 mr-1" />
              {project.stats[0].value}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features List */}
        {project.features && (
          <ul className="mb-4 space-y-2 flex-grow">
            {project.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400"
              >
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
          {/* {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors min-w-0"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">View Project</span>
            </Link>
          )} */}

          {project.codeLink && (
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1 
                text-sm font-medium 
                text-gray-600 dark:text-gray-400 
                hover:text-gray-800 dark:hover:text-gray-300 
                px-3 py-2 rounded-md 
                hover:bg-gray-100 dark:hover:bg-gray-700 
                transition-colors 
                min-w-0 flex-grow
                ${!project.codeLink ? "opacity-50 cursor-not-allowed" : ""}
              `}
              aria-disabled={!project.codeLink}
              onClick={
                !project.codeLink ? (e) => e.preventDefault() : undefined
              }
            >
              <CodeBracketIcon className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">View Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}