import axios from "axios";

export const getReviewsByEmail = async (email) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/api/reviews/email/${email}`,
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
