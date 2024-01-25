import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
export interface Props {
  icon: string;
  text: string;
}

import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  return (
    <div className="flex justify-between ">
      <HoverCard>
        <HoverCardTrigger asChild className="bg-primary-foreground rounded-xl">
          <img
            src={`/icons/${props.icon}.svg`}
            width={80}
            height={80}
            className="p-4"
          />
        </HoverCardTrigger>
        <HoverCardContent className="w-18">
          <div className="">
            <div className="space-y-1 text-center">
              <h4 className="text-sm font-semibold">{props.text}</h4>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
