// Formatear una fecha a un formato específico
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
  
  // Obtener la diferencia de días entre dos fechas
  function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Número de milisegundos en un día
    const diffInDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffInDays;
  }
  
  // Calcular la edad a partir de la fecha de nacimiento
  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
  
  // Exportar las funciones para su uso en otros archivos
  module.exports = {
    formatDate,
    getDaysDifference,
    calculateAge
  };