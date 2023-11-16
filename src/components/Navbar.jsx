// Navbar.js


import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className=" text-lg font-bold">Restaurent Landing Page</Link>
        <div className="space-x-4">
          <Link to="/" className="">Landing</Link>
          <Link to="/about" className="">Home</Link>
          <Link to="/contact" className="">Gallery</Link>
          <Link to="/" className="">Shop</Link>
          <Link to="/about" className="">Blog</Link>
          <Link to="/contact" className="">About</Link>
          <Link to="/" className="">Team</Link>
          <Link to="/about" className="">Contact</Link>
          <Link to="/contact" className="">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
