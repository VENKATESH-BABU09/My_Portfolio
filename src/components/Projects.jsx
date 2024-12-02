import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="">
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project1}
              alt=""
              className="mb-5 rounded-lg mt-3"
              width={200}
              height={210}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl"
          >
            <h2 className="font-medium text-xl text-purple-600 mb-3">
              Job Portal
            </h2>
            <p className="font-thin text-white">
              This job portal is a full-stack application built using
              Express.js, React.js, and MongoDB. It features JWT-based
              authentication with separate logins for job seekers and
              recruiters, ensuring a secure and user-friendly platform for job
              opportunities.
            </p>
            <br/>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              ReactJS{" "}
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Express
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Node
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JWT tokens
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind CSS
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project2}
              alt=""
              className="mb-5 rounded-lg mt-3"
              width={200}
              height={210}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl"
          >
            <h2 className="font-medium text-xl text-purple-600 mb-3">
              Weather App
            </h2>
            <p className="font-thin text-white">
              This React-based weather website uses the Weather API to provide
              real-time weather data, allowing users to check current conditions
              and forecasts. Styled with Tailwind CSS, the app offers a clean
              and responsive user interface.
            </p>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              ReactJS{" "}
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Weather API
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project3}
              alt=""
              className="mb-5 rounded-lg"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl"
          >
            <h2 className="font-medium text-xl text-purple-600 mb-3">
              My Resume
            </h2>
            <p className="font-thin text-white">
              This project is a responsive resume of mine built with HTML,
              styled using Tailwind CSS, and enhanced with JavaScript for
              interactive features. It showcases professional experience,
              skills, and projects in a clean and modern design.
            </p>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JS
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project4}
              alt=""
              className="mb-5 rounded-lg mt-3"
              width={200}
              height={210}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl"
          >
            <h2 className="font-medium text-xl text-purple-600 mb-3">
              CRUD app Backend
            </h2>
            <p className="font-thin text-white">
              This simple CRUD app backend, built with Express,Node.js and
              MongoDB helps to learn and implement basic backend operations like
              creating, reading, updating, and deleting data. It serves as a
              foundational project for understanding server-side development and
              API handling.
            </p>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Express
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Node
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
