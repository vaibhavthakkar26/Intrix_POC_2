import { ENDPOINTURL } from "../utils";
import { DELETE,get,post,put } from "./web.request";


export const createConnection = (data) =>{
    return post(`${ENDPOINTURL}/connection`,data)
}


export const testConnection = (data) =>{
    return post(`${ENDPOINTURL}/connection/test`,data)
}

export const getConnectionList = () =>{
    return get(`${ENDPOINTURL}/connection`);
}

export const getConnectionById = (id) =>{
    return get(`${ENDPOINTURL}/connection/${id}`);
}

export const connectionDataById = (data) =>{
    return put(`${ENDPOINTURL}/connection`,data);
}
