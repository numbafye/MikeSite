import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="">
        <ul className="list-none flex gap-8 justify-end pr-6 pt-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
