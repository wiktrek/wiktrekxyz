import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import Image from 'next/image';
interface props {
  skill: string;
  description: string;
  img: string;
}
const Skill = (props: props) => {
  return (
    <>
      <div className="flex text-center items-center justify-center flex-col h-24 w-ful overflow-hidden rounded w-48 border-4  border-red-700">
        <p>
          <a>{props.skill}</a>
        </p>
        <Image
          src={props.img}
          alt={props.skill}
          className="rounded-full"
          height={40}
          width={80}
        />
        <p className="text-xl">{props.description}</p>
      </div>
    </>
  );
};
export default Skill;
