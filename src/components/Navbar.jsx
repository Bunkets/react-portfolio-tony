import logo from "../assets/tonyLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Add this for routing

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="flex gap-6">
        {/* Add links to Home, About, and Book sections */}
        <Link to="/" className="text-lg font-semibold hover:text-purple-500">
          Home
        </Link>
        
        <Link to="/About Me" className="text-lg font-semibold hover:text-purple-500">
          About Me
        </Link>
        <Link to="/scribego" className="text-lg font-semibold hover:text-purple-500">
          ScribeGo
        </Link>
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
