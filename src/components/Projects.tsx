export interface Props {
  title: string;
  second_title: string;
  description: string;
  span: string;
  link?: string;
  image?: string;
}
import { useScroll, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
export default function Card(props: Props) {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <animated.div
      style={isMobile ? { opacity: 1 } : { opacity: scrollYProgress }}
      className="w-72 h-44 bg-transparent rounded-md text-xl shadow-md text-foreground text-left p-2 hover:cursor-pointer hover:scale-110 animate-out transition-all"
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
