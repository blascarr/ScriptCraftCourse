var altura;
var anchura;
var d;
var longitud;
var material;

function cube(altura, anchura, longitud, material) {
  for (var count3 = 0; count3 < altura; count3++) {
    for (var count2 = 0; count2 < longitud; count2++) {
      for (var count = 0; count < anchura; count++) {
        d.box(material);
        d.right(1);
      }
      d.fwd(1);
      d.left(anchura);
    }
    d.up(1);
    d.back(longitud);
    d.left(anchura);
  }
}

function main() {
  d = (new Drone(me, me.location));
  cube(2, 4, 6, 46);

  cube(10, 20, 15, 10);
}

