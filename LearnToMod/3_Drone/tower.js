var d;
var height;

function main() {
  d = (new Drone(me, me.location));
  tower(5);
  d.right(1);
  //tower(20);
}

function tower(height) {
  for (var count = 0; count < height; count++) {
    d.box((Material.OBSIDIAN));
    d.up(1);
  }
  d.down(height);
}