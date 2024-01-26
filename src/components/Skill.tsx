import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
export interface Props {
  icon: string;
  category: string;
  text: string;
}

import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  const { category, icon, text } = props;
  return (
    <div className="flex justify-between skill " id={category}>
      <HoverCard>
        <HoverCardTrigger
          asChild
          className="bg-primary-foreground rounded-xl hover:bg-accent animate-out transition-all"
        >
          <img
            src={`/icons/${icon}.svg`}
            width={80}
            height={80}
            className="p-4"
          />
        </HoverCardTrigger>
        <HoverCardContent className="w-18">
          <div className="">
            <div className="space-y-1 text-center">
              <h4 className="text-sm font-semibold">{text}</h4>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
