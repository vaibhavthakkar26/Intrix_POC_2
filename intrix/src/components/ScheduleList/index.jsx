import React, { useEffect, useState } from "react";
import Group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import "./ScheduleList.css";
import { getProfilingScheduleList } from "../../service/Api";
import moment from "moment";

function ScheduleList() {
  const [profilingScheduleData, setProfilingScheduleData] = useState([]);

  const getProfilingScheduleData = async () => {
    const profilingScheduleList = await getProfilingScheduleList(0, 0);
    setProfilingScheduleData(profilingScheduleList.data);
  };

  useEffect(() => {
    getProfilingScheduleData();
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
            {/* <div class="search_field">
              <i class="fa fa-search"></i>
              <input name="search" placeholder="Search..." />
            </div> */}

            <button id="" class="schedule_over">
              Add
            </button>

            {/* <!-- table code  --> */}
          </div>
        </div>
      </div>

      {/* <!-- table --> */}
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
                      <img src="svg/play.svg" alt="play" />
                    </li>
                    <li>
                      <img src="svg/pause.svg" alt="pause" />
                    </li>
                    <li>
                      <img src="svg/view.svg" alt="view" />
                    </li>
                  </ul>
                </td>
                <td>3 Feb 2023</td>
                <td>
                  <ul class="dash_action">
                    <li>
                      <img src="svg/pen.svg" alt="edit" />
                    </li>
                    <li>
                      <img src="svg/tab_dlt.svg" alt="delete" />
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div class="dash_footer">
        <div class="dash_foot_inn">
          <div class="dash_foot_head">
            <p>Shows : </p>
          </div>
          <div class="dash_foot_nav_count">
            7 Rows{" "}
            <span>
              <i class="fa fa-angle-up"></i>
              <i class="fa fa-angle-down"></i>
            </span>
          </div>
          <div class="intrix_pagination">
            <a href="#">
              <i class="fa fa-chevron-left"></i>
            </a>
            <a href="#">1</a>
            <a href="#" class="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">
              <i class="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleList;
