import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
       <footer className="footer p-10 border-t border-gray-600 rounded-t-4xl shadow-2xl">
  <div>
      <Link to={'/'}  className="text-2xl font-extrabold relative">
          ArT<span className="text-red-400 font-semibold absolute    top-1 left-9">Lane</span>
        </Link >
    <p className="text-gray-400">© 2025 ArtGallery. All rights reserved.</p>
  </div>

  <div>
    <span className="footer-title">Contact</span>
    <p>Email: info@artlane.com</p>
    <p>Phone: +880 123 456 789</p>
    <p>Address: Dhaka, Bangladesh</p>
  </div>

  <div className=''>
    <span className="footer-title">Follow Us</span>
    <div className="flex justify-start gap-5">
        <a href="https://www.facebook.com/"><FaFacebook className='text-4xl'/></a>
    <a href="https://x.com/"><FaXTwitter className='text-4xl'/></a>
    <a href="https://www.linkedin.com/in/md-shoyaif-rahman/"><FaLinkedin className='text-4xl'/></a>
    <a href="https://github.com/sohancse53"><FaGithub className='text-4xl'/></a>
    </div>
  </div>
</footer>

    );
};

export default Footer;