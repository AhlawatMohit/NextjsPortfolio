import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image className="rounded-br-[30%] rounded-bl-[25%] lg:w-[28rem] lg:h-[30rem] h-[18rem] w-[22rem] ml-10" src="/profile.png" alt="Profile Image" width={100} height={100} />
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
<div className="flex gap-4">
<Link href="/resume.pdf">
  <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">Resume/CV</button>
  </Link>
  <button className="p-3 rounded-lg ring-1 ring-black bg-white text-black">View My Work</button>
</div>
      </div>

    </div>
  );
}
