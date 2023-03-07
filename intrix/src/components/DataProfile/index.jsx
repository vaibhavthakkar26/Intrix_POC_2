import React, { useEffect, useState } from "react";
import "./DataProfile.css";
import Group54 from "../../assets/image/Group 54.svg";
import Group52 from "../../assets/image/Group 52.svg";
import Scheduling from "../Scheduling/Scheduling";
import {
  getConnectionList,
  getConnectionTableAndColumns,
} from "../../service/Api";

function DataProfile() {
  const [pannelActive, setPannelActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [connectionList, setConnectionList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [connectionListData, setConnectionListData] = useState([]);
  const [updateCheck,setUpdateCheck] = useState([]);
  const [checkedState,setCheckedState] = useState(new Array(10).fill(false));
  const [checkedName,setCheckedName] = useState([]);
  const [finalName,setFinalName] = useState([]);
  const [tableName,setTableName] = useState("");

  const closeHandler = () => {
    setOpen(false);
  };

  const connectionListHandler = async () => {
    const connectionList = await getConnectionList(0, 0);
    setConnectionList(connectionList.data);
  };

  const connectionIdHandler = async () => {
    const connectionlistObject = await getConnectionTableAndColumns(selectedId);
    if (connectionlistObject.success) {
      setConnectionListData(connectionlistObject.data);
    }
  };


  useEffect(() => {
      connectionListHandler();
    }, []);
   
    const checkedHandler = (e) =>{
        const {value,checked } = e.target;
        if(checked){
            console.log("value",value);
            setCheckedName([...checkedName,{"name":value}]);
        }else{
            setCheckedName( checkedName.filter((e)=> e.name !== value));
        }
    }

    

  return (
    <>
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
              <h2>Data Profiling</h2>
            </div>
            <div class="data_add">
              <div class="select_field">
                <select
                  id=""
                  name="Database type"
                  onChange={(e) => setSelectedId(e.target.value)}
                  value={selectedId}
                >
                  {connectionList.map((res) => {
                    return (
                      <option value={res.id} class="intrix_drop">
                        {res.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                class="intrix_listob"
                onClick={() => connectionIdHandler()}
              >
                List Objects
              </button>
            </div>
          </div>
        </div>
        {connectionListData.tables && (
          <div class="data_table">
            <table>
              <tr>
                <td>Database Name</td>
                <td>Table Name </td>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {connectionListData.tables.map((res) => {
                return (
                  <tr class="data_table_row">
                    <th class="data_accordian_row">
                      {connectionListData.databaseName}
                      <i class="fa fa-minus"></i>
                    </th>
                    <th class="data_table_row_col_2" colspan="8">
                      <input type="checkbox" />
                      <button
                        class="accordian"
                        onClick={() => [setPannelActive(!pannelActive),setTableName(res.tableName)]}
                      >
                        {res.tableName}
                      </button>
                      <div
                        class="panel"
                        style={{ maxHeight: pannelActive ? "200px" : "" }}
                      >
                        <table>
                          <tr>
                            <th>Column Name</th>
                            <th>Column Type</th>
                            <th>Key</th>
                          </tr>
                          {res.columns.map((result, index) => {
                            return (
                              <tr>
                                <td>
                                  <input
                                    type="checkbox"
                                    key={`result.Field${index}`}
                                    value={result.Field}
                                    onChange={checkedHandler}
                                  />
                                  {result.Field}
                                </td>
                                <td>{result.Type}</td>
                                <td>{result.Key}</td>
                              </tr>
                            );
                          })}
                        </table>
                      </div>
                    </th>
                  </tr>
                );
              })}
            </table>

            <div class="data_btns">
              <button class="run_btn">Run</button>
              <button class="sche_btn" onClick={() => setOpen(true)}>
                Schedule
              </button>
            </div>
          </div>
        )}
        <Scheduling open={open} closeHandler={closeHandler} columnData={checkedName} tableName={tableName} connectionId ={selectedId}/>
      </div>
    </>
  );
}

export default DataProfile;
