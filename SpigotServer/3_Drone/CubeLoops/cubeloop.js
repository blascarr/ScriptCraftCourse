var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 15;
	material = 169;
	var length = 5;

	for (var l = 0; l < length; l++) {
	
		//Cuadrado de cubos
		for (var i = 0; i < length; i++) {
			
			//Linea de cubos
			for (var j = 0; j < length; j++) {
				cube(size, material, d.getLocation()   );
				d.fwd( size);
			};

			//Desplazo hacia atras el Drone
			d.back(size *length);
			//Muevo a la derecha
			d.right(size);
		};

		//Desplazo hacia la izquierda el Drone
		d.left(size *length);
		//Muevo hacia arriba el piso de cubos
		d.up(size);
	};
	
	
}

function cube(size, material, loc){

	var f = new Drone(  loc  );
	f.box(material, size, 1, size);

	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.up();
	};
	f.box(material, size, 1, size);
}
