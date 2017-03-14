var d;
var mat;
var size;

function main(){
	d = new Drone(me , me.location);
	mat = blocks.iron;
	size = 5;

	var loc = d.getLocation();
	echo("Direction Drone: "+d.dir);
	var meta_stairs =  Drone.PLAYER_STAIRS_FACING[d.dir];
	echo ('Stairs Meta Direction: '+meta_stairs+'  -->  '+ Drone.PLAYER_STAIRS_FACING);

	var meta_sign =  Drone.PLAYER_SIGN_FACING[d.dir];
	echo ('Sign Meta Direction: '+meta_sign+'  -->  '+ Drone.PLAYER_SIGN_FACING);

	var meta_torch =  Drone.PLAYER_TORCH_FACING[d.dir];
	echo ('Torch Meta Direction: '+meta_torch+'  -->  '+ Drone.PLAYER_TORCH_FACING);

}