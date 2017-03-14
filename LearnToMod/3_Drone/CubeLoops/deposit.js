var contenido;
var d;
var d_content;
var material;
var pared;

function contenido2(material) {
  d_content.fwd(1);
  d_content.right(1);
  for (var count2 = 0; count2 < 8; count2++) {
    for (var count = 0; count < 8; count++) {
      d_content.fwd(1);
      d_content.box(material);
    }
    d_content.back(8);
    d_content.right(1);
  }
}

function contorno(material) {
  for (var count4 = 0; count4 < 4; count4++) {
    for (var count3 = 0; count3 < 10; count3++) {
      d.fwd(1);
      d.box(material);
    }
    d.turn(1);
  }
}

function deposito(pared, contenido) {
  d = (new Drone(me, me.location));
  d_content = (new Drone(me, me.location));
  contorno(pared);
  contenido2(pared);
  d.fwd(1);
  d_content.fwd(1);
}

function main() {
  deposito((Material.GLASS), (Material.WATER));
}




