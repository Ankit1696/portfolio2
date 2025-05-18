import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  // Check if mobile on mount and on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
      if (window.innerWidth >= 640) {
        setIsOpen(false)
      }
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
              Ankit
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className="relative px-3 py-2 text-sm font-medium"
              >
                <span className={`${
                  router.pathname === item.path 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}>
                  {item.name}
                </span>
                {router.pathname === item.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-indigo-600 dark:bg-indigo-400"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <ThemeToggle className="mr-4" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium ${
                    router.pathname === item.path
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800'
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}