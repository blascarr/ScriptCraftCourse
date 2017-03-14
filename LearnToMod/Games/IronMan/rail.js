
var d;
var e;

function main(){
	d = new Drone(me, me.location);
	e = new Drone(me, me.location);

	e.up();
	square( blocks.gold , 100    );


}

function square( material , length ){

	for (var i = 0; i < 4; i++) {
		
		for (var j = 0; j < length; j++) {

			d.box(material);
			e.box(blocks.rail);
			d.fwd();
			e.fwd();
		};

		d.turn();
		e.turn();
	};

}