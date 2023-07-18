interface Props {
  children: string;
}
export function Heading(props: Props) {
  return <a>{props.children}</a>;
}
