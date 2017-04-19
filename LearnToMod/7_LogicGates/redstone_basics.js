function main(){
	
	torchcircuit();
	//levercircuit();
	//pistonloop(10);
	//torchside(124);
	//redstonetower(10,124);
	//redstoneV(10,124,'DOWN');
}

function torchcircuit(){

	var d = new Drone(me, me.location);

	//Crea una antorcha orientada hacia arriba, 
	// La antorcha de Redstone se indica escribiendo 'R' o 'REDSTONE' como segundo parametro
	d.up().torch('UP','R');
	//Creacion del polvo de redstone (No se recomienda poner justo 15, aparece un repetidor)
	d.fwd().wire(10);
	//Crea un piston con el primer parametro de direccion
	d.fwd().piston(d.dir);
}

function levercircuit(){
	var d = new Drone(me, me.location);

	//Crea una palanca orientada hacia abajo, con la direccion especificada por el Drone 
	d.up().lever(d.dir,'DOWN');
	//Creacion del polvo de redstone y un piston pegajoso con el segundo parametro TRUE
	d.fwd().wire(10).fwd().piston(d.dir,true);
	//Creacion de un bloque unido al piston pegajoso
	d.fwd().box(4);

}

function pistonloop(npiston){
	var d = new Drone(me, me.location);
	d.up().lever(d.dir,'DOWN');
	d.fwd().wire(5);
	//Creamos una serie de pistones en linea
	for (var i = 0; i < npiston; i++) {
		//Giro de linea a la derecha
		//Los pistones deben tener al menos 2 bloques de polvo de redstone previos a el
		d.fwd().turn().wire(2).fwd().piston(d.dir,true);
		//Creamos bloque pegado al piston
		d.fwd().box(4).back(3);
		//Giramos en sentido contrario y avanzamos 1 espacio 
		d.turn(-1).fwd();

		//Para valores mayores de 15 requiere repetidores
		//Sustituimos el polvo intermedio por un repetidor
		//d.wire(1);
		d.repeater(d.dir);
	};
}

function torchside(material){
	var d = new Drone(me, me.location);
	//Para crear una palanca lateral hay que especificar un segundo parametro que es 'SIDE'
	//Las palancas estan orientadas en la direccion donde se apunta, por ello hay que sumarle 2 y que este en direccion sur cuando se apunta al norte
	d.up().lever(d.dir+2, 'SIDE');
	d.fwd().box(material);
}

function lamp(){
	torchside(124);
}

function redstonetower(length, material){

	var d = new Drone (me, me.location);
	//Creacion de transmision vertical de redstone
	d.up();
	d.lever(d.dir+2, 'SIDE').fwd();
	for (var i = 0; i < length; i++) {
		d.box(material);
		d.up();
		d.torch('UP','R');
		d.up();
	};
	//Modo de transmision solo hacia arriba
}

function redstoneV(length, material, mode){

	var d = new Drone (me, me.location);
	//Creacion de transmision vertical de redstone
	// Transmision lateral alternativa

	if (mode == 'DOWN'){
		//Para transmitir hacia abajo se pone una palanca en la parte superior
		d.lever(d.dir+2, 'SIDE').fwd();
		for (var i = 0; i < length; i++) {
			d.inverter(material);
			d.down().turn(2);
		};
	}else{
		d.up();
		d.lever(d.dir+2, 'SIDE').fwd();
		for (var i = 0; i < length; i++) {
			d.inverter(material);
			d.up().turn(2);
		};
	}
}