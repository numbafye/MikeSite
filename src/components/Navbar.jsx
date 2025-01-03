import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../hooks/useToggle.jsx";
import { useEffect } from "react";

function Navbar() {
  const { toggle, close, isOpen } = useToggle();
  //Effect to disable scolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [isOpen]);

  //Effect for enabling navbar fixed positioning when scrolling
  useEffect(() => {
    const navScroll = () => {
      const Nav = document.getElementById("nav");
      if (Nav) {
        Nav.classList.toggle("scrolled", window.scrollY > 70);
      }
    };

    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <div className="flex sm:text-sm justify-between">
        <img
          className="w-10 h-15 relative m-0 self-center"
          src="src\assets\MIKESITE_stock_pics\LogoPic.png"
          alt="Artist Logo"
        />

        <button className="hamburger w-12" onClick={toggle}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="size-7 pt-1"
          />
        </button>

        {isOpen && (
          <ul className="z-50 bg-bg absolute w-full mt-9 text-center h-screen md:flex md:list-none md:gap-8 md:self-center md:pr-5">
            <li className="py-14">
              <Link
                className="px-32 py-7 hover:text-accent"
                onClick={close}
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="py-14">
              <Link
                className="px-32 py-7 hover:text-accent"
                onClick={close}
                to="/music"
              >
                MUSIC
              </Link>
            </li>
            <li className="py-14">
              <Link
                className="px-32 py-7 hover:text-accent"
                onClick={close}
                to="/video"
              >
                VIDEO
              </Link>
            </li>
            <li className="py-14">
              <Link
                className="px-32 py-7 hover:text-accent"
                onClick={close}
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
