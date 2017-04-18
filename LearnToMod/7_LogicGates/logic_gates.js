function main(){
	
	var d = new Drone(me, me.location);
	d.up().wire(18);
	//d.lamp();

	//d.inverter(5);
	//d.diode();
	

	//and();
	//or();
	//nand();
	//orwell();
	//nor();
}

function lamp( ){

	var d = new Drone(me);
	d.up().box(124).back().lever(d.dir+2);
}

function and(){
	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	INPUT_1.up().left().box(124).right();

	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').right().down().inverter(82);

	INPUT_2.right(2).up().right().box(124).left();
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').left().box(blocks.redstone_wire).fwd().wire(8).piston(INPUT_2.dir,1);
}


function nand( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);

	//Create lamp 
	INPUT_1.up().left().box(124).right();
	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').right().down().box(82);

	INPUT_2.right(2).up().right().box(124).left();
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').left().box(blocks.redstone_wire).wire(8).piston(d.dir,1);
}


function or( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	INPUT_1.up().left().box(124).right();

	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(3);

	INPUT_2.right(2).up().right().box(124).left();
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(3).left().back().wire(8).piston(INPUT_2.dir,1);
}


function nor( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	INPUT_1.up().left().box(124).right();

	INPUT_1.back().lever(INPUT_1.dir+2).fwd().inverter(82).wire(3);

	INPUT_2.right(2).up().right().box(124).left();
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().inverter(82).wire(3).left().back().wire(8).piston(INPUT_2.dir,1);
}


function orwell( ){

	var INPUT_1 = new Drone(self);
	var INPUT_2 = new Drone(self);
	
	INPUT_1.up().left().box(124).right();

	INPUT_1.back().lever(INPUT_1.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(2).diode(INPUT_1.dir).wire(2);

	INPUT_2.right(2).up().right().box(124).left();
	INPUT_2.back().lever(INPUT_2.dir+2).fwd().box(82).up().torch('UP','REDSTONE').wire(2).diode(INPUT_2.dir).wire(2).left().back().wire(8).piston(INPUT_2.dir,1);
}
