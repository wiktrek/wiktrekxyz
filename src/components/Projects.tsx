import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
export interface Props {
  title: string;
  second_title: string;
  description: string;
  span: string;
  link?: string;
}
import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{props.second_title}</h4>
            <p className="text-sm">{props.description}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                {props.span}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
