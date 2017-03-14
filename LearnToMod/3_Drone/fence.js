var d;
var direction;

function fence(direction) {
  for (var count = 0; count < 5; count++) {
    if (direction == 'right') {
      d.right(1);
    } else if (direction == 'forward') {
      d.fwd(1);
    } else if (direction == 'left') {
      d.left(1);
    } else if (direction == 'backward') {
      d.back(1);
    }
  }
  d.box((Material.FENCE));
}

function main() {
  d = (new Drone(me, me.location));
  fence('right');
  fence('forward');
  fence('left');
  fence('backward');
}


