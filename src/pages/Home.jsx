
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../api/mockApi';
import FilterComponent from '../components/Filter';
import StudentList from '../components/studentList';
import { LogIn, Plus, BookOpen, Users } from 'lucide-react';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getStudents = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStudents();
        setStudents(data);
        setFilteredStudents(data);
      } catch (err) {
        setError('Failed to fetch students. Please try again later.');
        console.error('Error fetching students:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    getStudents();
  }, []);

  const handleFilterChange = (course) => {
    if (course === 'all') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(student => student.course === course));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">{students.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Unique Courses</p>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(students.map(s => s.course)).size}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center lg:col-span-1 md:col-span-2">
            <div className="w-full">
              <p className="text-gray-500 text-sm mb-2">Students per Course</p>
              <div className="space-y-2">
                {Array.from(new Set(students.map(s => s.course))).map(course => {
                  const count = students.filter(s => s.course === course).length;
                  const percentage = (count / students.length) * 100;
                  
                  return (
                    <div key={course} className="w-full">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{course}</span>
                        <span>{count} students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Student Records</h2>
            <p className="text-gray-500 text-sm mt-1">
              {filteredStudents.length} 
              {filteredStudents.length === 1 ? ' student' : ' students'} found
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">{error}</div>
          ) : (
            <>
              <FilterComponent 
                students={students} 
                onFilterChange={handleFilterChange} 
              />
              <StudentList students={filteredStudents} />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;