import React, { useEffect, useState } from "react";
import "./DataProfile.css";
import Group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import Scheduling from "../Scheduling/Scheduling";
import { getConnectionList, getConnectionTableAndColumns } from "../../service/Api";

function DataProfile() {
    const [pannelActive,setPannelActive] = useState(false);
    const [open,setOpen] = useState(false);
    const [connectionList,setConnectionList] = useState([]);
    const [selectedId,setSelectedId] = useState("");
    const [connectionListData,setConnectionListData] = useState([]);

    const closeHandler = () =>{
        setOpen(false);
    }

    const connectionListHandler = async () =>{
        const connectionList = await getConnectionList(0,0);
        setConnectionList(connectionList.data);
    }

    const connectionIdHandler = async () => {
        const connectionlistObject =  await getConnectionTableAndColumns(selectedId);
        console.log("🚀 ~ file: index.jsx:26 ~ connectionIdHandler ~ connectionlistObject:", connectionlistObject)
        // setConnectionListData();
    }


    useEffect(() => {
        connectionListHandler()
    },[])

  return (
   <>
        <div class="intrix_right_side">
            <div class="dash_sec">
                <div class="titles">
                    <h2>Dashboard</h2>
                </div>
                <div class="functions">
                    <img src={Group54}/>
                    <img src={Group52}/>
                    <div class="fn_name">
                        <h5>Clay Elliot</h5>
                        <i class="fa fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div class="data_area">
                    <div class="data_head">
                        <div class="data_title">
                            <h2>Data Profiling</h2>
                        </div>
                        <div class="data_add">
                            <div class="select_field">
                                <select id="" name="Database type" onChange={(e)=>setSelectedId(e.target.value)} value={selectedId}>
                                    {
                                        connectionList.map((res) =>{
                                            return(
                                                <option value={res.id} class="intrix_drop" >{res.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            
                            {/* <!-- #### popup form code --> */}
                            
                            <button class="intrix_listob" onClick={() =>connectionIdHandler()}>List Objects</button>

                            {/* <!-- ##### popup form code end ##### --> */}

                            {/* <!-- table code  --> */}

                        </div>
                    </div>
            </div>
            <div class="data_table">
                <table>
                    <tr>
                        <td>Database Name</td>
                        <td>Table Name <i class="fa fa-chevron-down"></i></td>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>   
                    
                    <tr class="data_table_row">
                        <th class="data_accordian_row">Database A <i class="fa fa-minus" ></i></th>
                        <th class="data_table_row_col_2" colspan="8"><input type="checkbox"/> 
                            <button class="data_prevbtn">Data Preview</button>
                            <button class="accordian" onClick={()=>setPannelActive(!pannelActive)}>Table A </button>
                            <div class="panel" style={{maxHeight: pannelActive ? "141px":""}}>
                                <table>
                                <tr>
                                    <th>Column Name</th>
                                    <th>Column Type</th>
                                    <th>Key</th>
                                </tr>
    
                                <tr>
                                    <td><input type="checkbox"/>Col A</td>
                                    <td>Integer</td>
                                    <td>Primary Key</td>
                                </tr>
    
                                <tr>
                                    <td><input type="checkbox"/>Col B</td>
                                    <td>String</td>
                                    <td>Foreign Key</td>
                                </tr>
    
                                <tr>
                                    <td><input type="checkbox"/>Col C</td>
                                    <td>BigInt</td>
                                    <td>Composite Key</td>
                                    <td></td>
                                </tr>
                                </table>
                            </div>
                    </th>
                    </tr>
                    

                    <tr>
                        <td>  </td>
                        <th><input type="checkbox"/> Table B <i class="fa fa-plus"></i></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <th><input type="checkbox"/> Table C <i class="fa fa-plus"></i></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <th><input type="checkbox"/> Table D <i class="fa fa-plus"></i></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        </td>
                    </tr>
                </table>

                <div class="data_btns">
                    <button class="run_btn">Run</button>
                    <button class="sche_btn" onClick={()=>setOpen(true)}>Schedule</button>
            </div>
            <Scheduling open={open} closeHandler={closeHandler}/>
            

            {/* <!-- <div class="dash_footer">
                <div class="dash_foot_inn">
                    <div class="dash_foot_head">
                        <p>Shows : </p>
                    </div>
                    <div class="dash_foot_nav_count">
                        5 Rows <i class=""></i>
                    </div>
                    <div class="intrix_pagination">
                        <a href="#"><i class="fa fa-chevron-left"></i></a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#"><i class="fa fa-chevron-right"></i></a>
                      </div>
                </div>
            </div> --> */}

            </div>
        </div>
   </>
  );
}

export default DataProfile;
