import React, { useEffect } from 'react';
import Batball from '../assets/img/batball.png';
import Football from '../assets/img/football.png';
import Hockey from '../assets/img/hocky.png';
import Badminton from '../assets/img/badminton.png';
import MainImage from '../components/Common/MainImage';

const Cart = () => {
    return (
        <>
            <MainImage />
            <section class="text">
                <ul class="food-items">
                    <li class="row">
                        <img src={Batball} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Cricket Bat
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 380</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={Football} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Football
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 1000</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={Hockey} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Hockey Stick
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 1000</div>
                                <button class="add"> - 1 +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={Badminton} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Badminton
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 300</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Cart;
