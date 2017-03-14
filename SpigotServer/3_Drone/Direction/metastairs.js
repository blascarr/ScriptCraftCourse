var runs = 19;
var drone;
var int_stair= '109';
var int_stair_landing = '108';
var l_stairs = 5;

function main(){
	var drone = new Drone (self);

	for (var run=0; run < runs; run++) {
	    
	    var meta =  Drone.PLAYER_STAIRS_FACING[drone.dir];
	    echo ('Stair Facing: '+Drone.PLAYER_STAIRS_FACING);
	    echo ('Meta Drone Facing: '+meta);

	    for (var i = 0; i < l_stairs; i++) {
	    	drone.box(int_stair_landing);
	    	drone.fwd().up().box(int_stair + ':' + meta); // int_stair = '109'
	    };
	    
	    drone.fwd().turn();
	    echo(drone.dir);
	}
}