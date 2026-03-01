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
      <div className="flex top-0 pt-6 items-center text-md md:text-2 justify-center font-bold">
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