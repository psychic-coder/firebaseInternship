
import { auth } from './fireBaseConfig'; 
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  

  try {
    const result = await signInWithPopup(auth, provider);

   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    
    
    const user = result.user;
    
    
    return { user, token };
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error("Google Sign-in error:", errorCode, errorMessage, email, credential);

    return { errorCode, errorMessage, email, credential };
  }
};

export default googleSignIn;
