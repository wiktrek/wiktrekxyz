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
import { useEffect, useState } from "react";
/* 

make text under the logo. Hover doesn't work on mobile

*/
import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  const { category, icon, text } = props;
  let [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth <= 800 ? setMobile(true) : setMobile(false);
    }
    console.log(isMobile);
  });

  return (
    <div className="flex justify-between skill " id={category}>
      <HoverCard>
        <HoverCardTrigger
          asChild
          className="bg-primary-foreground rounded-xl hover:bg-accent animate-out transition-all"
        >
          <div>
            <img
              src={`${icon}`}
              width={80}
              height={80}
              className="p-4 w-20 md:w-24 mx-auto"
            />

            {isMobile ? (
              <p className="text-sm text-primary p-1">{text}</p>
            ) : (
              <></>
            )}
          </div>
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
