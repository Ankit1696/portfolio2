import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Home() {
  return (
    <Layout>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Premium Badge */}
            <motion.div 
              variants={slideUp}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <SparklesIcon className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for work
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={slideUp}
            >
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Ankit Kumar</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={slideUp}
            >
              I craft <span className="text-indigo-600 dark:text-indigo-400">exceptional digital experiences</span> that are fast, accessible, and visually stunning.
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={slideUp}
            >
              <Link 
                href="/projects"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  View My Work <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Contact Me <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Client logos or tech stack */}
            <motion.div 
              className="mt-16"
              variants={slideUp}
            >
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by teams at</p> */}
              {/* <div className="flex flex-wrap gap-6 items-center opacity-70"> */}
                {/* Add your client logos or tech stack icons here */}
                {/* <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Google</span>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Microsoft</span>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Amazon</span> */}
              {/* </div> */}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-xl opacity-20 dark:opacity-30" />
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-400/10 rounded-full blur-lg" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/10 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}