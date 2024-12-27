import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faSpotify,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-3 mt-5 pl-3" id="Socials">
        <h1>Footer</h1>
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

export default Footer;
