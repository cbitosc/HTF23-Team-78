import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const [usernameerr,setusernameerr]=useState("")
      const [passerr,setpasserr]=useState("")
    
    
      const clicksubmit=(data)=>{
        axios.post("http://localhost:3500/users-api/user-login",data)
        .then((res)=>{
            if(res.data.message=="Invalid username"){
            setusernameerr(res.data.message)
            }
            else if(res.data.message=="Invalid Password"){
                setpasserr(res.data.message)
            }
            else if(res.data.message=="success"){
                setpasserr("")
                setusernameerr("")
                console.log("to landing page")
                
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("username",res.data.username)
                navigate("/LandingPage")
            }
        })
        .catch((err)=>console.log("err in login",err))
        console.log("login credentials of  user",data)
      }
  return (
    <div className="flex justify-center m-[40px]">
    <div
      className="w-[600px] rounded-xl  h-[750px] border border-[grey] z-[1000]"
      style={{ boxShadow: "8px 8px 4px grey" }}
    >
      <div className="upperpart h-[50%] flex flex-col justify-center align-middle rounded-tl-xl rounded-tr-xl">
        <h3 className="text-white pl-[60px] font-sans ">
          Welcome to the Website
        </h3>
      </div>
      <div className="h-[50%] flex flex-col justify-start text-center m-[30px]">
        <h3 className="mb-[30px] heading text-[#5655c6]">LOGIN AS CPU</h3>
        <form onSubmit={handleSubmit(clicksubmit)}>
          <div className="flex flex-col gap-y-3 ml-[50px]">
            <input
              placeholder="email"
              type="text"
              className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[440px] rounded-lg outline-none"
              {...register("email", { required: true })}
            />
            {errors.username?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*username is required</h6>}
            {usernameerr.length>0 && <h6 className="text-[red] text-sm font-thin ">*{usernameerr}</h6>}
            <input
              placeholder="Password"
              type="password"
              className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[440px] rounded-lg outline-none"
              {...register("password", { required: true })}
            />
            {errors.password?.type=="required" && <h6 className="text-[red] text-sm font-thin ">*password is required</h6>}
            {passerr.length>0 && <h6 className="text-[red] text-sm font-thin ">*{passerr}</h6>}
            <h6 className="text-[#5655c6] flex flex-end text-sm cursor-pointer">
              Forgot password ?
            </h6>
            <div>
              <button className="border border-1 border-[#8f8ed9] text-[white] bg-[#5655c6] py-2 w-[100px] cursor-pointer rounded-3xl" type="submit">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login