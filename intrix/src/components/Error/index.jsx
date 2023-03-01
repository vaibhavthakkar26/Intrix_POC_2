import React from "react";
import ErrorImage from "../../assets/image/error.svg";
function Error({close}) {
  return (
    <div>
      <div class="intrix_model_main intrix_model_open intrix_pop_styl">
        <div class="intrix_model_inner">
          <div class="intrix_model_wrap">
            <div class="intrix_wrap_content">
              {/* <!-- <h3>New Connection Configuration</h3> --> */}
              {/* <!-- <div class="intrix_close">×</div> --> */}
              <div class="intrix_dlt_con">
                <img src={ErrorImage} title="delete" />
              </div>
              <div class="intrix_dlt_desc">
                <h2 class="">Error</h2>
                <p>
                  You created your connection some problem please <br /> check
                  again{" "}
                </p>
                <div class="intrix_sc_btn_foot">
                  <button type="button" class="intrix_sc_btn" onClick={()=>close()}>
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="intrix_bg_overlay"></div>
      </div>
    </div>
  );
}

export default Error;
