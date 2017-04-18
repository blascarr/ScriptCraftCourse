var Drone = require('./drone').Drone;

Drone.extend('wire', function ( length, mode){
			
	if(mode){
		//Simple straight mode 
		for (var i = 1; i <= length; i++) {
			this.box( blocks.redstone_wire );
			this.fwd();
			//Repeater on network
			if(i%15 == 0){
				this.box(93+':'+(this.dir+1)%4).fwd();
			}
		};
	}else{
		//Mode for climbing wire
		for (var i = 1; i <= length; i++) {
			
			this.fwd();
			//No grass obstacle please
			/*if (getBlock(this) == 'GRASS'){
				this.box(0);
			}*/

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
			}

			//Repeater on network
			if (i%15 == 0 ) {
				this.box(93+':'+(this.dir+1)%4);
				//this.fwd();
			};
		}
	}
		
	
});

function getBlock(drone){
	var d = drone;
	var block = d.world.getBlockAt( d.x, d.y, d.z );
	//echo (block.type);
	return block.type;
}

