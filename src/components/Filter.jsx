
import React, { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';

const FilterComponent = ({ students, onFilterChange }) => {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [uniqueCourses, setUniqueCourses] = useState([]);
  
  useEffect(() => {
    // Extract unique courses from students data
    const courses = [...new Set(students.map(student => student.course))];
    setUniqueCourses(courses);
  }, [students]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    onFilterChange(course);
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  const clearFilter = () => {
    setSelectedCourse('all');
    onFilterChange('all');
  };

  return (
    <div className="border-b border-gray-200">
    
      <div className="md:hidden p-4 flex justify-between items-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center text-gray-700 font-medium"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filter by Course
          {selectedCourse !== 'all' && (
            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">
              1
            </span>
          )}
        </button>
        
        {selectedCourse !== 'all' && (
          <button
            onClick={clearFilter}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>

   
      <div className={`md:hidden ${isFilterOpen ? 'block' : 'hidden'} px-4 pb-4 space-y-2`}>
        <button
          onClick={() => handleCourseSelect('all')}
          className={`block w-full text-left px-3 py-2 rounded-lg ${
            selectedCourse === 'all'
              ? 'bg-indigo-100 text-indigo-800'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Courses
        </button>
        
        {uniqueCourses.map(course => (
          <button
            key={course}
            onClick={() => handleCourseSelect(course)}
            className={`block w-full text-left px-3 py-2 rounded-lg ${
              selectedCourse === course
                ? 'bg-indigo-100 text-indigo-800'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {course}
          </button>
        ))}
      </div>

    
      <div className="hidden md:flex px-6 py-4 items-center">
        <div className="mr-4 font-medium text-gray-700 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filter:
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCourseSelect('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCourse === 'all'
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {uniqueCourses.map(course => (
            <button
              key={course}
              onClick={() => handleCourseSelect(course)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCourse === course
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {course}
            </button>
          ))}
        </div>
        
        {selectedCourse !== 'all' && (
          <button
            onClick={clearFilter}
            className="ml-auto flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filter
          </button>
        )}
      </div>
      
     
      {selectedCourse !== 'all' && (
        <div className="bg-gray-50 px-6 py-3 flex items-center">
          <span className="text-sm text-gray-500">Active filters:</span>
          <div className="ml-2 flex">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {selectedCourse}
              <button
                onClick={clearFilter}
                className="ml-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none"
              >
                <span className="sr-only">Remove filter</span>
                <X className="h-3 w-3" />
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;