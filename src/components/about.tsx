import React from "react";

export const About = () => {
    return (
        <div className="main-view">
            <h3>About</h3>
            <p>
                This tool is supposed to be useful for the game Satisfactory.
                I have no affiliation with Coffee Stain Studios AB, I just wanted
                to make my life easier when planning things out. Hopefully other
                people find it helpful too! Currently, I have three goals:
            </p>
            <ul>
                <li>Make the site prettier</li>
                <li>Complete the data</li>
                <li>Add more functionality</li>
            </ul>
            <p>If you are interested in contributing to these goals, the project can be found on
                github <a className="keep-style" href="https://github.com/Bumbatumbarumba/satisfactory-planner" target="_blank" rel="noreferrer">HERE</a> (opens in new tab).
            </p>
            <p>
                By the way, check out Satisfactory <a className="keep-style" href="https://www.satisfactorygame.com/#about" target="_blank" rel="noreferrer">HERE</a>. It is a great game and it is being updated frequently!
            </p>
        </div>
    );
}