import React from "react";
import "./Main.css"
import Notification from "../../assets/image/Notification.png";
import avatar from "../../assets/image/christian-buehner-DItYlc26zVI-unsplash 1.png";
import edit from "../../assets/image/pen.png";
import dele from "../../assets/image/dlt.png";
import eye from "../../assets/image/eye.png";

function Main (){
    return(
        <div class="right-side">
                <div class="dash_sec">
                    <div class="titles">
                        <h2>Dashboard</h2>
                    </div>
                    <div class="functions">
                        <img src={Notification}/>
                        <img src={avatar}/>
                        <div class="fn_name">
                            <h5>Clay Elliot</h5>
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div class="data_area">
                    <div class="data_head">
                        <div class="data_title">
                            <h2>Connection Configuration</h2>
                        </div>
                        <div class="data_add">
                            <div class="search_field">
                                <i class="fa fa-search"></i>
                                <input name="search" placeholder="Search..."/>
                            </div>
                            
                            {/* <!-- #### popup form code --> */}
                            
                            <button id="" class="intrix_open"> <i class="fa fa-plus"></i> New </button>

                            <div class="intrix_model_main">
                                <div class="intrix_model_inner">        
                                
                                    <div class="intrix_model_wrap">

                                        <div class="intrix_wrap_header">
                                            <h3>New Connection Configuration</h3>
                                            <div class="intrix_close">×</div>
                                        </div> 
                                        <div class="pop-up-content-wrap">
                                            <form  action="/action_page.php" target="_blank" method="post" class="intrix_form">
                                                <div class="intrix_form_text">
                                                    <input type="text" id="fname" name="fname" placeholder="Connection name"/>  
                                                </div>
                                                <div class="intrix_form_text">
                                                    <input type="text" id="fname" name="fname" placeholder="Server name"/>
                                                </div>
                                                <div class="intrix_form_text">
                                                    <input type="text" id="fname" name="fname" placeholder="Scheme name"/>
                                                </div>
                                                <div class="intrix_form_text">
                                                    <select id="" name="Database type" value="Database type">
                                                        <option value="0" class="intrix_drop" selected>Database type</option>
                                                        <option value="1" class="intrix_drop" >demo 1</option>
                                                        <option value="2" class="intrix_drop">demo 2</option>
                                                        <option value="3"class="intrix_drop">demo 3</option>
                                                        <option value="3" class="intrix_drop">demo 4</option>
                                                        <option value="3" class="intrix_drop" >demo 5</option>
                                                        <option value="3" class="intrix_drop" >demo 6</option>
                                                        <option value="3" class="intrix_drop">demo 7</option>
                                                        <option value="3" class="intrix_drop">demo 8</option>
                                                      </select>
                                                </div>
                                                <div class="intrix_form_textarea">
                                                    <input type="text" id="fname" name="fname" placeholder="Database name"/>
                                                </div>
                                                <div class="intrix_form_text">
                                                    <input type="text" id="fname" name="fname" placeholder="User name"/>
                                                </div>
                                                <div class="intrix_form_text">
                                                    <input type="password" id="fname" name="fname" placeholder="Password"/>
                                                </div>
                                            </form>
                                            <div class="intrix_form_btn">
                                                <button type="submit" class="intrix_btn2" >Test Connection</button>
                                                <button type="button" class="intrix_btn">Save</button>
                                            </div>
                                        </div>
                                    </div> 

                                </div>  
                                <div class="intrix_bg_overlay"></div>
                            </div> 

                            {/* <!-- ##### popup form code end ##### --> */}

                            {/* <script>
                                $(function(){
                                $(".intrix_open").on('click', function() {
                                    $(".intrix_model_main").addClass('intrix_model_open');
                                }); 
                                $(".intrix_close, .bg-overlay").click(function(){
                                    $(".intrix_model_main").removeClass('intrix_model_open');
                                });
                                });
                            </script> */}

                            {/* <!-- table code  --> */}

                        </div>
                    </div>
                </div>

            {/* <!-- table --> */}
            <div class="dash_table">
                <table>
                    <tr>
                        <td>No <i class="fa fa-chevron-down"></i></td>
                        <td>Connection Name <i class="fa fa-chevron-down"></i></td>
                        <td>Type <i class="fa fa-chevron-down"></i></td>
                        <td>Server Name <i class="fa fa-chevron-down"></i></td>
                        <td>Properties <i class="fa fa-chevron-down"></i></td>
                        <td>Created By <i class="fa fa-chevron-down"></i></td>
                        <td>Created Date <i class="fa fa-chevron-down"></i></td>
                        <td> Action</td>
                    </tr>   
                    
                    <tr>
                        <td>1</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src={edit} alt=""/></li>
                                <li><img src={dele} alt=""/></li>
                                <li><img src={eye} alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src={edit} alt=""/></li>
                                <li><img src={dele} alt=""/></li>
                                <li><img src={eye} alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src={edit} alt=""/></li>
                                <li><img src={dele} alt=""/></li>
                                <li><img src={eye} alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src={edit} alt=""/></li>
                                <li><img src={dele} alt=""/></li>
                                <li><img src={eye} alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src={edit} alt=""/></li>
                                <li><img src={dele} alt=""/></li>
                                <li><img src={eye} alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>Oracle Server</td>
                        <td>Oracle</td>
                        <td>Virtual host</td>
                        <td>Onepremise</td>
                        <td>Planet</td>
                        <td>3 Feb 2023</td>
                        <td>
                            <ul class="dash_action">
                                <li><img src="pen.png" alt=""/></li>
                                <li><img src="dlt.png" alt=""/></li>
                                <li><img src="eye.png" alt=""/></li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
            </div>
    );
}

export default Main;