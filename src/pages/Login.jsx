import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import googleLogin from '../firebase/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../context/user/userSlice';
import Cookies from 'js-cookie'; // ✅ import js-cookie

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);

      const login = await googleLogin();
      const token = login.token || (await login.user.getIdToken()); 
      const data = {
        email: login.user.email, 
        name: login.user.displayName,
      };

      Cookies.set('authToken', token, { expires: 7 }); 

      dispatch(signInSuccess(data));
      navigate('/');
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-indigo-600 px-8 py-10 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 bg-opacity-30">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white">Welcome Back</h1>
            <p className="mt-2 text-indigo-200">Sign in to your account to continue</p>
          </div>

          <div className="p-6 sm:p-8">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className={`flex w-full items-center justify-center rounded-lg ${
                isLoading ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'
              } border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="mr-2 h-5 w-5 animate-spin text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                   
                    <path fill="#4285F4" d="..." />
                    <path fill="#34A853" d="..." />
                    <path fill="#FBBC05" d="..." />
                    <path fill="#EA4335" d="..." />
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
