import React from "react";
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary px-3 md:px-20 sm:px-10 flex-col md:flex-row ">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none my-4 md:my-0">
          <ul className="menu menu-horizontal gap-4 text-white">
            <li className="hover:text-orange-400 cursor-pointer" href="/Order">Order</li>
            <li className="hover:text-orange-400 cursor-pointer" href="/OrderReview">Order Review</li>
            <li className="hover:text-orange-400 cursor-pointer" href="/ManageInventory">Manage Inventory</li>
            <li className="hover:text-orange-400 cursor-pointer" href="/Login">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
