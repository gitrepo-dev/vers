import React, { useState } from "react";
import { loginProps } from "./login.types";
// import { Link } from "react-router-dom";
import { LoginUser } from 'assets'
import { useForm } from 'hooks'

const Login: React.FC<loginProps> = ({ foo }) => {

  const [state] = useState({
    email: '',
    password: ''
  })

  //Custom hook for form validation
  const { handleChange, errors, isValidForm } = useForm(state);

  const handleLogin = (e: any) => {
    e.preventDefault();
    isValidForm()
  }

  return (
    <div className="flex justify-center items-center absolute h-full w-full">
      <div className="relative">
        <div className="rounded-full bg-gray-200 w-32 h-32 mx-auto flex items-center justify-center loginuserimg absolute">
          <img src={LoginUser} alt="login user" className="w-28" />
        </div>
        <form onSubmit={handleLogin} className="w-100 p-5 md:p-10 shadow-sm">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 mb-5 rounded mt-10 border-slate-200 border-2" />
          {errors.email}
          <br></br>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full focus:outline-0 px-4 py-2 mb-5 rounded border-slate-200 border-2" />
          {errors.password}
          <br></br>
          <button type="submit" className="px-8 py-2 text-center text-white bg-indigo-500 rounded hover:bg-indigo-800 w-full duration-100	">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
