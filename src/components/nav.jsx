import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../icons/icon.png";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-inherit p-6 w-full">
      <div className="flex items-center flex-shrink-0  mr-6">
      <Link to='/'><img src={image} alt="logo" className='w-8 h-8 rounded-md' /></Link>
        
        <span className="font-semibold text-xl tracking-tight pl-6">REED~MEDIA</span>
      </div>
      <div className="block lg:hidden ">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {navOpen ? (
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm4.4 13.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L10 11.4l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 5 6.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 10l3.6 3.6z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          navOpen ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto overflow-hidden`}
      >
        <div className="text-sm lg:flex-grow lg:pl-96">
          <Link
            to="/"
            onClick={() => setNavOpen(false)}
            className="block mt-4 lg:inline-block lg:mt-0  hover: mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"            
            onClick={() => setNavOpen(false)}
            className="block mt-4 lg:inline-block lg:mt-0  hover: mr-4"
          >
            About
          </Link>
          <Link
            to="/contact"            
            onClick={() => setNavOpen(false)}
            className="block mr-2 mt-4 lg:inline-block lg:mt-0  hover:"
          >
           Contact
          </Link>

          <Link
            to="/services"            
            onClick={() => setNavOpen(false)}
            className="block mt-4 lg:inline-block lg:mt-0  hover: mr-4"
          >
            Services
          </Link>
          <Link
            to="/faq"            
            onClick={() => setNavOpen(false)}
            className="block mt-4 lg:inline-block lg:mt-0  hover:"
          >
           Faq
          </Link>
        </div>
      </div>
      </nav>
      )
}

export default Nav;