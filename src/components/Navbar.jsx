import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../hooks/useToggle.jsx";
function Navbar() {
  const { toggle, close, isOpen } = useToggle();

  return (
    <nav>
      <div className=" flex sm:text-sm justify-between" id="Navbar">
        <img
          className="w-10 h-15 relative m-0 self-center"
          src="src\assets\MIKESITE_stock_pics\LogoPic.png"
          alt="Artist Logo"
        />
        <button className="hamburger  w-12" onClick={toggle}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="size-7 pt-1"
          />
        </button>

        {isOpen && (
          <div className="fixed inset-0" onClick={close}>
            <ul className="z-50 bg-bg absolute w-full mt-9 text-center h-screen md:flex md:list-none md:flex md:gap-8 md:self-center md:pr-5">
              <li className="py-14">
                <Link className="px-32 py-7 hover:text-accent border" to="/">
                  HOME
                </Link>
              </li>
              <li className="py-14">
                <Link className="px-32 py-7 hover:text-accent" to="/music">
                  MUSIC
                </Link>
              </li>
              <li className="py-14">
                <Link className="px-32 py-7 hover:text-accent" to="/video">
                  VIDEO
                </Link>
              </li>
              <li className="py-14">
                <Link className="px-32 py-7 hover:text-accent" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
