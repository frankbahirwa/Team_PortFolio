"use client"

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      alert('invalid credentials');
      console.log(result.error);
      
    } else {
      window.location.href = "/dashboard";
    }
  };
  return (
    <>
      <div className="w-full h-full flex justify-center flex-col">
        <form className="px-5 border-2 border-black" onSubmit={(e)=>{handleSubmit(e)}}>
          <div>
            <h1 className="text-center text-2xl font-bold my-4 uppercase">
              Log In
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 w-72">
              <label htmlFor="email" className="">
                Email:
              </label>
              <input
                type="text"
                className="border-2 px-2 py-1 text-sm box-border border-black"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1.5 w-72">
              <label htmlFor="password" className="">
                Password:
              </label>
              <input
                type="password"
                className="border-2 px-2 py-1 text-sm box-border border-black"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="my-7">
            <button className="border-2 py-1 font-medium border-black text-center w-full">
              Login
            </button>
          </div>
        </form>
        Dont Have an Account ? <button onClick={() => redirect("/register")}>Register</button>
      </div>
    </>
  );
};

export default Login;
