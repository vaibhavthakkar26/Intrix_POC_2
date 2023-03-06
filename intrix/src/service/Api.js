import { ENDPOINTURL } from "../utils";
import { DELETE,get,post,put } from "./web.request";


export const createConnection = (data) =>{
    return post(`${ENDPOINTURL}/connection`,data)
}


export const testConnection = (data) =>{
    return post(`${ENDPOINTURL}/connection/test`,data)
}

export const getConnectionList = (page,size) =>{
    return get(`${ENDPOINTURL}/connection?page=${page}&size=${size}`);
}

export const getConnectionById = (id) =>{
    return get(`${ENDPOINTURL}/connection/${id}`);
}

export const getConnectionTableAndColumns = (id) =>{
    return get(`${ENDPOINTURL}/connection/table?connectionId=${id}`)
}

export const connectionDataById = (data) =>{
    return put(`${ENDPOINTURL}/connection`,data);
}
