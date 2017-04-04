var d;

function main(){
	
	d = new Drone(me, me.location);

	d.up();
	for (var i = 0; i < 12; i++) {
		d.right(2).sign(["Direction: ", i], blocks.sign_post).left(2);
		d.box("96:"+i).fwd(2);
		
	};
	
}