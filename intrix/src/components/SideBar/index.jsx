import React from 'react'
import "./Sidebar.css";
import group from "../../assets/image/Group.svg";
import image1 from "../../assets/image/grid_view.svg";
import image2 from "../../assets/image/insert_chart.svg";
import image3 from "../../assets/image/bar_chart.svg";
import image4 from "../../assets/image/description.svg";
import image5 from "../../assets/image/layers.svg";
import image6 from "../../assets/image/settings.svg";
import image7 from "../../assets/image/logout.svg";
import { useNavigate ,Link} from "react-router-dom";
function Sidebar() {
    const navigate = useNavigate();
  return (
    <div class="intrix_left_side">
                <div class="logo" >
                    <img src={group} onClick={()=> navigate('/')}/>
                </div>

                <div class="tab">
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={image1} onClick={()=> navigate('/')}/>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Data-profile">
                                <img src={image2}/>
                            </Link>
                        </li>

                        <li>
                            <Link to="/schedule-list">
                                <img src={image3}/>
                            </Link>
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
  )
}

export default Sidebar;
