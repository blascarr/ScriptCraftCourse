function main(){
	
	//clock(124);
	//clockrepeater();
	//clockdelay();
	//fastclock();
	counterclock();
}

function clock( material){
	var d = new Drone(me, me.location);
	//Creacion de un reloj.Ocurre siempre que hay un numero impar de inversores en circuito cerrado
	d.up();
	for (var i = 0; i < 3; i++) {
		d.fwd().wire(2).fwd().inverter(material);
		d.turn();
	};
	d.fwd().wire(5);
	//Creamos un dispensador para disparar
	d.fwd().dispenser('UP');
}

function clockrepeater(){
	var d = new Drone(me, me.location);
	//Creacion de un reloj.Ocurre siempre que hay un numero impar de inversores en circuito cerrado
	d.up();
	for (var i = 0; i < 4; i++) {
		d.wire(1).fwd().repeater(d.dir).fwd();
		d.turn();
	};
	d.turn(2);
	//Creamos un dispensador para disparar
	d.wire(2).fwd().dispenser('UP');
}

function clockdelay(){
	var d = new Drone(me, me.location);
	//Creacion de un reloj con delay ajustable.

	d.wire(1).fwd().inverter(124, true);
	//creacion de palanca de activacion
	d.right().lever(d.dir+1, 'SIDE').left();
	//Creacion del repetidor superior
	d.up().repeater(d.dir+2);
	//Creacion de bloques de transmision y circuito
	d.back().box(4).fwd(2).box(4).down();
	d.fwd().wire(3);
}

function fastclock(){
	var d = new Drone(me, me.location);
	d.up().torch('UP','R');
	d.fwd().diode(d.dir,'ON');

	for (var i = 0; i < 3; i++) {
		d.fwd();
		d.wire(1);
		d.turn();
	};
	//Extension de la linea
	d.turn().fwd(2).wire(3);
	//Creacion del dispensador
	d.dispenser('UP');
}

function counterclock(){
	var d = new Drone(me, me.location);
	d.up();
	d.hopper2();
	
	//d.hopper(d.dir).fwd().turn(2).hopper(d.dir).turn(2);
	d.fwd().diode(d.dir).fwd().wire(4);
	d.fwd().piston('UP',true);
}