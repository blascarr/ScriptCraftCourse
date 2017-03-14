var d;
var size;
var material;

function main(){
	
	d = new Drone(me, me.location);
	size = 15;
	material = 169;
	var length = 3;

	hipercube(d.getLocation(), length , material );
	
}

function cube( loc, size, material){

	var f = new Drone(  loc  );
	f.box(material, size, 1, size);

	for (var i = 0; i < size -1; i++) {
		f.box0(material, size, 1, size);
		f.up();
	};
	f.box(material, size, 1, size);
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
