import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content: "Working with [Your Name] was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our product ahead of schedule.",
    rating: 5
  },
  // Add more testimonials
]

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Do not just take my word for it - here is what clients say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}