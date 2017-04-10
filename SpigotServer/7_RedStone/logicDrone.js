//----------------------------------------------------------------------//
//-------------------------Drone Redstone Methods-----------------------//
//----------------------------------------------------------------------//
var Drone = require('drone'); 

function lever( dir, mode ){

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
}

Drone.extend( lever );


function torch(dir,material ){
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
}
Drone.extend( torch );


function piston(dir,mode ){
	var piston_DIR = [5,3,4,2];

	var material = 33;
	if (mode==1){
		material = 29;
	}

	this.box(material+':'+piston_DIR[dir%4]);
	
}

Drone.extend( piston );

function inverter( material ){

	this.box(material).fwd().torch(this.dir, 'REDSTONE');
}

Drone.extend( inverter );

function diode(dir,modeON ){
	var comparator_OFF = [1,2,3,0];
	var comparator_ON = [5,6,7,8];
	
	var material = 149;

	var comparator_dir = comparator_OFF;
	if ( modeON == 'ON'){
		comparator_dir = comparator_ON;
	}

	this.box(material+':'+comparator_dir[dir%4]);
	
}

Drone.extend( diode );

//----------------------------------------------------------------------//
//----------------------------------------------------------------------//
//----------------------------------------------------------------------//

function lamp( ){

	var d = new Drone(self);
	echo(d);
	echo('Direction: '+d.dir);

	d.up().box(124).back().lever(d.dir+2);
}

exports.lamp = lamp;

function redpiston( ){

	var d = new Drone(self);
	echo(d);
	echo('Direction: '+d.dir);

	d.up().lever(d.dir+2).fwd().inverter(124).wire(8).piston(d.dir,1);
}

exports.redpiston = redpiston;

function and( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	//Create lamp
	INPUT_1.up().left().box(124).right();
	//Create INPUT 1
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').right().down().inverter(82);

	//Create lamp
	INPUT_2.right(2).up().right().box(124).left();
	//Create INPUT 2
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').left().box(blocks.redstone_wire).fwd().wire(8).piston(INPUT_2.dir,1);
}

exports.and = and;

function nand( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);

	//Create lamp 
	INPUT_1.up().left().box(124).right();
	//Create INPUT 1
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').right().down().box(82);

	//Create lamp
	INPUT_2.right(2).up().right().box(124).left();
	//Create INPUT 2
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').left().box(blocks.redstone_wire).wire(8).piston(d.dir,1);
}
exports.nand = nand;

function or( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	//Create lamp
	INPUT_1.up().left().box(124).right();
	//Create INPUT 1
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(3);

	//Create lamp
	INPUT_2.right(2).up().right().box(124).left();
	//Create INPUT 2
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(3).left().back().wire(8).piston(INPUT_2.dir,1);
}

exports.or = or;

function nor( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	//Create lamp
	INPUT_1.up().left().box(124).right();
	//Create INPUT 1
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().inverter(82).wire(3);

	//Create lamp
	INPUT_2.right(2).up().right().box(124).left();
	//Create INPUT 2
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().inverter(82).wire(3).left().back().wire(8).piston(INPUT_2.dir,1);
}

exports.nor = nor;

function orwell( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	//Create lamp
	INPUT_1.up().left().box(124).right();
	//Create INPUT 1
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(2).diode(INPUT_1.dir).wire(2);

	//Create lamp
	INPUT_2.right(2).up().right().box(124).left();
	//Create INPUT 2
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(2).diode(INPUT_2.dir).wire(2).left().back().wire(8).piston(INPUT_2.dir,1);
}

exports.orwell = orwell;