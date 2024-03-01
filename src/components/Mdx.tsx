import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
interface Props {
  children: string;
  href: string;
}
export function Heading(props: Props) {
  return (
    <div className="py-4">
      <a className="text-5xl font-semibold text-primary-500 ">
        {props.children}
      </a>
    </div>
  );
}
export function Link(props: Props) {
  return (
    <a
      className="text-[#ef2572] font-semibold"
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
export function GoBack() {
  return (
    <div className="text-2xl pt-2 text-primary-500">
      <a href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        {" return"}
      </a>
    </div>
  );
}
export const gh = 'https://github.com/wiktrek/wiktrekxyz/tree/main/data/'