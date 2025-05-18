export default function SkillBar({ skill, level }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    )
  }