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
import { faRust } from "@fortawesome/free-brands-svg-icons";

import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  return (
    <div className="">
      <HoverCard>
        <HoverCardTrigger asChild>
          <FontAwesomeIcon icon={faRust} className="text-5xl text-white" />
          {/* <p>Tekst</p> */}
        </HoverCardTrigger>
        <HoverCardContent className="w-16">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{props.text}</h4>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
