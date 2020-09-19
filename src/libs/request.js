import axios from 'axios';


export const requestPatch = async (url, updateData) => {
  try {
    const response = await axios.patch(`${url}`, updateData);
    const data = response.data;

    if (data.error) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const requestDelete = async url => {
  try {
    const response = await axios.delete(`${url}`);
    const data = response.data;

    if (data.error) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const requestFile = async (url, formData) => {
  try {
    const response = await axios.post(`${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = response.data;

    if (data.error) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const requestGet = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.error) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const requestPost = async (url, body, header) => {
  try {
    const data = await axios.post(url, body || {}, {
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        'X-API-KEY': 'trustverse8160',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Methods': '*',
        ...(header || {})
      },
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};
