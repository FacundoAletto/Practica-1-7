const CONVERSION_KM_MM = 1000000;
const CONVERSION_M_MM = 1000;
const DIST_TOLEDO = 2.6;
const DIST_TIENDA_TIO = 691;

let distTotalRecorrida = ((DIST_TOLEDO * CONVERSION_KM_MM) + (DIST_TIENDA_TIO * CONVERSION_M_MM));

console.log("La distancia total recorrida fue de " + distTotalRecorrida + " mm.");