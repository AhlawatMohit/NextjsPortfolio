'use client'
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  const exprienceRef = useRef();
  const isExprienceRefInView = useInView(exprienceRef, {margin:"-200px"});

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1 }}>

      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">

          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* <p>Hi, I'm Mohit Ahlawat. I Completed my Graduation from Matu Ram Institute
 of Engineering & Management(MRIEM). From B.tech(C.S.E), Year(2021). 
 MRIEM affilated by Maharshi Dayanand University(MDU) Rohtak. 
 And now I am working Freelancer(upwork) as <span className="text-sky-600 text-lg">Front End</span> or <span className="text-sky-600 text-lg">MERN Stack </span> 
  Developer and basics of <span className="text-sky-600 text-lg">React Native</span> for Mobile App. Visit GitHub for more projects.</p> */}

            <p className="text-lg">I am a dedicated and passionate <span className="text-blue-600 text-lg font-semibold">Front End</span> and
              <span className="text-blue-600 text-lg font-semibold"> MERN Stack</span> Developer,
              specializing in crafting beautiful and responsive web applications.
              With a Bachelor's degree in Computer Science and Engineering
              from Matu Ram Institute of Engineering & Management (MRIEM),
              affiliated with Maharshi Dayanand University (MDU) Rohtak,
              I embarked on a journey to explore the dynamic world of web
              development. I have honed my skills and expertise through
              freelance projects on Upwork. I have basic understanding
              of <span className="text-blue-600 text-lg font-semibold">React Native</span> for mobile application.</p>

            {/* IMAGE SIGNATURE */}
            <div className="self-end">
              <Image src="/sign.png" alt="" width={200} height={100} />
            </div>
            {/* SVG SCROLL */}
            <motion.svg
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"15px"}}
            transition={{repeat:Infinity, duration:1.2, ease:"easeInOut"}}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>



          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML5</div>
            </motion.div>


            {/* SVG SCROLL */}
            <motion.svg
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"15px"}}
            transition={{repeat:Infinity, duration:1.2, ease:"easeInOut"}}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>



          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col justify-center gap-12 pb-36" ref={exprienceRef}>
            <motion.h1
              initial={{ y: "2000px" }}
              animate={isExprienceRefInView ? { y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
              </motion.h1>

            <div>
              {/* EXPERIENCE LIST ITEM */}
              <motion.div 
              initial={{ x: "-1000px" }}
              animate={isExprienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }} 
              className="flex justify-between h-48"
              >
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Front End Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    12/2023 - 1/2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    OASIS
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </motion.div>

              {/* 2nd Exp... */}
              {/* EXPERIENCE LIST ITEM */}
              <motion.div initial={{ x: "2000px" }}
              animate={isExprienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}  className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
                    MERN Stack
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    15/2024 - 20/2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    AlgoPine
                  </div>
                </div>
              </motion.div>

              {/* 3rd Exp... */}
              {/* EXPERIENCE LIST ITEM */}
              <motion.div initial={{ x: "-1000px" }}
              animate={isExprienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}  className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    20/2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Upwork
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      <span className="absolute w-3 h-3 bg-green-600 rounded-full inset-[4px]"></span>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>



      {/* SVG CONTAINER */}
      {/* <div className="hidden lg:block w-1/3 xl:1/2">SVG</div> */}
    </motion.div>

  )
}

export default AboutPage