import React from 'react';
import SuperSports from '../../assets/img/SuperSports.png';
import Signup from '../../assets/img/signup.svg';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={SuperSports} alt="" />
                <div class="signup">
                    <a href="">Sign In</a>
                    <img src={Signup} alt="" />
                </div>
            </nav>
        </header>
    );
}
