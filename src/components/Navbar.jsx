import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex mobile:text-sm justify-between" id="Navbar">
      <img
        className="w-10 h-15 rounded-br-xl relative m-0 self-center"
        src="src\assets\MIKESITE_stock_pics\ProfilePic.jpg"
        alt="Artist Logo"
      />
      <ul className="list-none flex mobile:gap-3 self-center pr-5">
        <li>
          <Link className="hover:text-accent" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" to="/music">
            MUSIC
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" to="/video">
            VIDEO
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
