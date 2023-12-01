import axios from "axios";

export const postReview = async (name, comment, rating, serviceId) => {
  let data = JSON.stringify({
    text: comment,
    rating: rating,
    service: serviceId,
    published: "undefined",
    name: name,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/reviews/',
    headers: { 
      'Content-Type': 'application/json', 
      'X-API-Key': '{{token}}'
    },
    data : data
  };

  try {
    let response = await axios.request(config);
    response = response.data;
    if (response) return response;
    return [];
  } catch (error) {
    console.log("🚀 ~ file: getServices.js:17 ~ getServices ~ error:", error);
  }
};
