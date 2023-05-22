import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLogout = () => {
    logOut()
      .then(result => { })
      .catch(error => console.error(error));
  }
  const [hover, setHover] = useState(false);
  const mouseTap = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/blog">Blogs</Link></li>
    <li><Link to="/alltoys">All Toys</Link></li>
    {
      user && <li><Link to="/mytoy">My Toys</Link></li>
    }
    {
      user && <li><Link to="/addAtoy">Add A Toy</Link></li>
    }
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
            {
              user ? (<Link onClick={userLogout} className="btn glass px-8 bg-cyan-500 hover:bg-cyan-800">Log Out</Link>) : (<Link to="/login" className="btn glass px-8 bg-cyan-500 hover:bg-cyan-800">Login</Link>)
            }
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
          user ? (<Link onClick={userLogout} className="btn md:me-3 glass hidden lg:flex px-8 bg-cyan-500 hover:bg-cyan-800">Log Out</Link>) : (<Link to="/login" className="btn md:me-3 glass hidden lg:flex px-8 bg-cyan-500 hover:bg-cyan-800">Login</Link>)
        }
        {
          user && <div
            onMouseEnter={mouseTap}
            onMouseLeave={mouseLeave}
          >
            <img src={user.photoURL} alt="" className="rounded-xl me-3 w-10" />
            {hover && (
              <div
                style={{
                  position: "absolute",
                  transform: "translateX(-30%)",
                  marginTop: "5px",
                  width: "200px"
                }}
              >
                {user.displayName}
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;