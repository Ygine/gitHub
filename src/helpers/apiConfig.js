import axios  from 'axios';
const baseUrl = process.env.REACT_APP_API;

export const Api = async ({ method = "GET",  url = "", body = {}, params = ''}) => {
  try {
    const response = await axios({
      method: method,
      url: `${baseUrl}${url}`,
      params: params,
      data: body,
    });

    return response.data;
  } catch (error) {
    console.warn(error);
    throw error;
  }
};
