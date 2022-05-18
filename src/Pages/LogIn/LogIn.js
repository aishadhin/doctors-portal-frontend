import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  if (user) {
    console.log(user);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide valid email address",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  }
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </label>
            </div>

            <input className="btn btn-primary w-full max-w-xs text-white" type="submit" value="LOGIN" />
          </form>

          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline bg-secondary text-white"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
