import axios from "axios";

export const updateReview = async (id, status) => {
    const data = JSON.stringify(
        {
            published: status
        }
    )
  
    let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/api/reviews/${id}`,
    headers: {
      "X-API-Key": "{{token}}",
      "content-type": "application/json"
    },
    data: data
  };

  try {
    let response = await axios.request(config);
    response = response.data
    if (response) return window.location.reload();
  } catch (error) {
    console.log("🚀 ~ file: getServices.js:17 ~ getReviews ~ error:", error);
  }
}