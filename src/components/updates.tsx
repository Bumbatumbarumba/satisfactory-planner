import React from "react";

export const Updates = () => {
    return (
        <div className="main-view">
            <h3>Updates</h3>
            <h4>Future (in no particular order)</h4>
            <ul>
                <li>Toggle colours of machine in tree.</li>
                <li>Add recipe type - toggle between alternative recipes.</li>
                <li>Figure out good way to set desired amount of output.</li>
                <li>Reverse tree display; maybe?</li>
                <li>Toggle elements to show/hide items.</li>
                <li>Adjust quantities in both directions;
                    how much would it take to make X of Y?
                    vs How much Y can I make given X of a
                    subcomponent of Y at any point in the
                    tree?
                </li>
                <li>How many machines are required?</li>
                <li>How much power is consumed?</li>
                <li>Consider playing with the font colours a bit more;
                    different shades of yellow for subtexts/subheadings,
                    etc.
                </li>
                <li>Import data from Docs.json in game file.</li>
            </ul>
            <h4>Latest</h4>
            <ul>
            </ul>
        </div>
    );
}