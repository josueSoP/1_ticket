// //tabla 4.1 Resumen Financiero
// let ventasRF = document.getElementById('ventasRF');
// let costosRF = document.getElementById('costosRF');
// let margenRF = document.getElementById('margenRF');
// let porcenRF = document.getElementById('porcenRF');

// // tabla 4.2 Flujo de Efectivo
// let tituloFE = document.getElementById('tituloFE');
// let ingresosFE = document.getElementById('ingresosFE');
// let egresosFE = document.getElementById('egresosFE');
// let totalFE = document.getElementById('totalFE');
// let acumuladoFe = document.getElementById('acumuladoFe');
// let sumIngresosFE = document.getElementById('sumIngresosFE');
// let sumEgresosFE = document.getElementById('sumEgresosFE');
// let sumTotalFE = document.getElementById('sumTotalFE');

// // tabla 4.2 Flujo de Efectivo
function calcular() {
    try{
        var ingresosFE = parseFloat(document.getElementById("ingresosFE").value) || 0,
        egresosFE = parseFloat(document.getElementById("egresosFE").value) || 0;
            
            document.getElementById("totalFE").value = ingresosFE - egresosFE;
            
    }catch (e) {}
}

// // tabla 4.3 Estado de Resultados
// let tituloER = document.getElementById('tituloER');
// let ventasER = document.getElementById('ventasER');
// let costosER = document.getElementById('costosER');
// let margenER = document.getElementById('margenER');
// let acumuladoER = document.getElementById('acumuladorER');
// let sumVentasER = document.getElementById('sumVentasER');
// let sumCostosER = document.getElementById('sumCostosER');
// let sumMargenER = document.getElementById('sumMargenER');

// // tabla 4.4 Ingresos
// let tituloIn = document.getElementById('tituloIn');
// let conceptoIn = document.getElementById('conceptoIn');
// let totalMesIn = document.getElementById('totalMesIn');
// let sumConceptoIn = document.getElementById('sumConceptoIn');
// let sumTotalIn = document.getElementById('sumTotalIn');

// // tabla 4.5 Costos Directos
// let tituloCD = document.getElementById('tituloIn');
// let opcionCD1 = document.getElementById('opcionCD1');
// let totalCD = document.getElementById('totalCD');
// let sumConceptoCD = document.getElementById('sumConceptoCD');
// let sumTotalCD = document.getElementById('sumTotalCD');

// // tabla 4.6 Gastos Administrativos
// let tituloGA = document.getElementById('tituloGA');
// let opcionGA1 = document.getElementById('opcionGA1');
// let totalGA = document.getElementById('totalGA');
// let sumConceptoGA = document.getElementById('sumConceptoGA');
// let sumTotalGA = document.getElementById('sumTotalGA');

// // tabla 4.7 Recursos
// let nombreRe = document.getElementById('nobreRe');
// let asignacionRe = document.getElementById('asignacionRe');
// let totalAsigRe = document.getElementById('totalAsigRe');
// let costosRe = document.getElementById('costosRe');
// let totalCostosRe = document.getElementById('totalCostosRe');
// let sumRolRe = document.getElementById('sumRolRe');
// let sumTotalRe = document.getElementById('sumTotalRe');

// // tabla 4.8 Costos
// let tituloCo = document.getElementById('tituloCo');
// let costosCo = document.getElementById('costosCo');
// let totalCo = document.getElementById('totalCo');
// let sumRolCo = document.getElementById('sumRolCo');
// let sumTotalCo = document.getElementById('sumTotalCo');

// // tabla 4.9 Resumen Costos Recursos
// let tituloResumen = document.getElementById('tituloResumen');
// let costosResumen = document.getElementById('costosResumen');
// let totalResumen = document.getElementById('totalResumen');
// let sumRolResumen = document.getElementById('sumRolResumen');
// let sumTotalResumen = document.getElementById('sumTotalResumen');

// // tabla Proyecto
// let mes = document.getElementById('mes');

