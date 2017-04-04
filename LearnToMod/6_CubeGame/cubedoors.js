var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 15;
	material = 2;
	var length = 3;

	hipercube(d.getLocation(), length , material );
	//cube(d.getLocation(), size , material );
}

function cube( loc, size, material){

	var f = new Drone(  loc  );
	f.box(material, size, 1, size);

	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.up();
	};
	f.box(material, size, 1, size);

	centercube(f.getLocation(), size, 91);
	doorscube(f.getLocation(), size,material);
	trapdoorscube(f.getLocation(), size);
}

function cubeline( loc,length, material){
	var g = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		cube(g.getLocation(), size, material );
		g.fwd(size);
	};
}

function squareline( loc,length, material){
	var h = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		cubeline(h.getLocation(), length, material );
		h.right(size);
	};
}

function hipercube(loc, length, material){
	var k = new Drone(  loc  );
	for (var i = 0; i < length; i++) {
		squareline(k.getLocation(), length, material );
		k.up(size);
	};
}

function centercube(loc, size, material){

	var f = new Drone(  loc  );
	f.fwd(size/2).right(size/2).down(size/2).box(material);
}

function doorscube(loc, size,material){

	var f = new Drone(  loc  );
	f.fwd(size/2).right(size/2).down(size/2);
	
	for (var i = 0; i < 4; i++) {
		echo ("Direction: "+f.dir);

		var correction = 0;
		if (f.dir == 1 || f.dir == 2){
			f.fwd(size/2-1).box(blocks.air,1,2,1).door2().back(size/2-1).turn();
		}else{
			f.fwd(size/2).box(blocks.air,1,2,1).door2().back(size/2).turn();
		}
		
	};
}

function trapdoorscube(loc, size,material){

	var f = new Drone(  loc  );
	f.fwd(size/2).right(size/2).down(size/2);

	f.down(size/2-1).box(96).up(size/2-1);
	f.up(size/2).box(96).down(size/2);

}