var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 8;
	material = 2;
	var length = 3;

	hipercube(d.getLocation(), length , material );
	//cube(d.getLocation(), size , material );

	//centercube(d.getLocation(), size, 91);
	//doorscube(d.getLocation(), size,material);
	//trapdoorscube(d.getLocation(), size);
}

//Si desarrollamos el hipercubo, vamos a tener unos problemas evidentes de posicion de las puertas y de las plantillas.
//Este hecho se debe al problema de paridad
//Un problema de paridad ocurre cuando el comportamiento de un programa es diferente 
//cuando el numero de una variables es par o impar. En este caso el tamaño de los cubos supone un problema de paridad en posicionamiento

//Problema de posicionamiento en el centro

/*
	En estos dibujos podemos observar cual es el centro realizado cuando desarrollamos el desplazamiento de centrado

			size = 5								size = 6

	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	| X	|	|	|					|	|	| X	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    										|	|	|	|	|	|	|
   											 --- --- --- --- --- ---


	PROBLEMA DE CREACION DE PUERTAS

	 --- --- xxx --- ---					 --- --- xxx --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    x	|	| X	|	|	x					x	|	| X	|	|	|	x
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- xxx --- ---					 --- --- --- --- --- ---
    										|	|	|	|	|	|	|
   											 --- --- xxx --- --- ---

	PROBLEMA DE CREACION DE PUERTAS DOBLES

	 --- --- xxx xxx ---					 --- --- xxx xxx --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    x	|	|	|	|	|					x	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    x	|	| X	|	|	x					x	|	| X	|	|	|	x
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	x					|	|	|	|	|	|	x
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- xxx xxx --- ---					 --- --- --- --- --- ---
    										|	|	|	|	|	|	|
   											 --- xxx xxx --- --- ---
   	CONCLUSION: 

   	Cuando el tamaño del cubo es un numero impar
   		-	El centro es exacto,
   		-	Las puertas simples se realizan correctamente
   		-	Las puertas dobles se quedan desplazadas del centro. Es imposible hacer una simetria con numero impar y puertas dobles
   	
   	Cuando el tamaño del cubo es un numero par
   		-	El centro es inexacto
   		-	Las puertas simples las ubica mal
   		-	Las puertas dobles tambien, pero esta es la solucion correcta

*/

//	El ejercicio consiste en realizar dos metodos diferentes para realizar correctamente los cubos con un numero par o impar de bloques
//	Para ello crearemos dentro de las funciones de centrado, creacion de puertas y creacion de trampillas,
//	Un metodo para solucionar dos opciones distintas en funcion de la variables size con un condicional.

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

function cube( loc, size, material){

	var f = new Drone(  loc  );
	f.box(material, size, 1, size);

	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.down();
	};
	f.box(material, size, 1, size);
	//centercube(loc, size, 91);
	doorscube(loc, size,material);
	trapdoorscube(loc, size);
}


//-----------------------------------------------------------//
//-------------------Funciones a crear-----------------------//
//-----------------------------------------------------------//


//-------------------CENTRADO-----------------------//
//	Primero nos hemos de fijar en las opciones de centrado. 
//	En este ejercicio desarrollaremos la funcion para que el centro del cubo se situe justo en el centro para un numero impar.
//	Pero en el caso de ser un numero impar lo que vamos a hacer es desplazarnos 4 cubos para rellenar los cuatro centros
/*	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	| X	|	|	|					|	|	| X	| X	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	| X	| X	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    										|	|	|	|	|	|	|
   											 --- --- --- --- --- ---

   	La condicion de paridad se establece realizando la funcion modulo % dividido entre 2. 
*/

function centercube(loc, size, material){

	var f = new Drone(  loc  );
	//Fijarse bien en cual es el valor que obtenemos de una division por dos. 

	echo(size/2);
	//No hay decimales a la hora de desplazar bloques, pero redondea hacia arriba. 
	//Esto quiere decir que si nos sale un valor de 2.5, se desplazara 3 en lugar de 2... y esto es un problema. Redondea hacia arriba y nosotros necesitamos que redondee hacia abajo
	//	https://www.w3schools.com/jsref/jsref_round.asp
	
	//	Hay que usar una funcion llamada Math.floor
	// 	https://www.w3schools.com/jsref/jsref_floor.asp
	distance = Math.floor(size/2);

	if(size%2 == 1){
		f.fwd(	distance ).right(	distance	).down( 	distance 	).box(material);
	}else{
		//Posicion en el centro, hay que corregir en 1 bloque, ya que si nos desplazamos dos, nos pasaremos del punto inicial del centro
		f.fwd(distance-1).right(distance-1).down(distance-1);
		for (var i = 0; i < 4; i++) {
			//Creacion de bloque y giro
			f.box(material).fwd(1).turn();
		};
	}
}

//-------------------PUERTAS-----------------------//
// Para la funcion de las puertas ahora haremos una puerta si es un numero impar y puertas dobles para un numero par
function doorscube(loc, size,material){

	var f = new Drone(  loc  );
	distance = Math.floor(size/2);

	//	size%2 == 1 significa que el numero es impar

	if(size%2 == 1){
		f.fwd(	distance ).right(	distance	).down( 	distance 	).box(material);
		
		for (var i = 0; i < 4; i++) {
			echo ("Direction: "+f.dir);
			
			f.fwd(	distance ).door().back(	distance );
			f.turn();
		}

	}else{
		//Posicion en el centro, hay que corregir en 1 bloque, ya que si nos desplazamos dos, nos pasaremos del punto inicial del centro
		f.fwd(distance-1).right(distance-1).down(distance-1);
		for (var i = 0; i < 4; i++) {
			
			//Nos desplazamos hacia delante para crear una puerta doble, volvemos al inicio , nos desplazamos uno y giramos
			f.fwd(distance).door2().back(distance);
			f.fwd(1).turn();
		};
	}

}


/*	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	| X	|	|	|					|	|	| X	| X	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	| X	| X	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    |	|	|	|	|	|					|	|	|	|	|	|	|
	 --- --- --- --- ---					 --- --- --- --- --- ---
    										|	|	|	|	|	|	|
   											 --- --- --- --- --- ---

   	La condicion de paridad se establece realizando la funcion modulo % dividido entre 2. 
*/

//-------------------TRAMPILLAS-----------------------//

/*
	Para crear trampillas dobles necesitaremos de una extension del Drone que se llama trapdoor2.
	En caso de no tener una funcion trapdoor2, habra que crearla en funcion de la direccion. Preguntar antes al profesor.

*/
function trapdoorscube(loc, size,material){

	var f = new Drone(  loc  );
	distance = Math.floor(size/2);

	f.fwd(	distance ).right(	distance	).down( 	distance 	);

	if(size%2 == 1){
		f.up(	distance ).box(96).down( 	distance*2 	).box(96);
		
	}else{
		f.up(	distance ).box(96).down( 	distance*2 -1	).box(96);
		//f.up(	distance ).trapdoor2().down( 	distance*2 	).box(96);
	}

}


/*
	Ahora que hemos mejorado nuestro escenario.
	¿Hay alguna cosa que se podria mejorar?
		Se pueden hacer los accesos mas grandes para poder pasar. Por ejemplo en las puertas simples
		Se podrian hacer otros tipos de accesos mas elaborados para dejar mas espacio.
		¿Y si conectamos puertas que se abren mediante pistones? :)

*/