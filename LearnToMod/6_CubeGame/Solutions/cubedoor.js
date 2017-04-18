var d;
var mat;
var sizecube;

function main(){
	d = new Drone(me , me.location);
	mat = blocks.iron;
	sizecube = 5;

	var loc = d.getLocation();
	cube(d.getLocation(), sizecube, mat);
	
}

function square(location, size, material){
	var f = new Drone(location);
	f.box(material, size, 1, size);
}

function square0(location, size, material){
	var f = new Drone(location);
	f.box0(material, size, 1, size);
}

function cube(location, s, material){

	var f = new Drone(location);
	//El doble de grande porque las puertas serán de 2x2
	size=2*s;
	//
	square(f.getLocation(), size, material);
	
	for (var i = 0; i < size-1; i++) {

		square0(f.getLocation(), size, material);
		f.up(1);
	};
	square(f.getLocation(), size, material);

	//Desplazamiento hacia el centro del Drone
	var g = new Drone(location);
	//g.box(blocks.gold);

	//Crear Puertas laterales
	//Correccion por las  murallas que ocupan dos bloques
	g.up(s-1).right(s-1).fwd(s-1);
	//g.box(169);
	for (var i = 0; i < 4; i++) {

		g.fwd(s).door2().back(s).fwd().turn();

	};

	//Crear puertas superior e inferiorw
	//g.up(s).box(blocks.trapdoor);
	//g.down(2*s-1).box(blocks.trapdoor);

	g.up(s);
	backdoor(g);
	//g.up(s).box(blocks.trapdoor).down(2*s+1)box(blocks.trapdoor);

	//g.box(blocks.trapdoor).fwd().box(blocks.trapdoor).right().box(blocks.trapdoor).back().box(blocks.trapdoor);

	/*for (var i = 0; i < 4; i++) {
		g.box(blocks.trapdoor).fwd().turn();
	};*/

	
}

function backdoor(drone){

	for (var i = 0; i < 4; i++) {
		drone.box(blocks.trapdoor);
		drone.fwd();
		drone.turn();
	};
}