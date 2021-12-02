import React, { useState } from "react";
import ImgCover from "../../assets/img/back.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
import ImgMainBg from '../../assets/img/Mask Group 4.png'
import ImgRect from '../../assets/img/Rectangle 162.png'
 import ImgCont from '../../assets/img/EXPERIENCE THETRUE POWERBY SUPER SPORTS.png'

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      {/* <section class="main-visual">
        <div class="main-catch">
        </div>
        <img src={ImgCover} alt="" />
        {checkUser && (
          <p class="img">
            <a href="/cart">
              <img src={ImageCartLogo} alt="" />
            </a>
          </p>
        )}
      </section> */}
       <div>
            <header>
            <div class="bg-1">
                <img src={ImgMainBg} alt=""/>
                <div class="rectBlock">
                    <img src={ImgRect} alt=""/>
                    <div class="rectContent">
                        <img src={ImgCont} alt=""/>
                    </div>
                </div>
            </div>
         </header>
        </div>
    </>
  );
};

export default MainImage;
