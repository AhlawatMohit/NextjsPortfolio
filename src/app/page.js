'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1.1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">

        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image className="rounded-br-[30%] rounded-bl-[25%] lg:w-[28rem] lg:h-[30rem] md:h-[18rem] md:w-[22rem] md:ml-[15rem] xl:ml-[1rem] ml-16" src="/profile.png" alt="Profile Image" width={260} height={200} />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-1">
            <p className="text-sm lg:text-lg">Hi, I'm</p>
            <h1 className="text-3xl md:text-6xl font-bold text-[#4763ff]">Mohit Ahlawat</h1>
            <h3 className="text-slate-600 text-lg">Frontend developer | MERN | UI/UX </h3>
            <p className="text-base md:text-lg">I am looking for a Software Engineering role at a company which develop products with huge impact on people life.</p>
          </div>
          {/* BUTTONS */}
          <motion.div initial={{ x: "100vh" }} animate={{ x: "-10%" }} transition={{ type: 'spring', delay: 1, stiffness: 200 }} className="flex gap-4">
            <Link href="/MohitCV.pdf">
              <button className="p-2.5 rounded-lg ring-2 ring-[#9BB0C1] bg-black text-white">Resume/CV</button>
            </Link>
            <Link href="/portfolio">
            <button className="p-2.5 rounded-lg ring-2 ring-black bg-white text-black">View My Work</button>
            </Link>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
