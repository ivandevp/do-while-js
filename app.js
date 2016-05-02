var mensaje = "Seleccione una opción: \n" +
	"1. Opción 1\n" + 
	"2. Opción 2\n" + 
	"3. Opción 3\n" + 
	"4. Opción 4\n" + 
	"0. Salir \n";

var condicion = true;

do {
	var opcion = parseInt(prompt(mensaje))
	if (!isNaN(opcion)) condicion = false
} while(condicion);