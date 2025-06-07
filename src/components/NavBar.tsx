import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitch,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "~/components/ui/hover-card";

config.autoAddCss = false;
export default function Navbar() {
  return (
    <>
      <div className="flex top-0 pt-6 items-center text-md md:text-2 justify-center font-medium">
        <div className="text-xl md:text-2xl space-x-4">
          <a
            href="/"
            className="hover:text-secondary animate-in transition-all"
          >
            Home
          </a>
          <a
            href="/#projects"
            className="hover:text-secondary animate-in transition-all"
          >
            Projects
          </a>
          <a
            href="/about"
            className="hover:text-secondary animate-in transition-all"
          >
            About
          </a>
        </div>
      </div>
    </>
  );
}
export function Icons() {
  return (
    <li className="list-none space-x-2 pt-4">
      <a
        href="https://github.com/wiktrek"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href="https://discord.com/users/499665258038820866"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a
        href="https://www.twitch.tv/wiktrekxyz"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faTwitch} />
      </a>

      <a
        href="https://www.instagram.com/wiktrekxyz"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.youtube.com/@wiktrek"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>

      <a
        href="https://github.com/wiktrek/wiktrekxyz"
        target="__blank"
        className="hover:text-secondary animate-in transition-all"
      >
        <FontAwesomeIcon icon={faCode} />
      </a>
    </li>
  );
}
