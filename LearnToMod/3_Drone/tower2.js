var d;
var height;
var material;

function main() {
  d = (new Drone(me, me.location));
  d.box((Material.BRICK));
  d.right(2);
  tower(2, (Material.OBSIDIAN));
  tower(7, (Material.DIAMOND_BLOCK));
}

function tower(height, material) {
  for (var count = 0; count < height; count++) {
    d.box(material);
    d.up(1);
  }
}