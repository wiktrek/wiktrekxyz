
export interface Props {
  title: string;
  second_title: string;
  description: string;
  span: string;
  link?: string;
  image?: string;
}
import { Button } from "~/components/ui/button";
export default function Card(props: Props) {
  return (
  <div className="w-72 h-44 bg-popover rounded-md text-xl shadow-md text-foreground text-left p-2" onClick={() => window.open(props.link)}>
    <a className="text-3xl text-primary">{props.title}</a>
    { props.image != null ? <img src={`https://cdn.jsdelivr.net/gh/wiktrek/wiktrekxyz/data/images/${props.image}`}></img> : ""}
    <p className="px-2">{props.description}</p>
    <span className="pl-4 text-sm">{props.span}</span>
  </div> 
  );
}
