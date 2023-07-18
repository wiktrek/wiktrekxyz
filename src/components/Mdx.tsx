interface Props {
  children: string;
  href: string;
}
export function Heading(props: Props) {
  return (
    <div className="py-2">
      <a className="text-5xl">{props.children}</a>
      <hr className=" border-gray-400" />
    </div>
  );
}
export function Link(props: Props) {
  return (
    <a
      className="text-[#70f5c2] font-semibold"
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
