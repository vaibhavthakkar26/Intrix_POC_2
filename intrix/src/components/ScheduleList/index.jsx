import React, { useEffect, useState } from "react";
import Group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import play from "../../assets/image/play.svg";
import pause from "../../assets/image/pause.svg";
import view from "../../assets/image/view.svg";
import pen from "../../assets/image/pen.svg";
import tab_dlt from "../../assets/image/tab_dlt.svg"
import "./ScheduleList.css";
import { getProfilingScheduleList } from "../../service/Api";
import moment from "moment";

function ScheduleList() {
  const [profilingScheduleData, setProfilingScheduleData] = useState([]);
  const [paginationNumber,setPaginationNumber] = useState();

  const getProfilingScheduleData = async (page,size) => {
    const profilingScheduleList = await getProfilingScheduleList(page, size);
    setProfilingScheduleData(profilingScheduleList.data);
  };

  useEffect(() => {
    getProfilingScheduleData(0,0);
    setPaginationNumber(1);
  }, []);


  return (
    <div class="intrix_right_side">
      <div class="dash_sec">
        <div class="titles">
          <h2>Dashboard</h2>
        </div>
        <div class="functions">
          <img src={Group54} />
          <img src={Group52} />
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
            <button id="" class="schedule_over">
              Add
            </button>

          </div>
        </div>
      </div>
      {
        profilingScheduleData.length > 0 && 
        <div class="dash_table">
          <table>
            <tr>
              <td>No</td>
              <td>Schedule Name</td>
              <td>Frequency</td>
              <td>Start Date</td>
              <td>End Date</td>
              <td>Status</td>
              <td>Action</td>
              <td>Last Run</td>
              <td>More</td>
            </tr>
            {profilingScheduleData.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.frequency}</td>
                  <td>{moment(data.startDate).format("DD-MM-yyyy")}</td>
                  <td>{moment(data.endDate).format("DD-MM-yyyy")}</td>

                  <td>
                    <button class="status_btn clr1">Active</button>
                  </td>
                  <td>
                    <ul class="dash_action">
                      <li>
                        <img src={play} alt="play" />
                      </li>
                      <li>
                        <img src={pause} alt="pause" />
                      </li>
                      <li>
                        <img src={view} alt="view" />
                      </li>
                    </ul>
                  </td>
                  <td>3 Feb 2023</td>
                  <td>
                    <ul class="dash_action">
                      <li>
                        <img src={pen} alt="edit" />
                      </li>
                      <li>
                        <img src={tab_dlt} alt="delete" />
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      }

      {
        profilingScheduleData.length === 0 && <div class="dash_table"> <h1> Data Not Found</h1></div>
      }

      <div class="dash_footer">
        <div class="dash_foot_inn">
          <div class="dash_foot_head">
            <p>Shows : </p>
          </div>
          <div class="dash_foot_nav_count">
            5 Rows{" "}
            <span>
              <i class="fa fa-angle-up"></i>
              <i class="fa fa-angle-down"></i>
            </span>
          </div>
          <div class="intrix_pagination">
            <a href="#">
              <i class="fa fa-chevron-left"></i>
            </a>
            <a className={`${paginationNumber == 1 ? "active":''}`} onClick={()=> [setPaginationNumber(1),getProfilingScheduleData(1,5)]}>1</a>
            <a className={`${paginationNumber == 2 ? "active":''}`} onClick={()=> [setPaginationNumber(2),getProfilingScheduleData(2,5)]}>
              2
            </a>
            <a className={`${paginationNumber == 3 ? "active":''}`} onClick={()=> [setPaginationNumber(3),getProfilingScheduleData(3,5)]}>3</a>
            <a className={`${paginationNumber == 4 ? "active":''}`} onClick={()=> [setPaginationNumber(4),getProfilingScheduleData(4,5)]}>4</a>
            <a>
              <i class="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleList;
