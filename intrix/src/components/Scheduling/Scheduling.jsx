import React from "react";

function Scheduling({ open , closeHandler }) {
  console.log("open",open)
  return (
    <div class={`intrix_model_main ${open ? "intrix_model_open" : ""}`}>
      <div class="intrix_model_inner" style={{width:"800px"}}>
        <div class="intrix_model_wrap">
          <div class="intrix_wrap_header">
            <h3>Scheduling</h3>
            <div class="intrix_close" onClick={() => closeHandler()}>×</div>
          </div>
          <div class="pop-up-content-wrap">
            <div class="intrix_schedule_form">
              <div class="intrix_form_text">
                <label>Schedule Name</label>
                <select id="" name="Database type" value="Database type">
                  <option value="0" class="intrix_drop">
                    Select
                  </option>
                  <option value="1" class="intrix_drop">
                    demo 1
                  </option>
                  <option value="2" class="intrix_drop">
                    demo 2
                  </option>
                  <option value="3" class="intrix_drop">
                    demo 3
                  </option>
                </select>
              </div>

              <div class="intrix_form_text">
                <label>Runtime Environment</label>
                <select id="" name="Database type" value="Database type">
                  <option value="0" class="intrix_drop">
                    Select
                  </option>
                  <option value="1" class="intrix_drop">
                    demo 1
                  </option>
                  <option value="2" class="intrix_drop">
                    demo 2
                  </option>
                  <option value="3" class="intrix_drop">
                    demo 3
                  </option>
                </select>
              </div>

              <div class="intrix_form_text">
                <label>Process Name</label>
                <select id="" name="Database type" value="Database type">
                  <option value="0" class="intrix_drop">
                    Select
                  </option>
                  <option value="1" class="intrix_drop">
                    demo 1
                  </option>
                  <option value="2" class="intrix_drop">
                    demo 2
                  </option>
                  <option value="3" class="intrix_drop">
                    demo 3
                  </option>
                </select>
              </div>

              <div class="intrix_form_text">
                <label>Select Date</label>
                <input
                  type="date"
                  id="sdate"
                  name="sdate"
                  placeholder="Start Date"
                />
                <input
                  type="date"
                  id="edate"
                  name="edate"
                  placeholder="End Date"
                />
              </div>
              <div class="intrix_form_text">
                <label>Frequency</label>
                <div>
                  <input type="radio" id="daily" name="radio" />
                  <label for="daily">Daily</label>
                </div>
                <div>
                  <input type="radio" id="weekly" name="radio" />
                  <label for="weekly">Weekly</label>
                </div>
                <div>
                  <input type="radio" id="monthly" name="radio" />
                  <label for="monthly">Monthly</label>
                </div>
                <div>
                  <input type="radio" id="yearly" name="radio" />
                  <label for="yearly">Yearly</label>
                </div>
              </div>
            </div>
            <div class="intrix_form_btn">
              <button type="submit" class="intrix_btn2">
                Cancel
              </button>
              <button type="button" class="intrix_btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduling;
