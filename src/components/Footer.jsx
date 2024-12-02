import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/venkatesh-babu-r-490369249",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/VENKATESH-BABU09",
      label: "GitHub",
    },
    {
      icon: <FaSquareXTwitter size={24} />,
      url: "https://x.com/VENKATBABU0908",
      label: "Twitter",
    },
    {
      icon: <FaYoutube size={24} />,
      url: "https://www.youtube.com/@techdudes0908",
      label: "YouTube",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/_venkat_babu_/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="text-white py-12 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Social Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-xl font-semibold mb-4">
              <span>Social</span>
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-xl font-semibold mb-4">VENKATESH BABU R</h4>
            <p className="text-gray-400 max-w-md">
              A passionate full-stack developer crafting beautiful and
              functional web experiences. Always eager to learn and create
              something new.
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Venkatesh Babu R. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
