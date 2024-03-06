'use client'
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



const text = "Say Hello";

const ContactPage = () => {


  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_pb8okkj',
        'template_x1t2zc9',
        form.current,
        {
          publicKey: 'ZnGHaHhCAsWLJcNUJ',
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset()
        },
        () => {
          setError(true);
        },
      );
  };


  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1.1 }}>
      <WavyBackground>
        <div className="h-full flex flex-col gap-9 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* WAVE BACKGROUND */}


          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  className="text-white"
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              🙂
            </div>
          </div>

          {/* FORM CONTAINER */}
          <form onSubmit={sendEmail} ref={form} className="h-1/2 lg:h-full lg:w-1/2 bg-[rgba(255, 255, 255, 0.2)] border-2 border-white rounded-xl text-xl flex flex-col gap-5 justify-center p-20 mx-2">
            <span className="text-white">Dear Mohit Ahlawat,</span>
            <textarea rows={4} name="user_message" className="text-white bg-transparent border-b-2 border-b-white  outline-none resize-none" />
            <span className="text-white">Email Address:</span>
            <input type="text" name="user_email" className="text-white bg-transparent border-b-2 border-b-white  outline-none" />
            <span className="text-white">Regards</span>
            <button className="text-white bg-purple-700 hover:bg-purple-400 rounded font-semibold p-4">Send</button>

            {success && <span className=" text-green-600 font-semibold">Your message has been sent successfully!</span>}
            {error && <span className=" text-red-600 font-semibold">Something went wrong!</span>}
          </form>

        </div>
      </WavyBackground>
    </motion.div>

  )
}

export default ContactPage