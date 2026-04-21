
function calcular() {
    // 1. Obtener valores financieros (Ingresos y los 3 Gastos)
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let arriendo = parseFloat(document.getElementById("txtArriendo").value) || 0;
    let alimentacion = parseFloat(document.getElementById("txtAlimentacion").value) || 0;
    let varios = parseFloat(document.getElementById("txtVarios").value) || 0;

    // 2. Sumar gastos y mostrar el total
    let totalEgresos = arriendo + alimentacion + varios;
    document.getElementById("spnTotalEgresos").innerText = totalEgresos.toFixed(2);

    // 3. Calcular Disponible y Capacidad usando funciones.js
    let saldoDisponible = calcularDisponible(ingresos, totalEgresos);
    document.getElementById("spnDisponible").innerText = saldoDisponible.toFixed(2);

    let capacidadDePago = calcularCapacidadPago(saldoDisponible);
    document.getElementById("spnCapacidadPago").innerText = capacidadDePago.toFixed(2);

    // 4. Obtener datos del crédito solicitado
    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let plazoAnios = parseFloat(document.getElementById("txtPlazo").value) || 0;
    let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

    // 5. Cálculos del préstamo
    let valorInteres = calcularInteresSimple(monto, tasaInteres, plazoAnios);
    let totalPrestamo = monto + valorInteres;
    let cuotaMensual = 0;

    if (plazoAnios > 0) {
        cuotaMensual = totalPrestamo / (plazoAnios * 12);
    }

    // 6. Mostrar resultados del crédito en pantalla
    document.getElementById("spnInteresPagar").innerText = valorInteres.toFixed(2);
    document.getElementById("spnTotalPrestamo").innerText = totalPrestamo.toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = cuotaMensual.toFixed(2);

    // 7. Lógica de Aprobación o Rechazo
    let spnEstado = document.getElementById("spnEstadoCredito");
    
    if (cuotaMensual > 0 && cuotaMensual <= capacidadDePago) {
        spnEstado.innerText = "APROBADO";
        spnEstado.style.color = "green";
    } else {
        spnEstado.innerText = "RECHAZADO";
        spnEstado.style.color = "red";
    }
}