// Lógica de funciones del negocio
function calcularDisponible(ingresos, egresos) {
    let valorDisponible = 0;
    valorDisponible = ingresos - egresos;
    return valorDisponible;
}

function calcularCapacidadPago(valorDisponible) {
    let resultado;
    resultado = valorDisponible / 2;
    return resultado;
}

// Función adicional para lógica de intereses
function calcularInteresSimple(monto, tasa, plazo) {
    return monto * (tasa / 100) * plazo;
}