import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(user){
    console.log(user);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center">Login</h2>

          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline bg-primary text-white"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
