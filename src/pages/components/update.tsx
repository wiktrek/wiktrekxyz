import Image from 'next/image';

interface props {
  title: string;
  link: string;
  date: string;
}
const Update = (props: props) => {
  return (
    <ul>
      <li>
        {props.title}
        <a className="" href={props.link} rel="noreferrer" target="_blank">
          <p>Link</p>
        </a>
        <p className="text-lg">{props.date}</p>
      </li>
      <li></li>
    </ul>
  );
};

export default Update;
