import Aboutpic from "../assets/profile_babu.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-24 text-center text-4xl">
        About<span className="text-neutral-500"> ME</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={Aboutpic} alt="babu" className="w-1/2 rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-6 max-w-xl py-6 font-light">
              I’m a Full Stack Developer with a passion for building
              user-friendly and efficient web applications. Starting with HTML,
              CSS, and JavaScript, I expanded my skills to frameworks like
              React, Node.js, and Express, along with databases like MongoDB and
              MySQL. While I don’t have prior professional experience, I’ve
              dedicated my time to learning, building projects, and mastering
              the tools needed to create impactful solutions. I’m eager to grow,
              collaborate, and contribute to meaningful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
