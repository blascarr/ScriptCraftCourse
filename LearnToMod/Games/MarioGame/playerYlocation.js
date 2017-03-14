var entList;
var entLoc;
var i;
var info;
var loc;
var newLoc;
var oldLoc;
var user;

function headBump(info) {
  oldLoc = (info.getFrom());
  newLoc = (info.getTo());
  if ((oldLoc.getY()) < (newLoc.getY())) {
    (me).sendMessage('Player is moving up');
  }
}

function main() {
  (me).sendMessage('Mod Ready');
  events.when(('player.PlayerMoveEvent'),(stomp), me);
  events.when(('player.PlayerMoveEvent'),(headBump), me);
}

function stomp(info) {
  user = (info.getPlayer());
  loc = (user.getLocation());
  entList = (armorstand.entities((me), 5));
  var i_end = entList.length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1;
       i_inc >= 0 ? i <= i_end : i >= i_end;
       i += i_inc) {
    entLoc = ((entList[i - 1]).getLocation());
    if ((loc.getY()) - (entLoc.getY()) < 5 && (Math.abs((loc.getX()) - (entLoc.getX())) < 3 && Math.abs((loc.getZ()) - (entLoc.getZ())) < 3)) {
      entList[i-1].setHealth(0);
    }
  }
}