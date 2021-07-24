import Axios from 'axios';

export const axiosSender = async (url: string, data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await Axios.post(url, data, config);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
