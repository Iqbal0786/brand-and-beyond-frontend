import { AppBar, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import ErrorImage from "./ErrorImage";
import UsersTable from "./UsersTable";


export default function Admin() {
  const [isAllowd, setIsAllowd] = useState(true);
  const navigate = useNavigate();
  const [registeredUser,setRegisteredUser] = useState([]);
  useEffect(() => {
    let userdata = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (userdata) {
    //   let isUser = userdata.user.roles?.includes("user");
    //   if (isUser) {
    //     setIsAllowd(false);
    //   } else {
    //     axios
    //       .get("http://localhost:7777/users", {
    //         headers: { Authorization: `Bearer ${userdata.token}` },
    //       })
    //       .then((res) => {
    //         setProductData([...res.data]);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }
    axios.get("http://localhost:7777/users" ,{ headers: {"Authorization" : `Bearer ${userdata.token}`} }).then((res)=>{
        console.log(res)
        setRegisteredUser([...res.data])
   }).catch((err)=>{
      setIsAllowd(false)
    //   alert("Permission Denied !!")
     console.log(err.message)
   })

    } else {
      navigate("/login");
    }
  }, []);

  console.log(registeredUser);
  return (
    <>
      {isAllowd == false ? (
        navigate("/error")
      ) : (
        <>
          <AppBar>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
              }}
            >
              <Typography>Welcome Admin Dashboard</Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/login");
                }}
              >
                Log Out
              </Typography>
            </Toolbar>
          </AppBar>

          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              marginTop: "150px",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            List of Registered Users 
          </Typography>
          <UsersTable data={registeredUser}/>
        </>
      )}
    </>
  );
}
