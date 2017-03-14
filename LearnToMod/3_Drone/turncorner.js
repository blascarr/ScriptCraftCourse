var d;

function main(){
	d = new Drone(me, me.location);
	
	d.dir = 3;
	d.box(blocks.rail);
	d.fwd(4);
	echo (d);

	d.turn();
	d.box(blocks.rail);
	d.fwd(4);
	echo (d);

	d.turn();
	d.box(blocks.rail);
	d.fwd(4);
	echo (d);

	d.turn();
	d.box(blocks.rail);
	d.fwd(4);
	echo (d);
}