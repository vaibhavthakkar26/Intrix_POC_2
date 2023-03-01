import React from "react";
import sucessImage from  "../../assets/image/success.svg"
function Success({close}) {
  return (
    <div>
      <div class="intrix_model_main intrix_model_open intrix_pop_styl">
        <div class="intrix_model_inner">
          <div class="intrix_model_wrap">
            <div class="intrix_wrap_content">
              <div class="intrix_dlt_con">
                <img src={sucessImage} title="" />
              </div>
              <div class="intrix_dlt_desc">
                <h2 class="">Successfully</h2>
                <p>You Successfully created your connection</p>
                <div class="intrix_sc_btn_foot">
                  <button type="button" class="intrix_sc_btn" onClick={()=>close()}>
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intrix_bg_overlay"></div>
    </div>
  );
}

export default Success;
