import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [activeItem, setActiveItem] = useState("home");
    return (
        <>
            <h2 className="title">Satisfactory Item Production Planner</h2>
            <div>
                <ul className="nav-bar">
                    <li className="nav-bar-item"><Link to="/" className={activeItem === "home" ? "active" : ""} onClick={() => setActiveItem("home")}>Home</Link></li>
                    <li className="nav-bar-item"><Link to="about" className={activeItem === "about" ? "active" : ""} onClick={() => setActiveItem("about")}>About</Link></li>
                    <li className="nav-bar-item"><Link to="feedback" className={activeItem === "feedback" ? "active" : ""} onClick={() => setActiveItem("feedback")}>Feedback</Link></li>
                </ul>
            </div>
        </>
    );
}