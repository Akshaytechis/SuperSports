import React from 'react';
import Batball from '../assets/img/batball.png';
import Foottball from '../assets/img/football.png';
import Hocky from '../assets/img/hocky.png';
import Badminton from '../assets/img/badminton.png';

function Home() {
    return (
        <>
            <section class="text">
                <ul class="food-items">
                    <li class="row">
                        <img src={Batball} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Runner Orange
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 380</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={Foottball} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Track Suit Pink
                            </div>
                            <div class="info-bottom">
                                <div class="price">$ 1000</div>
                                <button class="add"> Add +</button>
                            </div>
                        </div>
                    </li>
                    <li class="row">
                        <img src={Hocky} class="food-image" alt />
                        <div class="info">
                            <div class="name">
                                Nike <br /> Flex Runner
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
                                Nike <br /> Black track pants{' '}
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
}

export default Home;
