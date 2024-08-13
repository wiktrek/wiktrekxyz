/* 
  Fix animation on mobile (some projects might not have a full opacity while scrolling)
*/
export interface Props {
  title: string;
  second_title: string;
  description: string;
  span: string;
  link?: string;
  image?: string;
}
import { Button } from "~/components/ui/button";
import { useScroll, animated } from "@react-spring/web";
export default function Card(props: Props) {
  const { scrollYProgress } = useScroll();
  return (
    <animated.div
      style={{ opacity: scrollYProgress }}
      className="w-72 h-44 bg-transparent rounded-md text-xl shadow-md text-foreground text-left p-2 hover:cursor-pointer"
      onClick={() => window.open(props.link)}
    >
      <a className="text-3xl text-primary">{props.title}</a>
      {props.image != null ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/wiktrek/wiktrekxyz/data/images/${props.image}`}
        ></img>
      ) : (
        ""
      )}
      <p className="px-2">{props.description}</p>
      <span className="pl-4 text-sm">{props.span}</span>
    </animated.div>
  );
}
