import Axios from 'axios';

export const axiosSender = async (url: string, data: any) => {
  try {
    await Axios({
      method: 'POST',
      url,
      data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
