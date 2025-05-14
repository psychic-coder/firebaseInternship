// src/components/StudentList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, BookOpen, ChevronRight } from 'lucide-react';

const StudentList = ({ students }) => {
  if (students.length === 0) {
    return (
      <div className="p-12 text-center">
        <div className="inline-flex rounded-full bg-yellow-100 p-4">
          <div className="rounded-full bg-yellow-200 p-2">
            <svg className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
        <h3 className="mt-5 text-lg font-medium text-gray-900">No students found</h3>
        <p className="mt-2 text-gray-500">
          Try changing your filter criteria or add a new student.
        </p>
        <div className="mt-6">
          <Link
            to="/add-student"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Add a student
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Table header for desktop */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <div className="sm:col-span-4">Name</div>
        <div className="sm:col-span-3">Course</div>
        <div className="sm:col-span-4">Email</div>
        <div className="sm:col-span-1"></div>
      </div>

      
      <ul className="divide-y divide-gray-200">
        {students.map((student) => (
          <li key={student.id} className="hover:bg-gray-50">
            <div className="sm:grid sm:grid-cols-12 gap-4 px-6 py-4 flex flex-col sm:items-center">
             
              <div className="sm:col-span-4 mb-2 sm:mb-0 flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  <div className="text-sm text-gray-500 sm:hidden">ID: {student.id}</div>
                </div>
              </div>
              
            
              <div className="sm:col-span-3 mb-2 sm:mb-0 flex items-center sm:justify-start">
                <BookOpen className="h-5 w-5 text-gray-400 sm:hidden" />
                <span className="sm:hidden ml-2 mr-2 text-gray-500">Course:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {student.course}
                </span>
              </div>
              
             
              <div className="sm:col-span-4 mb-2 sm:mb-0 flex items-center sm:justify-start">
                <Mail className="h-5 w-5 text-gray-400 sm:hidden" />
                <span className="sm:hidden ml-2 mr-2 text-gray-500">Email:</span>
                <a href={`mailto:${student.email}`} className="text-sm text-gray-900 hover:text-indigo-600">
                  {student.email}
                </a>
              </div>
              
             
              <div className="sm:col-span-1 flex items-center justify-end">
                <Link
                  to={`/student/${student.id}`}
                  className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-indigo-600 hover:border-indigo-600"
                >
                  <span className="sm:hidden">View</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      

      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">all</span> {students.length} students
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-between sm:hidden">
          <p className="text-sm text-gray-700">
            {students.length} students
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentList;