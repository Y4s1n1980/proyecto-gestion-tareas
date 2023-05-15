// Recortar una cadena a una longitud específica
function truncateString(str, length) {
    if (str.length > length) {
      return str.substring(0, length) + '...';
    }
    return str;
  }
  
  // Convertir una cadena a mayúsculas
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  // Exportar las funciones para su uso en otros archivos
  module.exports = {
    truncateString,
    toUpperCase
  };
  