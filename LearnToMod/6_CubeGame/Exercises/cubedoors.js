var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 15;
	material = 2;
	var length = 3;

	//hipercube(d.getLocation(), length , material );
	//cube(d.getLocation(), size , material );

	//centercube(d.getLocation(), size , material );
	//doorscube(d.getLocation(), size , material );
	//trapdoorscube(d.getLocation(), size , material );
}

function cubeline( loc,length, material){
	var g = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		cube(g.getLocation(), size, material );
		g.fwd(size);
	};
}

function squareline( loc,length, material){
	var h = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		cubeline(h.getLocation(), length, material );
		h.right(size);
	};
}

function hipercube(loc, length, material){
	var k = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		squareline(k.getLocation(), length, material );
		k.up(size);
	};
}

function echodir(dir){
	if(dir == 0){
		echo ("Direction 0 : East ");
	}else if(dir == 1){
		echo ("Direction: 1 : South ");
	}else if(dir == 2){
		echo ("Direction: 2 : West ");
	}else if(dir == 3){
		echo ("Direction: 3 : North ");
	}
}

//-----------------------------------------------------------//
//-------------------Funciones a crear------------------------//
//-----------------------------------------------------------//

//Con la funcion centercube tenemos que desplazarnos hasta el centro exacto de nuestro cubo y crear una calabaza
//Para ello, debemos navegar desde una de las esquinas, hacia delante, derecha y abajo

function centercube(loc, size, material){

	var f = new Drone(  loc  );
	//Escribe en una linea los movimientos para dejar una calabaza en el centro del cubo
	//...//

}

//La funcion doorscube debe de crear las puertas laterales del cubo.
//Para ello hay que utilizar la funcion del drone door2().
//Door2 crea dos puertas contiguas para dejar mas espacio 
function doorscube(loc, size,material){

	var f = new Drone(  loc  );
	//Realiza el mismo movimiento para disponer la referencia en el centro del cubo
	//...//
	
	//Ahora vamos a movernos 4 veces para crear las puertas.
	//Los movimientos se haran desde el centro. Ir hacia delante, crear puerta, ir hacia atras

	for (var i = 0; i < 4; i++) {
		//Es necesario prestar atencion a la funcion dir
		//Este --> 0
		//Sur --> 1
		//Oeste --> 2
		//Norte --> 3
		echodir(f.dir);

		//Crear las puertas con una sola instruccion
		//...//
		
		//Cuando hayamos creado las puertas, veremos que hay dos que no se crean bien, 
		//esto es porque hay que hacer una correccion con la direccion
		// Hay que utilizar la funcion DroneDir.js para conocer cual es la direccion de las puertas que faltan y corregir el movimiento

		if (f.dir == 1 || f.dir == 3 ){
			//No hacen puerta
			//...//

			//f.fwd(size/2 -1 ).door2().back(size/2 -1) 
		}else{
			//Si hacen puerta
			//...//

			//f.fwd(size/2).door2().back(size/2)
		}
		f.turn()
	};
}

//Una vez realizado todo esto, nos falta crear las trampillas para movernos arriba y abajo
function trapdoorscube(loc, size,material){

	var f = new Drone(  loc  );

	//Realiza el mismo movimiento para disponer la referencia en el centro del cubo
	//...//

	//Desde esta referencia ahora hay que moverse abajo para crear una trampilla desde el centro y volver
	//...//

	//Ahora de nuevo hay que moverse hacia arriba para crear la trampilla superior
	//...//

}


function cube( loc, size, material){

	var f = new Drone(  loc  );
	f.box(material, size, 1, size);

	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.up();
	};
	f.box(material, size, 1, size);

	//Ahora hay que añadir en esta funcion las 3 nuevas funciones que hemos hecho anteriormente
	//Una para establecer el centro,
	//...//

	//Otra para crear las puertas
	//...//

	//Y la ultima para crear las trampillas
	//...//


}

/*Cuando hayamos conseguido hacer un cubo con puertas y trampillas, 
//despues crearemos el hipercubo para poder navegar entre uno y otro.



//En este momento toca depurar los pequeños fallos que ocurren para acceder a un lado y a otro de las salas.

//Pistas: 
	//¿ Las puertas estan bien en todas las direcciones? 
	//¿ El tamanio de los cubos afecta a el centro del cubo ?
	//¿ Podemos ajustar las puertas para poder ir de un lado a otro ?
	//¿ Afecta el valor del tamaño del cubo si es par o  impar?

*/