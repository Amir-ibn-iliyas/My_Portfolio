import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins  '>
      <hr className='border-slate-200' />

      <div className='footer-container '>
        <p>
          © 2024 <strong>Amir Ahmad</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank' className=" overflow-hidden rounded-full  w-7 h-7 flex items-center justify-center">
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:scale-150 ease-in-out duration-500'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;