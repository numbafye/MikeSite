import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <div className="flex gap-8 justify-end pr-10 pt-4 border-b" id="Navbar">
      <ul className="list-none flex gap-8">
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
      <div className="flex gap-5" id="Socials">
        <a
          href="//x.com/MichaelJMillion"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
        </a>
        <a
          className="hover:text-ig"
          href="www.instagram.com/itsmichaelmillion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          className="hover:text-spotify"
          href="open.spotify.com/artist/4oKcehR3EcxJn2lgnuKUBW?si=LQRzrb7xQVK78wZbGnGk5w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
        </a>
        <a
          className="hover:text-sc"
          href="soundcloud.com/million_gt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSoundcloud}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
