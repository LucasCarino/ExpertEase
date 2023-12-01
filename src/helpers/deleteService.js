import axios from "axios";

export const deleteService = async (id) => {
    debugger;
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/services/${id}`,
      headers: {
        "X-API-Key": "{{token}}",
      },
    };
  
    try {
      let response = await axios.request(config);
      // Realiza cualquier procesamiento adicional si es necesario
      return response.data;
    } catch (error) {
      console.error("Error al eliminar servicio:", error);
      throw error;
    }
  };
  