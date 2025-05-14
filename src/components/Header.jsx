import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn, Plus } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth'; 
import { signOutSuccess } from '../context/user/userSlice'; 

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(signOutSuccess());
      navigate('/login');
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
          <p className="text-indigo-100 mt-1">Manage and view your student records</p>
        </div>
        <div className="flex space-x-3">
          <Link to="/" className="flex items-center px-4 py-2 bg-indigo-800 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors font-medium">
            Home
          </Link>
          <Link to="/add-student" className="flex items-center px-4 py-2 bg-indigo-800 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors font-medium">
            <Plus className="w-5 h-5 mr-2" />
            Add Student
          </Link>
          {currentUser ? (
            <button
              onClick={handleSignOut}
              className="flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition-colors font-medium"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition-colors font-medium">
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
