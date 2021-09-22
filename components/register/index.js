import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { ENDPOINT } from "../../utils";

export default function Login() {
  const router = useRouter()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${ENDPOINT}/auth/register`, {
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', 
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    })
    router.push("/login")
  }

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-800 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-red-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">NORT MOTORS</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Impulsando la emoción de tener tu auto propio
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <a href="#" className="underline">Get Started!</a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center" onChange={(e) => handleChange(e)}>Register</h3>
          <form action="#" className="flex flex-col space-y-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e)=>handleChange(e)}
              />
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-500 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}