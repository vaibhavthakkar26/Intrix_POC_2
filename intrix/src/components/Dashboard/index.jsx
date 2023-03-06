import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import edit from "../../assets/image/pen.svg";
import deleteImage from "../../assets/image/tab_dlt.svg";
import view from "../../assets/image/view.svg";
import Connections from "../Connections";
import moment from "moment";
import { connectionDataById, getConnectionById, getConnectionList } from "../../service/Api";

function Dashboard() {
    const [open,setOpen] = useState(false);
    const [connectionData,setConnectionData] = useState([]);
    const [id,setId] = useState();
    const [connectionViewData,setConnectionViewData] = useState();
    const [editConnection,setEditConnection] = useState();
    const [editConnectionData,setEditConnectionData] = useState();
    
    const closeHandler = () =>{
        setOpen(false);
        getConnectionHandler();
    }

    const getConnectionHandler = async() =>{
      const connectionList = await getConnectionList(0,0);
      setConnectionData(connectionList.data);
    }

    const editHandler = async(id) =>{
      const connectionById = await getConnectionById(id);
      setEditConnection(id);
      setEditConnectionData(connectionById);
      setOpen(true);
    }

    const viewHandler = async (id) =>{
      const connectionById = await getConnectionById(id);
      setConnectionViewData(connectionById.data);
      setOpen(true);
    }

    useEffect(()=>{
      getConnectionHandler();
    },[]);

  return (
    <div class="intrix_right_side">
      <div class="dash_sec">
        <div class="titles">
          <h2>Connection Dashboard </h2>
        </div>
        <div class="functions">
          <img src={group54} />
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
            <h2>Connection List </h2>
          </div>
          <div class="data_add">
            {/* <div class="search_field">
              <i class="fa fa-search"></i>
              <input name="search" placeholder="Search..." />
            </div> */}
            <button id="" onClick={()=>setOpen(true)} class="intrix_open">
              {" "}
              <i class="fa fa-plus"></i> New{" "}
            </button>
          </div>
        </div>
      </div>

      {/* <!-- table --> */}
      <div class="dash_table">
        <table>
          <tr>
            <td>
              Connection Name 
            </td>
            <td>
              Type 
            </td>
            <td>
              Server Name 
            </td>
            <td>
             Port 
            </td>
            <td>
              Created Date  
            </td>
            <td> Action</td>
          </tr>
          {
            connectionData.map((res)=>{
              return (
                <tr>
                  <td>{res.name}</td>
                  <td>{res.type}</td>
                  <td>{res.host}</td>
                  <td>{res.port}</td>
                  <td>{moment(res.updatedAt).format("yyyy-MM-DD")}</td>
                  <td>
                    <ul class="dash_action">
                      <li>
                        <img src={edit} alt="edit" onClick={() =>editHandler(res.id)}/>
                      </li>
                      <li>
                        <img src={deleteImage} alt="delete" />
                      </li>
                      <li>
                        <img src={view} alt="view" onClick={() =>viewHandler(res.id)}/>
                      </li>
                    </ul>
                  </td>
          </tr>
              )
            })
          }
        </table>
      </div>

      <div class="dash_footer">
        <div class="dash_foot_inn">
          <div class="dash_foot_head">
            <p>Shows : </p>
          </div>
          <div class="dash_foot_nav_count">
            5 Rows <i class=""></i>
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
      <Connections open={open} closeHandler={closeHandler} viewData={connectionViewData} editConnectionData={editConnectionData} editConnection={editConnection}/>
    </div>
  );
}

export default Dashboard;
