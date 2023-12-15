import axios from "axios";

export const getReviews = async (serviceId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/api/reviews/service/${serviceId}`,
    headers: {
      "X-API-Key": "{{token}}",
    },
  };

  try {
    let response = await axios.request(config);
    response = response.data;
    console.log(response);
    if (response) return response;
    return [];
  } catch (error) {
    console.log("🚀 ~ file: getServices.js:17 ~ getReviews ~ error:", error);
  }
};
