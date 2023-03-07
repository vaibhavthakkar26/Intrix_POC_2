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
    const [paginationNumber,setPaginationNumber] = useState();
    
    const closeHandler = () =>{
        setOpen(false);
        getConnectionHandler(0,0);
        setPaginationNumber(1);

    }

    const getConnectionHandler = async(page,size) =>{
      const connectionList = await getConnectionList(page,size);
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
      getConnectionHandler(0,0);
      setPaginationNumber(1);
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
            <button id="" onClick={()=>setOpen(true)} class="intrix_open">
              {" "}
              <i class="fa fa-plus"></i> New{" "}
            </button>
          </div>
        </div>
      </div>

      {/* <!-- table --> */}
      <div class="dash_table">
        {
          connectionData.length > 0 && 
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
        }
      </div>

      {
        connectionData.length === 0 &&  <div class="dash_table"> <h1> Data Not Found</h1></div>
      }

      <div class="dash_footer">
        <div class="dash_foot_inn">
          <div class="dash_foot_head">
            <p>Shows : </p>
          </div>
          <div class="dash_foot_nav_count">
            5 Rows <i class=""></i>
          </div>
          <div class="intrix_pagination">
            <a>
              <i class="fa fa-chevron-left"></i>
            </a>
            <a onClick={()=>[setPaginationNumber(1),getConnectionHandler(1,5)]} className={`${paginationNumber == 1 ?"active":''}`}>1</a>
            <a className={`${paginationNumber == 2 ? "active":''}`} onClick={()=> [setPaginationNumber(2),getConnectionHandler(2,5)]}>
              2
            </a>
            <a className={`${paginationNumber == 3 ?"active":''}`} onClick={()=>[setPaginationNumber(3),getConnectionHandler(3,5)]}>3</a>
            <a className={`${paginationNumber == 4 ?"active":''}`} onClick={()=>[setPaginationNumber(4),getConnectionHandler(4,5)]}>4</a>
            <a>
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
