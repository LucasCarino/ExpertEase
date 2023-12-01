import axios from "axios";
import { servicesFormatter } from "./formatters/services-formatter";

export const getServices = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/services",
    headers: {
      "X-API-Key": "{{token}}",
    },
  };

  try {
    let response = await axios.request(config);
    response = response.data;
    const formattedResponse = servicesFormatter(response);
    if (response) return formattedResponse;
    return [];
  } catch (error) {
    console.log("🚀 ~ file: getServices.js:17 ~ getServices ~ error:", error);
  }
};
