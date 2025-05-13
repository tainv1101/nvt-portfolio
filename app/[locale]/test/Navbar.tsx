"use client";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Chỉ set scrollY khi có window
    if (typeof window !== "undefined") {
      setLastScrollY(window.scrollY);

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setVisible(false);
          if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        } else if (currentScrollY < lastScrollY) {
          setVisible(true);
          if (!isHovering) {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = setTimeout(() => {
              setVisible(false);
            }, 3000);
          }
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      };
    }
  }, [lastScrollY, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

  };

  useEffect(() => {
    if (!isHovering && visible && lastScrollY !== 0) {
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    }
  }, [isHovering, visible, lastScrollY]);


  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "red",
        color: "white",
        padding: "1rem",
        transition: "transform 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        zIndex: 99,
      }}
    >
      Navbar
    </nav>
  );
};

export default Navbar;
