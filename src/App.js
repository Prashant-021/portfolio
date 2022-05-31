import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import { Users } from "./components/Users";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const onDelete = (users) => {
    console.log("Deleted of ", users);
    setUsers(user.filter((e)=>{
      return e!==users
    }));
  }
  const [user, setUsers] = useState([
    {
      sno: 1,
      Username: "Prashant",
      Useremail: "pspatel021@gmail.com",
      Projectname: "ABC",
      ProjectDesc: "XYZ",
    },
    {
      sno: 2,
      Username: "Meetraj",
      Useremail: "meetraj@gmail.com",
      Projectname: "ABC",
      ProjectDesc: "XYZ",
    },
    {
      sno: 3,
      Username: "Rajen",
      Useremail: "rajen@gmail.com",
      Projectname: "ABC",
      ProjectDesc: "XYZ",
    }
  ]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Portfolio-Admin" element={<Dashboard />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Users" element={<Users user={user} onDelete={onDelete} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
