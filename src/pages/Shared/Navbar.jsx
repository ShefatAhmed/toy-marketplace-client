import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLogout = () => {
    logOut()
      .then(result => { })
      .catch(error => console.error(error));
  }
  const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link >Blogs</Link></li>
    <li><Link >All Toys</Link></li>
    <li><Link >My Toys</Link></li>
    <li><Link >Add A Toy</Link></li>
  </>
  return (
    <div className="navbar bg-sky-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-400 font-bold px-1">
            {navItems}
          </ul>
        </div>
      </div>
      <Link className="flex items-center me-20">
        <img src="https://i.ibb.co/Qcc9mJ4/attachment-62129397.png" className="w-20 md:ms-5" alt="" />
        <h1 className="text-3xl font-bold"><span className="text-cyan-600">Toy</span><span className="text-yellow-500">Stars</span></h1>
      </Link>
      <div className="navbar-end">
        {
          user && <img className="w-10 rounded-full me-8 bg-lime-50" src="https://avatars.githubusercontent.com/u/112659624?v=4" />
        }
        {
          user ? ( <Link onClick={userLogout} className="btn md:me-3 glass px-8 bg-cyan-500 hover:bg-cyan-800">Log Out</Link>) : (<Link to="/login" className="btn md:me-3 glass px-8 bg-cyan-500 hover:bg-cyan-800">Login</Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;