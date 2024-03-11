"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";



const PortfolioPage = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration: 1.1}}
    >
<div className="h-[520vh] overflow-hidden relative bg-gradient-to-t to-sky-100 from-red-100" ref={ref}>

  <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Work</div>


  {/* <div className="flex flex-col overflow-scroll h-screen gap-4 items-center px-2 bg-gradient-to-t to-sky-100 from-red-100"> */}
  <div className=" pt-5 flex items-center justify-center text-xl font-semibold">Hover Over The Card Image</div>
  {/* 1st CARD */}
  <div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className=" text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Movie/TV Shows APP
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/movieM.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base max-w-sm mt-6 dark:text-neutral-300"
        >
          The Movies/TV Show App is a web application developed using <span className="text-[#50C4ED]">React.Js, Redux
Toolkit, and TMDB API</span>.
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <Link href={"https://moviex-platform.netlify.app"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-gray-700 hover:text-white text-white text-xs font-bold"
          >
            Live Link
          </CardItem>
          </Link>
          <Link href={"https://github.com/AhlawatMohit/Movies-platform"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-700 hover:text-white text-xs font-bold"
          >
            Source Code
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
    </div>

    {/* 2nd CARD */}
<div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Login/Registor App
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/register.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base max-w-sm mt-6 dark:text-neutral-300"
        >
          The Login/Register is a web application developed using a MERN
stack. Back-End <span className="text-[#50C4ED]">Node.js, Express.js, MongoDB, jsonwebtoken, joi, joi-password-complexity, cors, bcrypt,
mongoose, dotenv</span>. and Front-End <span className="text-[#50C4ED]">React.Js, Axios for Fetching Data</span>.
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <Link href={"https://mern-loginform.netlify.app"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-700 hover:text-white text-xs font-bold"
          >
            Live Link
          </CardItem>
          </Link>
          <Link href={"https://github.com/AhlawatMohit/Login_Form-Frontend"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-700 hover:text-white text-xs font-bold"
          >
            Source Code
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
</div>

{/* 3rd CARD */}

<div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          Data Visualization App
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/chart.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-base max-w-sm mt-6 dark:text-neutral-300"
        >
          Data Visualization Web Applications. Using MERN Stack. Back-End <span className="text-[#50C4ED]">Node, Express, mongoose, CORS</span>. Front-End <span className="text-[#50C4ED]">React.Js, TailwindCSS, Axios, Chart.Js, Responsive Web Design</span>.
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <Link href={"https://data-visualization-chartjs.netlify.app"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-700 hover:text-white text-xs font-bold"
          >
            Live Link
          </CardItem>
          </Link>
          <Link href={"https://github.com/AhlawatMohit/DataVisualization_Frontend"}>
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white hover:bg-gray-700 hover:text-white text-xs font-bold"
          >
            Source Code
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
</div>
  

  <div className="flex flex-col gap-16 items-center justify-center text-center">
<h1 className="mt-20 md:text-7xl 6xl">Do you have a Project?</h1>
<div className="relative">
<motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and MERN Stack
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
</div>
</div>
  </div>
  
{/* // </div> */}
    </motion.div>

  )
}

export default PortfolioPage