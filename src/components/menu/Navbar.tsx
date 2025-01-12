import React from "react";
import "./Navbar.css";
import { useUserRole } from "../../context/UserRoleContext";

function Navbar() {

    const { role } = useUserRole();
    return (
        <nav className="navbar">
            <div className="navbar-logo">Coupons Hub</div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                {role === "Admin" && (
                    <>
                        <a href="/manage-users">Manage Users</a>
                    </>
                )}
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;
