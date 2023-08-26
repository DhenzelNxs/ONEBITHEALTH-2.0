function maskHeight(value = '') {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d)/, '$1.$2');
    
    
    return value;
  }

function maskWeight(value = '') {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d)(\d)$/, '$1$2.$3');
    return value
  }



  export { maskHeight, maskWeight }