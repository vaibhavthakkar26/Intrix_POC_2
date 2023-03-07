import React, { useState } from "react";
import { profileScheduleHandler } from "../../service/Api";
import { useNavigate } from "react-router-dom";
import Success from "../Success";
import Error from "../Error";
function Scheduling({ open , closeHandler,columnData,tableName ,connectionId}) {
  const navigate = useNavigate();
  const [scheduleName,setScheduleName] = useState("");
  const [processName,setProcessName] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [frequency,setFrequency] = useState("");
  const [renderType,setRenderType] = useState();  
  
  console.log("open",open)


  const submitHandler = async () =>{
    const data = {
      "connectionId":parseInt(connectionId),
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
    const profileSchedule = await profileScheduleHandler(data);
    if(profileSchedule.success){
      closeHandler();
      setRenderType(1);
        setTimeout(() => {
          navigate('/schedule-list');
        }, 3000);
    }else{
      setRenderType(2);
        setTimeout(() => {
          setRenderType(0);
        }, 3000);
    }
  }

  const defaultRenderHandler = () =>{
    setRenderType(0);
  }

  const scheduleRender = () =>{
    switch(renderType){
      case 1:
        return <Success close={defaultRenderHandler}/>
      case 2:
        return <Error close={defaultRenderHandler}/>;
      default:
        return(
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
        )
    }
  }
  
  return (
    scheduleRender()
  );
}

export default Scheduling;
