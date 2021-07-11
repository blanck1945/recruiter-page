import Axios from 'axios';

export const axiosSender = async (url: string, data: any, token: string) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiZWxhYnVlbG85OTAiLCJlbWFpbCI6ImVsYWJ1ZWxvOTkwQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9kODY5OGExNWYyNWU3MWY1ODc5ODMzYjgzY2QzZTk2Zj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmVsLnBuZyIsInN1YiI6ImF1dGgwfDYwZTI3NDY1YWFmYjA3MDA2OGViNTdjNCIsImlhdCI6MTYyNTYyOTc3NiwiZXhwIjoxNjI4MjIxNzc2fQ.KZ1911Hdw3J4ABlhXvnYYEXE6zlHpAS1QbgK5BHp1D9zLYO0957sDzh54C5xsk2cIco9eCksFhbYdeyAJsD67w`,
  //   },
  // };
  console.log('Setting Headers');

  try {
    const res = await Axios.post(url, data, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
