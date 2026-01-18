import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const shrinkThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Shrinking Navbar
      if (scrollY > shrinkThreshold) {
        navbarRef.current.classList.add("shrunken");
      } else {
        navbarRef.current.classList.remove("shrunken");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup (สำคัญมาก)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const goHome = (e) => {
      e.preventDefault(); // กัน anchor ทำงานเอง

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.location.hash = "#Home";
    };

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="logo" onClick={goHome}>
          Psk
        </div>

        <ul className="nav-links">
          <li>
            <a href="#Home" onClick={goHome}>
              Home
            </a>
          </li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
