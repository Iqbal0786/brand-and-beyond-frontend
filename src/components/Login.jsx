import {Link, useNavigate} from "react-router-dom"
import React, { useState } from "react";
import axios from "axios"
import "../styles/style.css";
export default function Login() {
  const navigate= useNavigate();
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const [passwordVisibility,setPasswordVisibility]=useState("password");
    

    const formHandler=(e)=>{
         let {value,name}= e.target;
         setUserInfo({...userInfo,[name]:value})
    }
    const loginHandler=()=>{
         if(userInfo.email==""){
            alert("please enter email address")
         }
         else if(userInfo.password==""){
            alert("please enter password")
         }
         else {
          axios.post("https://brand-and-beyond-backend.herokuapp.com/login",{ email:userInfo.email, password:userInfo.password}).then((res)=>{
            sessionStorage.setItem("loggedUser" , JSON.stringify(res.data))
            alert("Successfully Logged in !!");
             setTimeout(()=>{navigate("/admin")},3000)
            console.log(res.data)
           }).catch((err)=>{
             alert("Please check your email or password  !!")
           })
         }
    }
    console.log(userInfo)
  return (
    <>
      <div id="parentDiv">
        <div id="leftBox">
          <img
            src="https://user-images.githubusercontent.com/63330022/185419939-3e28809b-4847-4c2d-b2fc-d88fe4e6f5d9.png"
            height={"100%"}
            width={"100%"}
          />
        </div>

        <div id="rightBox">
          <div id="HeadingDiv">
            <h1 style={{ marginBottom: "3px" ,marginTop:"17px" , fontSize:"22px" }}>Welcome Back</h1>
            <h5
              style={{
                color: "#98E1F2",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Sign in to continue
            </h5>
          </div>
          <div id="inputBox">
            <div style={{ width: "100%" , position:"relative" }}>
              <i
                class="fa fa-envelope icon"
                style={{ position: "absolute", top: "40%", left: "10%" }}
              ></i>{" "}
              <input type={"email"} placeholder="Email"  name="email" onChange={formHandler}/>
            </div>
            <div style={{ width: "100%"  , position:"relative"}}>
              <i
                class="fa fa-lock icon"
                style={{ position: "absolute", top: "44%", left: "12%" }}
              ></i>{" "}
              <input type={passwordVisibility} placeholder="Password" name="password" onChange={formHandler}  style={{visibility:true}} />
              <i
                class="fa fa-eye icon"
                style={{ position: "absolute", top: "44%", left: "84%" }}
               onClick={()=>{
                   if(passwordVisibility=="password"){
                    setPasswordVisibility("text")
                   }
                   else{
                    setPasswordVisibility("password")
                   }
               }}></i>
            </div>
            <div id="forgetTitle">
             <h4 >
              Forget Password ?
            </h4>
             </div>
            <div>
                <button onClick={loginHandler}> Sign in </button>
                  <div style={{display:"flex" , justifyContent:"space-around" , marginTop:"5px" , gap:"5px"}}><b><p>dose not  have  a account ?</p></b> <Link to={"/"} style={{textDecoration:"none", color:"#98E1F2" , marginTop:"1px" , fontWeight:"400"}}> Sign up</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
