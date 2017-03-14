var d;
var ncube;
var material;
var length;

function main(){
	
	d = new Drone( me, me.location );
	echo ( d.x );
	echo ( d.y );
	echo ( d.z );
	d.up(1);
	
	length=10;
	ncube = 5;
	material = 169;

	for (var i = 0; i < ncube; i++) {
		cube(d.getLocation(), length, material);
		d.fwd(length);
	};

	

}

function cube(loc, size, material){
	var f = new Drone( loc );

	f.box( material, size, 1, size);
	f.box0(material, size, size, size);
	f.up(size);
	f.box( material, size, 1, size);

}