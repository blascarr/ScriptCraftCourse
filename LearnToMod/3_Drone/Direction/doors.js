
var d;
var size;

function main(){
	
	d = new Drone(me, me.location);

	size = 5;
	d.up();
	
	for (var i = 0; i < 4; i++) {
		d.fwd(size).door2().back(size);
		d.turn();	
	};
	
}
