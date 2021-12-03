import React from 'react';
import Cross from '../assets/img/cross01.svg';

function SignIn() {
    return (
        <>
            <section class="popup01">
                <div class="popup-inner01">
                    <img src={Cross} class="cross01" alt="" />
                    <h1 class="heading01"> SuperSports </h1>
                    <h2 class="head2">SIGN IN</h2>
                    <div class="popup-input01">
                        <input type="email" required placeholder="Email-address" />
                        <br />
                        <br />
                        <input type="password" required placeholder="Password" />
                        <br /> <br />
                        <button>Join Us</button>
                        <br />
                        <br />
                        <p>
                            Already a Member? <a href="./login.html">Join Us</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
