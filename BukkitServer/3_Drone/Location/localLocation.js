var d;
var mat;
var sizecube;

function main(){
	d = new Drone(me , me.location);
	mat = blocks.iron;
	sizecube = 10;
	echo("Global Drone Direction: "+d.dir);
	var loc = d.getLocation();
	wall(loc, sizecube, mat);
	
}

function wall(location, size, material){

	var f = new Drone(location);
	//La direccion de un Drone local siempre es 1
	echo ("Local Drone Direction: "+f.dir);
	
	for (var i = 0; i < size; i++) {
		d.box(material);
		d.fwd();
	};
		
}