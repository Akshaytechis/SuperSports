import React from 'react';
import Cross from '../assets/img/cross01.svg';

function SignUp() {
    return (
        <>
            <section class="popup">
                <div class="popup-inner">
                    <img src={Cross} class="cross" alt="" />
                    <h1 class="heading"> SuperSports </h1>
                    <h2>SIGN UP</h2>
                    <div class="popup-input">
                        <input type="name" required placeholder="Name" />
                        <br />
                        <br />
                        <input type="email" required placeholder="Email-address" />
                        <br />
                        <br />
                        <input type="password" required placeholder="Password" />
                        <br /> <br />
                        <button>SIGN UP</button>
                        <br />
                        <br />
                        <p>
                            Already a Member? <a href="./login.html">sign in</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
