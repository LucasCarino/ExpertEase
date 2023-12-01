import axios from "axios";

export const postHiring = async (phone, time, email, comment, serviceId) => {
  let data = JSON.stringify({
    service: serviceId,
    contactPhone: phone,
    contactEmail: email,
    contactShedule: time,
    messageToProvider: comment,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/hirings/",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "{{token}}",
    },
    data: data,
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
