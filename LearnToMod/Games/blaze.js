var blockLoc;
var button;
var d;
var dLoc;
var entList;
var entLoc;
var holding;
var i;
var info;
var itemList;
var loc;
var newBlock;
var newLoc;
var oldLoc;
var planet;
var prize;
var user;

function fireBall() {
  var d = (new Drone(me, me.location));
  d.setLocation(((me).getLocation()));
  d.fwd(1);
  d.up(1);
  dLoc = (d.getLocation());
  (me).performCommand((['summon Fireball ',(dLoc.getX()),' ',(dLoc.getY()),' ',(dLoc.getZ()),' {ExplosionPower:5,direction:[0.0,0.0,0.0]}'].join('')));
}

function lists_get_random_item(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}

function headBump(info) {
  oldLoc = (info.getFrom());
  newLoc = (info.getTo());
  if ((oldLoc.getY()) < (newLoc.getY())) {
    var d = (new Drone(me, me.location));
    d.setLocation(((me).getLocation()));
    d.up(2);
    if ((((d.getLocation())).getBlock().getType()) == (Material.BRICK)) {
      newBlock = ((d.getLocation()).getBlock());
      blockLoc = (newBlock.getLocation());
      planet = (newBlock.getWorld());
      prize = (new ItemStack((lists_get_random_item(itemList, false)), 1));
      d.box((Material.AIR));
      planet.dropItemNaturally(blockLoc, prize);
    }
  }
}

function main() {
  (me).sendMessage('Mod Ready');
  itemList = [(Material.BLAZE_ROD), (Material.DIAMOND), (Material.EGG), (Material.FEATHER), (Material.NETHER_STAR), (Material.SNOW_BALL)];
  events.when(('player.PlayerMoveEvent'),(stomp), me);
  events.when(('player.PlayerMoveEvent'),(headBump), me);
  events.when(('player.PlayerInteractEvent'),(selectPower), me);
}

function selectPower(info) {
  var user = (info.getPlayer());
  holding = (user.getItemInHand());
  button = (info.getAction());
  if (String(button) == 'RIGHT_CLICK_AIR' || String(button) == 'RIGHT_CLICK_BLOCK') {
    if ((holding.getType()) == (Material.BLAZE_ROD)) {
      fireBall();
    }
  }
}

function stomp(info) {
  user = (info.getPlayer());
  loc = (user.getLocation());
  entList = (armorstand.entities((me), 1));
  var i_end = entList.length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1;
       i_inc >= 0 ? i <= i_end : i >= i_end;
       i += i_inc) {
    entLoc = ((entList[i - 1]).getLocation());
    if ((loc.getY()) - (entLoc.getY()) < 1 && (Math.abs((loc.getX()) - (entLoc.getX())) < 0.5 && Math.abs((loc.getZ()) - (entLoc.getZ())) < 0.5)) {
      entList[i-1].setHealth(0);
    }
  }
}