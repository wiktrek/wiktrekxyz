import { useState } from "react";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

config.autoAddCss = false;
export default function Navbar() {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex top-0 pt-0 sticky justify-between items-center text-md md:text-2xl">
        <div className="pl-2 md:pl-8">
          <HoverCard>
            <HoverCardTrigger
              className="text-primary hover:text-secondary animate-in transition-all cursor-pointer"
              href="https://github.com/wiktrek"
            >
              wiktrek
            </HoverCardTrigger>
            <HoverCardContent className="bg-background border-ring">
              <Icons />
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="space-x-2 md:space-x-8 text-xl md:text-2xl">
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
            href="/skills"
            className="hover:text-secondary animate-in transition-all"
          >
            Skills
          </a>
        </div>
        <a
          className="pr-2 hover:text-secondary animate-in transition-all"
          href="https://x.com/wiktrek"
          target="_blank"
        >
          Contact me
        </a>
      </div>
    </>
  );
}
function Icons() {
  return (
    <li className="list-none space-x-2">
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
