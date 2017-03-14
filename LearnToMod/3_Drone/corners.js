
var d;
function main(){
	d = new Drone(me, me.location);
	d.up();
	square( blocks.gold , 6    );
	d.up();
	corners(blocks.rail, 6   );
}

function square( material , length ){

	for (var i = 0; i < 4; i++) {
		
		for (var j = 0; j < length; j++) {

			d.box(material);
			d.fwd();
		};

		d.turn();
	};

}

function corners(material, length){

	for (var i = 0; i < 4; i++) {

		for (var j = 0; j < length ; j++) {
			
			d.fwd();
			if ( (material == 66) && (j == length-1 ) ){
				d.turn();
				d.box(material);
				
			}else{
				//d.turn();
			}
		};

	};
}