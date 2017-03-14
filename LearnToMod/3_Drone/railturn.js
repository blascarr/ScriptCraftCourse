var d;


function main(){
	d = new Drone(me, me.location);

	var rail = items.rails();
	//d.dir = 1;
	d.fwd(4);
	d.box( blocks.rail );
	echo (d);

	d.fwd(4);
	d.turn();
	d.box( blocks.rail );
	echo (d);

	d.fwd(4);
	d.turn();
	d.box( blocks.rail );
	echo (d);

	d.fwd(4);
	d.turn();
	d.box( blocks.rail );
	echo (d);

	d.up();
	square( blocks.gold , 4    );
	d.up();
	square( blocks.rail , 4   );
	d.up();
	square( blocks.air , 4   );

}



function square( material , length ){

	for (var i = 0; i < 4; i++) {
		
		for (var j = 0; j < length; j++) {

			if((material == 66) && j==0){

				d.box(material);
			}else{
				d.box(material);
			}
			
			d.fwd();
		};

		d.turn();
	};

}