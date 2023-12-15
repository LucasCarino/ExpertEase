import axios from "axios";

export const createService = async (data) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/services",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "{{token}}",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
