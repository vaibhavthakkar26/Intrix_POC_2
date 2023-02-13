import React from "react";
import "./SideBar.css";
import image1 from "../../assets/image/grid_view_FILL1_wght400_GRAD0_opsz48 1.png";
import image2 from "../../assets/image/insert_chart_FILL0_wght400_GRAD0_opsz48 1.png"
import image3 from "../../assets/image/bar_chart_FILL0_wght400_GRAD0_opsz48 1.png"
import image4 from "../../assets/image/description_FILL0_wght400_GRAD0_opsz48 1.png"
import image5 from "../../assets/image/layers_FILL0_wght400_GRAD0_opsz48 1.png"
import image6 from "../../assets/image/settings_FILL0_wght400_GRAD0_opsz48 1.png"
import image7 from "../../assets/image/logout.png"
import Logo from "../../assets/image/Logo.png"
function SideBar (){
    return(
        <>
        <div class="left-side">
                <div class="logo">
                    <img src={Logo}/>
                </div>

                <div class="tab">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={image1}/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src={image2}/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src={image3}/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src={image4}/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src={image5}/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src={image6}/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="logout_btn">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={image7}/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default SideBar;