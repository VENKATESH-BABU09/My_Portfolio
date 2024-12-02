import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';  // Correct the FaSquareXTwitter to FaTwitter
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div>
        <h1 className="text-2xl mx-2 flex flex-shrink-0 font-bold text-white">VENKATESH BABU</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/venkatesh-babu-r-490369249" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/VENKATESH-BABU09" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://x.com/VENKATBABU0908" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/_venkat_babu_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
