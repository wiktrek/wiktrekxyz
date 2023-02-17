interface props {
  title: string;
  desc: string;
  link: string;
  date: string;
}
const Update = (props: props) => {
  return (
    <div className="items-center justify-center p-1 text-center">
      <ul className="">
        <li>
          {props.title}
          <p className="text-base">{props.desc}</p>
          <a className="" href={props.link} rel="noreferrer" target="_blank">
            Link
          </a>
          <p className="text-lg">{props.date}</p>
        </li>
      </ul>
    </div>
  );
};

export default Update;
