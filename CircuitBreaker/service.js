function serviceCall() {
    // Simulación de una llamada al servicio externo
    const random = Math.random();
    return new Promise((resolve, reject) => {
      if (random < 0.8) {
        resolve('Respuesta exitosa');
      } else {
        reject(new Error('Error en la llamada al servicio'));
      }
    });
  }
  
  module.exports = serviceCall;
  