var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 14;
	material = 169;
	var length = 3;

	hipercube(d.getLocation(), length , material );
	
}

function cube( loc, size, material){

	var f = new Drone(  loc  );

	//Creacion del suelo
	f.box(material, size, 1, size);

	//Sustituir el bucle en una unica instruccion y un movimiento
	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.up();
	};

	//Creacion del techo
	f.box(material, size, 1, size);
}

function cubeline( loc,length, material){
	var g = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		cube(g.getLocation(), size, material );
	
		//Ejecutar el movimiento de el cubo en una direccion un numero de bloques definido
	};
}

function squareline( loc,length, material){
	var h = new Drone(  loc  );
	
	//Ejecutar codigo para crear un bucle de lineas de cubos


}

function hipercube(loc, length, material){
	var k = new Drone(  loc  );
	//Ejecutar codigo para crear un bucle de cuadrados de cubos
}
