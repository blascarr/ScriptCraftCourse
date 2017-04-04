var d;

function main(){
	
	d = new Drone(me, me.location);

	d.up();
	for (var i = 0; i < 12; i++) {
		d.box("33:"+i).fwd(2);
		
	};
	
}

