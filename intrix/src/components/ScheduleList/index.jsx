import React from 'react'
import Group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import "./ScheduleList.css";
function ScheduleList() {
  return (
    <div class="intrix_right_side">
                <div class="dash_sec">
                    <div class="titles">
                        <h2>Dashboard</h2>
                    </div>
                    <div class="functions">
                        <img src={Group54}/>
                        <img src={Group52}/>
                        <div class="fn_name">
                            <h5>Clay Elliot</h5>
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div class="data_area">
                    <div class="data_head">
                        <div class="data_title">
                            <h2>Scheduler Overview</h2>
                        </div>
                        <div class="data_add">
                            <div class="search_field">
                                <i class="fa fa-search"></i>
                                <input name="search" placeholder="Search..."/>
                            </div>
                            
                            <button id="" class="schedule_over">Submit</button>

                            {/* <!-- table code  --> */}

                        </div>
                    </div>
                </div>

            {/* <!-- table --> */}
            <div class="dash_table">
                <table>
                    <tr>
                        <td>No <i class="fa fa-chevron-down"></i></td>
                        <td>Schedule Name <i class="fa fa-chevron-down"></i></td>
                        <td>Frequency <i class="fa fa-chevron-down"></i></td>
                        <td>Status <i class="fa fa-chevron-down"></i></td>
                        <td>Action</td>
                        <td>Last Run <i class="fa fa-chevron-down"></i></td>
                        <td>More</td>
                    </tr>   
                    
                    <tr>
                        <td>1</td>
                        <td>My Schedule</td>
                        <td>Daily</td>
                        <td>
                            <button class="status_btn clr1">Active</button>
                        </td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="svg/play.svg" alt="play"/></li>
                                <li><img src="svg/pause.svg" alt="pause"/></li>
                                <li><img src="svg/view.svg" alt="view"/></li>
                            </ul>
                        </td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="svg/pen.svg" alt="edit"/></li>
                                <li><img src="svg/tab_dlt.svg" alt="delete"/></li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="dash_footer">
                <div class="dash_foot_inn">
                    <div class="dash_foot_head">
                        <p>Shows : </p>
                    </div>
                    <div class="dash_foot_nav_count">
                        7 Rows <span><i class="fa fa-angle-up"></i><i class="fa fa-angle-down"></i></span>
                    </div>
                    <div class="intrix_pagination">
                        <a href="#"><i class="fa fa-chevron-left"></i></a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#"><i class="fa fa-chevron-right"></i></a>
                      </div>
                </div>
            </div>

            </div>
  )
}

export default ScheduleList
