import React, { useEffect, useState } from "react";
import {
  connectionDataById,
  createConnection,
  testConnection,
} from "../../service/Api";
import Error from "../Error";
import Success from "../Success";
import "./Connections.css";
function Connections({
  open,
  closeHandler,
  viewData,
  editConnection,
  editConnectionData,
}) {
  const [connection, setConnection] = useState("");
  const [serverName, setServerName] = useState("");
  const [port, setPort] = useState("");
  const [dataBaseType, setDataBaseType] = useState("");
  const [dataBaseName, setDataBaseName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [renderType, setRenderType] = useState();

  const data = {
    name: connection,
    database: dataBaseName,
    host: serverName,
    port: port,
    password: password,
    user: userName,
    type: dataBaseType,
  };

  const defaultRenderHandler = () =>{
    setRenderType(0);
  }

  const viewDataHandler = () => {
    setConnection(viewData.name);
    setDataBaseName(viewData.database);
    setServerName(viewData.host);
    setPort(viewData.port);
    setPassword(viewData.password);
    setUserName(viewData.user);
    setDataBaseType(viewData.type);
    setPassword(viewData.password);
  };

  const dataClear = () => {
    setConnection("");
    setDataBaseName("");
    setServerName("");
    setPort("");
    setPassword("");
    setUserName("");
    setDataBaseType("");
    setPassword("");
  };

  const dataHandler = async () => {
    if (editConnectionData) {
      const editDataHandler = await connectionDataById({
        ...data,
        id: editConnection,
      });
      console.log("090909",editDataHandler);
      if (editDataHandler.success) {
        dataClear();
        closeHandler();
        setRenderType(1);
        setTimeout(() => {
          setRenderType(0);
        }, 3000);
      } else {
        setRenderType(2);
        setTimeout(() => {
          setRenderType(0);
        }, 3000);
      }
    } else {
      const createConnectionData = await createConnection(data);
      if (createConnectionData.success) {
        dataClear();
        closeHandler();
        setRenderType(1);
        setTimeout(() => {
          setRenderType(0);
        }, 3000);
      } else {
        setRenderType(2);
        setTimeout(() => {
          setRenderType(0);
        }, 3000);
      }
    }
  };

  const testConnectionHandler = async () => {
    const testConnectionData = await testConnection(data);
    console.log("testConnectionData",testConnectionData);
    if (testConnectionData.success) {
      setRenderType(1);
      setTimeout(() => {
        setRenderType(0);
      }, 3000);
    } else {
      setRenderType(2);
      setTimeout(() => {
        setRenderType(0);
      }, 3000);
    }
  };

  const editHandler = async (id, data) => {
    setConnection(data.data.name);
    setDataBaseName(data.data.database);
    setServerName(data.data.host);
    setPort(data.data.port);
    setPassword(data.data.password);
    setUserName(data.data.user);
    setDataBaseType(data.data.type);
    setPassword(data.data.password);
  };

  useEffect(() => {
    if (viewData) {
      viewDataHandler();
    }
    if (editConnectionData) {
      editHandler(editConnection, editConnectionData);
    }
  }, [viewData, editConnectionData]);

  const renderHandler = () => {
    switch (renderType) {
      case 1:
        return <Success close={defaultRenderHandler}/>;
      case 2:
        return <Error close={defaultRenderHandler}/>;
      default:
        return (
          <div class={`intrix_model_main ${open ? "intrix_model_open" : ""}`}>
            <div class="intrix_model_inner">
              <div class="intrix_model_wrap">
                <div class="intrix_wrap_header">
                  <h3> {connection ? connection : `New Connection Configuration`} </h3>
                  <div
                    class="intrix_close"
                    onClick={() => [closeHandler(), dataClear()]}
                  >
                    ×
                  </div>
                </div>
                <div class="pop-up-content-wrap">
                  <div class="intrix_form">
                    <div class="intrix_form_text">
                      <input
                        type="text"
                        value={connection}
                        onChange={(e) => setConnection(e.target.value)}
                        placeholder="Connection name"
                      />
                    </div>
                    <div class="intrix_form_text">
                      <input
                        type="text"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        placeholder="Server name"
                      />
                    </div>
                    <div class="intrix_form_text">
                      <input
                        value={port}
                        type="number"
                        onChange={(e) => setPort(e.target.value)}
                        placeholder="Port"
                      />
                    </div>
                    <div class="intrix_form_text">
                      <select
                        id=""
                        name="Database type"
                        onChange={(e) => setDataBaseType(e.target.value)}
                        value={dataBaseType}
                      >
                        <option value="0" class="intrix_drop">
                          Database type
                        </option>
                        <option value="MySql" class="intrix_drop">
                          MySql
                        </option>
                      </select>
                    </div>
                    <div class="intrix_form_textarea">
                      <input
                        type="text"
                        onChange={(e) => setDataBaseName(e.target.value)}
                        placeholder="Database name"
                        value={dataBaseName}
                      />
                    </div>
                    <div class="intrix_form_text">
                      <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="User name"
                        value={userName}
                      />
                    </div>
                    <div class="intrix_form_text">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  {viewData ? (
                    ""
                  ) : (
                    <div class="intrix_form_btn">
                      <button
                        class="intrix_btn2"
                        onClick={() => testConnectionHandler()}
                      >
                        Test Connection
                      </button>
                      <button
                        type="button"
                        onClick={() => dataHandler()}
                        class="intrix_btn"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="intrix_bg_overlay"></div>
          </div>
        );
    }
  };

  return (
    // <div class={`intrix_model_main ${open ? 'intrix_model_open' : ''}`}>
    //   <div class="intrix_model_inner">
    //     <div class="intrix_model_wrap">
    //       <div class="intrix_wrap_header">
    //         <h3>New Connection Configuration</h3>
    //         <div class="intrix_close" onClick={()=>[closeHandler(),dataClear()]}>×</div>
    //       </div>
    //       <div class="pop-up-content-wrap">
    //         <div
    //           class="intrix_form"
    //         >
    //           <div class="intrix_form_text">
    //             <input
    //               type="text"
    //               value={connection}
    //               onChange={(e)=>setConnection(e.target.value)}
    //               placeholder="Connection name"
    //             />
    //           </div>
    //           <div class="intrix_form_text">
    //             <input
    //               type="text"
    //               value={serverName}
    //               onChange={(e)=>setServerName(e.target.value)}
    //               placeholder="Server name"
    //             />
    //           </div>
    //           <div class="intrix_form_text">
    //             <input
    //               value={port}
    //               type="number"
    //               onChange={(e)=>setPort(e.target.value)}
    //               placeholder="Port"
    //             />
    //           </div>
    //           <div class="intrix_form_text">
    //             <select id="" name="Database type" onChange={(e)=>setDataBaseType(e.target.value)} value={dataBaseType}>
    //               <option value="0" class="intrix_drop">
    //                 Database type
    //               </option>
    //               <option value="MySql" class="intrix_drop">
    //                     MySql
    //               </option>
    //              </select>
    //           </div>
    //           <div class="intrix_form_textarea">
    //             <input
    //               type="text"
    //               onChange={(e)=>setDataBaseName(e.target.value)}
    //               placeholder="Database name"
    //               value={dataBaseName}
    //             />
    //           </div>
    //           <div class="intrix_form_text">
    //             <input
    //               type="text"
    //               onChange={(e)=>setUserName(e.target.value)}
    //               placeholder="User name"
    //               value={userName}
    //             />
    //           </div>
    //           <div class="intrix_form_text">
    //             <input
    //               type="password"
    //               value={password}
    //               onChange={(e)=>setPassword(e.target.value)}
    //               placeholder="Password"
    //             />
    //           </div>
    //         </div>
    //         {
    //           viewData ?  '' :
    //           <div class="intrix_form_btn">
    //             <button  class="intrix_btn2" onClick={()=>testConnectionHandler()}>
    //               Test Connection
    //             </button>
    //             <button type="button"  onClick={()=>dataHandler()} class="intrix_btn">
    //               Save
    //             </button>
    //           </div>
    //         }
    //       </div>
    //     </div>
    //   </div>
    //   <div class="intrix_bg_overlay"></div>
    // </div>
    renderHandler()
  );
}

export default Connections;
