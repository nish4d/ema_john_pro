import React, { useContext } from "react";
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)
  // console.log(user);
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch((err) =>{
      console.log(err.message);
    })
  }


  return (
    <div>
      <div className="navbar bg-primary px-3 md:px-20 sm:px-10 flex-col md:flex-row ">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none my-4 md:my-0">
          <ul className="menu menu-horizontal gap-4 text-white">
            <Link className="hover:text-orange-400 cursor-pointer" to="/">Shop</Link>
            <Link className="hover:text-orange-400 cursor-pointer" to="/orders">Order</Link>
            <Link className="hover:text-orange-400 cursor-pointer" to="/inventory">Inventory</Link>
            <Link className="hover:text-orange-400 cursor-pointer" to="/login">Login</Link>
            <Link className="hover:text-orange-400 cursor-pointer" to="/signup">Sign Up</Link>
            {user && <span><button onClick={handleLogout} className="btn btn-outline btn-warning btn-xs">Log Out</button> </span> }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
