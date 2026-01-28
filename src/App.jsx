import React from "react";

import { Routes, Route } from "react-router-dom"; // 1. เพิ่ม import นี้
// Components เดิม
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Project from "./components/Project/Project.jsx";
import DescProject from "./components/Project/DescProject.jsx"; // 


const App = () => {
  return (
    // 3. เปลี่ยนโครงสร้างข้างในเป็น Routes
    <Routes>
      
      {/* === เส้นทางที่ 1: หน้าหลัก (Landing Page) === */}
      {/* เมื่อเข้าเว็บมาเฉยๆ (path="/") ให้แสดง Navbar, Home, About, Project ตามลำดับเดิม */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <section id="Home">
                <Home />
              </section>
              <section id="About">
                <About />
              </section>
              <section id="Project">
                <Project />
              </section>
            </main>
          </>
        }
      />

      <Route path="/Project/:id" element={<DescProject />} />
    </Routes>
  );
};

export default App;