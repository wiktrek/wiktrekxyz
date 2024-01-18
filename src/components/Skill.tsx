import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
export interface Props {
  icon: string;
  text: string;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
  faRust,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  return (
    <div className="">
      <HoverCard>
        <HoverCardTrigger asChild>
          <FontAwesomeIcon
            icon={getIcon(props.icon)}
            className="text-5xl text-white"
          />
        </HoverCardTrigger>
        <HoverCardContent className="w-16">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1 text-center">
              <h4 className="text-sm font-semibold">{props.text}</h4>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
function getIcon(icon: string): IconDefinition {
  switch (icon) {
    case "rust":
      return faRust;
      break;
    case "react":
      return faReact;
    case "git":
      return faGitAlt;
    case "html":
      return faHtml5;
    case "node":
      return faNodeJs;
  }
  return faRust;
}
