// DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ user }) => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                {user ? (
                    <>
                        <Link to="/logout">Logout</Link>
                        <Link to="/favourite">Favourite</Link>
                    </>
                ) : (
                    <>
                        <Link to="/registration">Registration</Link>
                        <Link to="/authorization">Authorization</Link>
                        <Link to="/recipes">Recipes</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default DropdownMenu;
