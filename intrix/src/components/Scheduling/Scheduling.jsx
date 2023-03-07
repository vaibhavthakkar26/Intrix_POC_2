import React, { useState } from "react";

function Scheduling({ open , closeHandler,columnData,tableName ,connectionId}) {
  const [scheduleName,setScheduleName] = useState("");
 
  const [processName,setProcessName] = useState("");
  
  const [startDate,setStartDate] = useState("");
  
  
  const [endDate,setEndDate] = useState("");
  
  const [frequency,setFrequency] = useState("");
  
  
  console.log("open",open)


  const submitHandler = () =>{
    console.log("🚀 ~ file: Scheduling.jsx:5 ~ Scheduling ~ scheduleName:", scheduleName);
    console.log("🚀 ~ file: Scheduling.jsx:7 ~ Scheduling ~ processName:", processName);
    console.log("🚀 ~ file: Scheduling.jsx:9 ~ Scheduling ~ startDate:", startDate);
    console.log("🚀 ~ file: Scheduling.jsx:12 ~ Scheduling ~ endDate:", endDate);
    console.log("🚀 ~ file: Scheduling.jsx:14 ~ Scheduling ~ frequency:", frequency);
    console.log("🚀 ~ file: Scheduling.jsx:4 ~ Scheduling ~ tableName:", tableName)
    console.log("🚀 ~ file: Scheduling.jsx:4 ~ Scheduling ~ columnData:", columnData)
    const data = {
      "connectionId":connectionId,
      "selectedData":[
        {
          "tableName":tableName,
          "column":columnData
        }
      ],
      "schedule":{
        "name":scheduleName,
        "processName":processName,
        "startDate":startDate,
        "endDate":endDate,
        "frequency":frequency
      }
    } 
    console.log("data",data);
    // const dataHandler = await 
  }
  
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
                <input type="text" value={scheduleName} onChange={(e)=>setScheduleName(e.target.value)}/>
              </div>

              

              <div class="intrix_form_text">
                <label>Process Name</label>
                <select id="" name="Database type" onChange={(e)=>setProcessName(e.target.value)} value={processName}>
                  <option value="Data Profiling" class="intrix_drop">
                      data Profiling
                  </option>
                  <option value="Data Quality" class="intrix_drop">
                      Data Quality
                  </option>
                </select>
              </div>

              <div class="intrix_form_text">
                <label>Select Date</label>
                <input
                  type="date"
                  id="sdate"
                  name="sdate"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Start Date"
                />
                <input
                  type="date"
                  id="edate"
                  name="edate"
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="End Date"
                />
              </div>
              <div class="intrix_form_text">
                <label>Frequency</label>
                <div>
                  <input type="radio" id="daily" name="radio" value="Daily" onChange={(e)=>setFrequency(e.target.value)}/>
                  <label for="daily">Daily</label>
                </div>
                <div>
                  <input type="radio" id="weekly" name="radio" value="Weekly" onChange={(e)=>setFrequency(e.target.value)}/>
                  <label for="weekly">Weekly</label>
                </div>
                <div>
                  <input type="radio" id="monthly" name="radio" value="Monthly" onChange={(e)=>setFrequency(e.target.value)}/>
                  <label for="monthly">Monthly</label>
                </div>
                <div>
                  <input type="radio" id="yearly" name="radio" value="Yearly" onChange={(e)=>setFrequency(e.target.value)}/>
                  <label for="yearly">Yearly</label>
                </div>
              </div>
            </div>
            <div class="intrix_form_btn">
              <button type="submit" class="intrix_btn2">
                Cancel
              </button>
              <button type="button" class="intrix_btn" onClick={()=>submitHandler()}>
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
