import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
// import axios from 'axios'

function Register() {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ur, setur] = useState("");
  const [usernameerr, setusernameerr] = useState("");
  const [passerr, setpasserr] = useState("")


  const clicksubmit = (data) => {
    axios.post("http://localhost:3500/users-api/user-signup", data)
      .then((res) => {
        if (res.data.status === 201) {
          setur(res.data.message)
        }
        else if (res.data.status == 200) {
          setusernameerr(res.data.message)
        }
        navigate('/Login')
      }

      )
      .catch((err) => console.log("err in login", err))
    console.log("login credentials of farmer", data)
  }



  return (
    <div className="flex flex-wrap m-[30px] shadow-lg h-[550px] rounded-xl ">

      <div className="w-[40%] flex flex-col bg-[#5655c6] rounded-tl-xl rounded-bl-xl justify-center p-[15px] align-center text-center">
        <h1 className="text-white  ">Welcome Back!</h1>
        <h6 className="text-white font-thin">
          To keep connected with us please
        </h6>
        <h6 className="text-white font-thin">login with your personal info</h6>
        <div>
          <button className="border border-1 border-white rounded-3xl text-white mt-[20px] w-[100px] py-2 px-3 cursor-pointer">
            <Link to="/Login" className='text-white text-decoration-none '>SIGN IN</Link>
          </button>
        </div>
      </div>
      <div className="w-[60%] flex flex-col rounded-tr-xl rounded-br-xl justify-center text-center align-middle">
        <h1 className="text-[#5655c6]">Create Account</h1>
        <h3>{ur}</h3>
        <h6 className="font-sm text-[grey] pt-[15px] pb-[20px]">
          or use your email for registration:
        </h6>
        <form onSubmit={handleSubmit(clicksubmit)}>
          <div className="flex flex-col gap-y-3 ml-[170px]">
            <input
              className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
              placeholder="Name"
              type="text"
              {...register("name", { required: true })}
            ></input>
            {errors.name?.type == "required" && <h6 className="text-[red] text-sm font-thin ">*username is required</h6>}
            {usernameerr.length > 0 && <h6 className="text-[red] text-sm font-thin ">*{usernameerr}</h6>}
            <input
              className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
              placeholder="Email"
              type="text"
              {...register("email", { required: true })}
            ></input>
            {errors.email?.type == "required" && <h6 className="text-[red] text-sm font-thin ">*email is required</h6>}
            <input
              className="border border-1 py-2 bg-[whitesmoke] text-[grey] pl-[10px]  max-w-[400px] rounded-lg outline-none"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            ></input>
            {errors.password?.type == "required" && <h6 className="text-[red] text-sm font-thin ">*password is required</h6>}

          </div>
          <div>
            <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer"
              type="submit">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register