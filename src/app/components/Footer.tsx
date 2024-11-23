import Link from "next/link";
import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className="bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
          <div className="flex flex-row gap-4">
          Created by Maryam Shakeel   
          <Link href={'https://www.linkedin.com/in/maryam-shakeel-5720a12b5/'}><FaLinkedin size={24}/></Link>
          <Link href={'https://portfolio-maryam-shakeels-projects.vercel.app/'}><TbWorld size={24}/></Link>
          </div>
      </footer></>
  );
};

export default Footer;
