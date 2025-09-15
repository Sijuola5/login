import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInputs } from "./types";
import "./LoginForm.css"; // Import CSS

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email Field */}


      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password Field */}


      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: {
              hasUppercase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* Submit Button */}

      
      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
