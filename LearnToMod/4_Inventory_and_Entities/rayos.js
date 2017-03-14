var d;
var nrayos;

function main() {
  d = (new Drone(me, me.location));
  for (var count = 0; count < 4; count++) {
    tirarrayo(5);
    d.turn(1);
  }
}

function tirarrayo(nrayos) {
  for (var count2 = 0; count2 < nrayos; count2++) {
    d.mob((EntityType.CREEPER));
    world.strikeLightning((d.getLocation()));
    d.fwd(5);
  }
}


