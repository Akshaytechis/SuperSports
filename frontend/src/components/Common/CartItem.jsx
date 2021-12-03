import React from 'react';

function CartItem() {
    return (
        <>
            <li class="row">
                <img src="img/batball.png" class="food-image" alt />
                <div class="info">
                    <div class="name">
                        Nike <br />
                        Runner Orange
                    </div>
                    <div class="info-bottom">
                        <div class="price">$ 380</div>
                        <button class="add">Add +</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CartItem;
