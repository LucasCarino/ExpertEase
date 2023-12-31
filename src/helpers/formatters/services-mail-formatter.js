export const servicesFormatter = (services) => {
    const formattedServices = services.map((service, idx) => {
      return {
        tipo: 0,
        id: idx,
        categoria: service.category,
        clase: service.classType,
        titulo: service.name,
        imagen: service?.image?.url,
        ubicacion: service.location,
        precio: service.cost,
        duration: service.duration,
        descripcion: service.description,
        promocion: service.promotion,
        experiencia: service.experience,
        nombre: service.userName,
        frecuencia: service.frequency,
      };
    });
  
    return formattedServices;
  };
  