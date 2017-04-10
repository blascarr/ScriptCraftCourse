function getBlockD(){
	//var d = new Drone (self);
	//var d = drone;
	//echo ('Drone: '+d);
	var block = this.world.getBlockAt( this.x, this.y, this.z );
	//echo ('Block: '+block);

	//echo ('Type of block: '+block.type);
	return this.world.getBlockAt( this.x, this.y, this.z ).type;
}

var Drone = require('drone'); 
Drone.extend (getBlockD);

function wire( length){
	
	for (var i = 1; i <= length; i++) {
		this.fwd();
		//echo(getBlock(this));

		while (getBlock(this) != 'AIR'){
			this.up();
		};
		
		if (getBlock(this) == 'AIR'){
			var f = new Drone (this.getLocation());
			while(getBlock(f) == 'AIR'){
				f.down();
				this.down();
			}
			this.up().box(blocks.redstone_wire);
			//echo('Drone D: '+getBlock(this));
			//echo('Drone F: '+getBlock(f));
		}

		//Repeater on network
		if (i%10 == 0 ) {
			this.box(93+':'+(this.dir+1)%4);
			//this.fwd();
		};
	}
}

Drone.extend (wire);
//------------------------------------------//

function getBlock(drone){
	var d = drone;
	var block = d.world.getBlockAt( d.x, d.y, d.z );
	return block.type;
}

function getType(x,y,z){
	var d = new Drone(self);
	for (var i = 0; i < x; i++) {
		d.fwd();
		echo (getBlock(d));
		echo (d.getBlockD());
		//echo (d.world.getBlockAt( d.x, d.y, d.z ).type);
	};
}

exports.getType = getType;

function redwire(length){
	var d = new Drone (self);
	d.up();
	for (var i = 0; i < 4; i++) {

		echo('Direction: '+d.dir);
		echo('X: '+d.getLocation().x+'  Z: '+d.getLocation().z);
		
		d.wire(length);

		d.turn();

	};
}

exports.redwire = redwire;