import axios from "axios";
import { hiringsFormatter } from "./formatters/hirings-formatter";

export const getHiringsByEmail = async (email) => {

  debugger;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/api/hirings/email/${email}`,
    headers: {
      "X-API-Key": "{{token}}",
    },
  };

  try {
    let response = await axios.request(config);
    response = response.data;
    const formattedResponse = hiringsFormatter(response);
    if (response) return formattedResponse;
    return [];
  } catch (error) {
    console.log("🚀 ~ file: getServices.js:17 ~ getServices ~ error:", error);
  }
};
