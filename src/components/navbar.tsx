import React, { useState } from "react";

export const NavBar = () => {
    const [activeItem, setActiveItem] = useState("home");

    return (
        <>
            <h2 className="title">Satisfactory Item Production Planner</h2>
            <div>
                <ul>
                    <li><a href="/" className={activeItem === "home" ? "active" : ""} onClick={() => setActiveItem("home")}>Home</a></li>
                    <li><a href="about" className={activeItem === "about" ? "active" : ""} onClick={() => setActiveItem("about")}>About</a></li>
                    <li><a href="feedback" className={activeItem === "feedback" ? "active" : ""} onClick={() => setActiveItem("feedback")}>Feedback</a></li>
                </ul>
            </div>
        </>
    );
}