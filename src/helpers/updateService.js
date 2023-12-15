import axios from "axios";



export const updateService = async (data) => {
    let jsonData = JSON.stringify({
      "name": data.titulo,
      "description": data.descripcion,
      "duration": data.duracion,
      "frequency": data.frecuencia,
      "cost": data.precio,
      "category": data.categoria,
      "classType": data.tipoClase,
      "rating": data.rating,
      "ubication": data.ubicacion,
      "promotion": "",
      "type": 0,
      "published": data.published,
      "userEmail": localStorage.getItem('usuarioCorreo'),
      "userName": localStorage.getItem('usuarioNombre'),
    });
    
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/services/${data.id}`,
    //   url: 'http://localhost:8080/api/services/656919b0a9bcf309d1e2c280',
      headers: { 
        'Content-Type': 'application/json', 
        'X-API-Key': '{{token}}'
      },
      data : jsonData
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor.");
      } else {
        console.error("Error durante la solicitud:", error.message);
      }
    });
}

