import axios from "axios";

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.data.code === 200) {
      return {
       success : true,
       message: response.data.data
      }
    } else {
      return {
        success : false,
        message: response.data.message
       }
    }
  } catch (error) {
    // errorToast(error);
    return {
      success : false,
      message: error
     }
    return console.error(error);
  }
};

export const get = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.data.code === 200) {
      return {
       success : true,
       data: response.data.data
      }
    } else {
      return {
        success : false,
        message: response.data.message
       }
    }
  } catch (error) {
    return console.error(error);
  }
};

export const DELETE = async (id) => {
  try {
    const response = await axios.delete(id);
    if (response.data.code === 200) {
      // successToast(response.data.message);
    } else {
      // errorToast(response.data.message);
    }
    return response.data;
  } catch (error) {
    // errorToast(error);
    return console.error(error);
  }
};

export const put = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    console.log("response",response);
    if (response.data.code === 200) {
      return {
        success : true,
        data: response.data.data
       }
    } else {
      return {
        success : false,
        message: response.data.message
       }
    }
  } catch (error) {
    // errorToast(error);
    console.log("err",error);
    return {
      success : false,
      message: error
     }
  }
};
