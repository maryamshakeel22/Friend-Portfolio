"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-bold">Matriculation <span className="font-bold bg-[#7600bc]">2016 - 2018</span>
        <br />Bio Science NCL Secondary School Taxila
        </li><br />
        <li className="font-bold">Intermediate <span className="font-bold bg-[#7600bc]">2018 - 2020</span>
        <br />Mashal Degree College, Wah Cantt
        </li><br />
        <li className="font-bold">Bachelor <span className="font-bold bg-[#7600bc]">2021 - 2024</span>
        <br />Bachelor of computer Arts Hamdard University, ISB
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
        <ul className="list-disc pl-2">
        <li className="font-bold">Graphic Designer and Digital Marketing <span className="font-bold bg-[#7600bc]">March 2024 to May 2024</span>
        <br />Expert at Pak German Engineers
        </li><br />
        <li className="font-bold">Graphic Design Intern <span className="font-bold bg-[#7600bc]">June 2023 to Aug 2023</span>
        <br />Hamdard University
        </li><br />
        <li className="font-bold">UI/UX Designer <span className="font-bold bg-[#7600bc]">Dec 2023 to Sep 2024</span>
        <br />Crypotokers 
        </li><br />
        <li className="font-bold">Graphic & UI/UX Designer <span className="font-bold bg-[#7600bc]">Dec 2023 to Sep 2024</span>
        <br />Digital Buzz
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-left">
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe xd </li>
        <li>Indesign</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="font-bold">E commerce
        <br />Punjab board of Technical Education
        </li><br />
        <li className="font-bold">Illustration
        <br />NS Training Lahore
        </li><br />
        <li className="font-bold">Graphic designer
        <br />Pak German Engineers
        </li><br />
        <li className="font-bold">UI/UX Designer
        <br />Cryptokoders
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
      src="/heromain.jpg"
      alt="Hero"
      width={300}
      height={300}
      className="rounded m-0 p-0"
    />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
        I am a Graphic and Ui/Ux Designer with 2+ years of experience, I
        specialize in creating visually stunning and user-friendly designs, from
        brand identity to digital interfaces. My work blends creativity with
        functionality, ensuring every project is both beautiful and effective.
      </p>
      <div className="flex flex-row justify-start mt-8 text-sm sm:text-normal">
{TAB_DATA.map((tabData) => (
  <TabButton
    key={tabData.id}
    selectTab={() => handleTabChange(tabData.id)}
    active={tab === tabData.id}
  >
    {tabData.title}
  </TabButton>
))}
</div>
<div className="mt-8">
{TAB_DATA.find((t) => t.id === tab)?.content}
</div>
    </div>
  </div>
</section>

  
  );
};

export default AboutSection;

{/* <div className="flex flex-row justify-start mt-8 text-sm sm:text-normal">
{TAB_DATA.map((tabData) => (
  <TabButton
    key={tabData.id}
    selectTab={() => handleTabChange(tabData.id)}
    active={tab === tabData.id}
  >
    {tabData.title}
  </TabButton>
))}
</div>
<div className="mt-8">
{TAB_DATA.find((t) => t.id === tab)?.content}
</div> */}
