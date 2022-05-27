import React from "react";

export const Feedback = () => {
    return (
        <div className="main-view">
            <h3>Feedback</h3>
            <p>
                If you have some feedback, suggestions, or other things you would like to share,
                then feel free to
                leave a <a className="keep-style" href="https://github.com/Bumbatumbarumba/satisfactory-planner/discussions">
                    discussion post
                </a> or an <a className="keep-style" href="https://github.com/Bumbatumbarumba/satisfactory-planner/issues">issue</a> on the repo.
            </p>
            {/* <img className="email-image" src={require("../data/email2.png")} alt="feedback email"></img> */}
            {/* <form id='contact-form'>
                <input type='text' name='user_name' placeholder='Name' />
                <br />
                <input type='email' name='user_email' placeholder='Email' />
                <br />
                <textarea name='message' placeholder='Message' />
                <br />
                <input type='submit' value='Send' />
            </form> */}
        </div>
    );
}