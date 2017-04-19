var Drone = require('./drone').Drone;

Drone.extend('lever', function(dir, mode){
	var lever_UP = [8,7,0,15];
	var lever_DOWN = [6,5,14,13];
	var lever_SIDEUP = [1,3,2,4];
	var lever_SIDEDOWN = [9,11,10,12];

	var lever_array = lever_SIDEUP;
	if(mode == 'UP'){
		lever_array = lever_UP;
	}

	if(mode == 'DOWN'){
		lever_array = lever_DOWN;
	}

	if(mode == 'SIDE'){
		lever_array = lever_SIDEDOWN;
	}

	this.box(69+':'+lever_array[dir%4]);
});

Drone.extend('lamp', function(){

	this.up().box(124).back().lever(this.dir+2);

});

Drone.extend('torch', function (dir,material ){
	var torch_DIR = [1,3,2,4];
	
	var m = 50;

	if(material == 'REDSTONE' || material =='R'){
		m= 75;
	}

	if(dir=='UP'){
		this.box(m+':'+0);
	}else{
		this.box(m+':'+torch_DIR[dir%4]);
	}
});

Drone.extend('piston', function (dir,mode ){
	var piston_DIR = [5,3,4,2];

	var material = 33;
	if (mode==1){
		material = 29;
	}
	if (dir=='UP'){
		this.box(material+':'+1);
	}else if(dir=='DOWN'){
		this.box(material+':'+0);
	}else{
		this.box(material+':'+piston_DIR[dir%4]);
	}
	
	
});

Drone.extend('inverter', function ( material , notmove){
	if (notmove == true){
		this.chkpt('inverter');
	}
	
	this.box(material).fwd().torch(this.dir, 'REDSTONE');
	if (notmove== true){
		return this.move('inverter');    
	}  
});

Drone.extend('diode' , function (dir,modeON ){
	var comparator_OFF = [1,2,3,0];
	var comparator_ON = [5,6,7,8];
	
	var material = 149;

	var comparator_dir = comparator_OFF;
	if ( modeON == 'ON'){
		comparator_dir = comparator_ON;
	}

	this.box(material+':'+comparator_dir[dir%4]);
	
});

Drone.extend('repeater' , function (dir, mode){
	var material = 93;
	if (mode ){
		material = 94;
	}
	if (!dir){
		this.box(material+':'+(this.dir+1)%4);
	}else{
		this.box(material+':'+(dir+1)%4);
	}
});

Drone.extend('dispenser' , function (dir){
	var dispenser_DIR = [5,3,4,2];
	var material = 23;
	if (dir=='UP'){
		this.box(material+':'+1);
	}else if(dir=='DOWN'){
		this.box(material+':'+0);
	}else{
		this.box(material+':'+dispenser_DIR[dir%4]);
	}
});

Drone.extend('hopper' , function (dir){
	var hopper_DIR = [5,3,4,2];
	var material = 154;
	if (!dir){
		this.box(material+':'+this.dir);
	}else{
		this.box(material+':'+hopper_DIR[dir%4]);
	}
});

Drone.extend('hopper2' , function (){
	this.hopper(this.dir).fwd().turn(2).hopper(this.dir).turn(2);
});