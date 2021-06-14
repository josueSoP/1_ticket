// ////////Funcion para agregar columnas //////////////
  $(function() {
    $('#agregarMes').click(function() {
      $('table tr').each(function() {
        $(this).append($(this).find('th:first').nextAll('th:first').clone());
        $(this).append($(this).find('td:first').nextAll('td:first').clone());
      });

    });
  });
// ////////Funcion para eliminar columnas //////////////
// $(function() {
//     $('#eliminarMes').click(function() {
//         $('table tr').each(function() {
//         $(this).append($(this).find('td:first').nextAll('td:first').delete());
//         });

//     });
// });


//////////////////// AGREGAR FILAS ////////////////

//////// INGRESOS /////////////
$(document).ready(function () {
    $('#agregarIngresos').click(function () {
        var count = 1,
        primerFila= $('#tbodyIn');
        while (count-- > 0) primerFila.clone().appendTo('#tablaIngresos');
    });
});

///////// COSTOS DIRECTOS////////
$(document).ready(function () {
  $('#agregarCostosDir').click(function () {
      var count = 1,
      primerFila= $('#tbodyCoDi');
      while (count-- > 0) primerFila.clone().appendTo('#tablaCostosDir');
  });
});

//////// GATOS ADMINISTRATIVOS //////
$(document).ready(function () {
  $('#agregarGastos').click(function () {
      var count = 1,
      primerFila= $('#tbodyGa');
      while (count-- > 0) primerFila.clone().appendTo('#tablaGastos');
  });
});

/////////// RECURSOS /////////////
$(document).ready(function () {
  $('#agregarRecursos').click(function () {
      var count = 1,
      primerFila= $('#tbodyRe');
      while (count-- > 0) primerFila.clone().appendTo('#tablaRecursos');
  });
});


////////////////// ELIMINAR FILAS /////////////////////////////

//////// INGRESOS /////////////


///////// COSTOS DIRECTOS////////


//////// GATOS ADMINISTRATIVOS //////


/////////// RECURSOS /////////////