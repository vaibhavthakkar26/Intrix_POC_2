import React from 'react'
import "./Login.css";
import Logo from "../../assets/image/INTRIX LOGO.svg";
import group65 from "../../assets/image/Group 65.svg";

function Login() {
  return (
    <div class="intrix_login_bg">
    <div class="intrix_login_form">
        <div class="intrix_header">
            <img src={Logo} alt="logo"/>
        </div>
        <div class="intrix_form_body">
            <div class="intrix_form_head">
                <h2>Welcome back</h2>
            </div>
            <div class="intrix_form_inn">
            {/* <form method="post" action="" > */}
                <label for="email">Email</label>
                <input type="email" id="" name="email" placeholder="Enter your email" class="intrix_form_input"/>
                
                <label for="pwd">Password</label>
                <input type="password" id="pwd" name="pwd" placeholder="Enter password" class="intrix_form_input"/>
                
                <div class="intrix_form_foot">
                    <div class="element_col_second">
                        <input type="checkbox" id="remem" name="remem" value=""/>
                        <label for="remem"> Remember me</label>
                    </div>
                    <div class="element_col_second">
                        <a href="#">Forget Password?</a>
                    </div>
                </div>

                <input type="submit" value="Sign In" class="intrix_form_btn2"/>
            {/* </form> */}
        </div>
        </div>
        <div class="intrix_foot">
            <p>Don't have an account <a href="#">Sign Up</a></p>
        </div>
    </div>
    <div class="intrix_login_logo">
        <img src={group65} alt=""/>
    </div>
</div>
  )
}

export default Login;
