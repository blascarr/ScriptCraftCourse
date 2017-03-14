var info;
var isBlackWidow;
var isIronMan;
var itsMe;
var mat;
var msg;

function Assemble(info) {
  msg = (info.getMessage());
  if (String(msg) == 'Iron Man') {
    (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
    IAmIronMan();
  } else if (String(msg) == 'Black Widow') {
    (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
  }
}

function IAmIronMan() {
  isIronMan = true;
  isBlackWidow = false;
  (me).performCommand('gamemode s');
  itsMe = (me);
  itsMe.setAllowFlight(true);
  (me).getInventory().addItem([new ItemStack((Material.BEDROCK),64)]);
  (me).updateInventory();
}

function main() {
  isIronMan = false;
  isBlackWidow = false;
  events.when(('player.PlayerChatEvent'),(Assemble), me);
  events.when(('player.PlayerInteractEvent'),(onInteract), me);
}

function onInteract(info) {
  mat = (info.getMaterial());
  if (String(mat) == 'BEDROCK' && isIronMan) {
    Notch_explosion_wand.init((Material.BEDROCK), (me));
  }
}


var Notch_explosion_wand = new function(){
var launch_block;
var casting_player;
var block;
var playa;
var launched;
var block_type;
var launching;
var landing;
var location2;
var direction;

function init(launch_block, casting_player) {
  playa = casting_player;
  block_type = launch_block;
  launching = false;
  landing = false;
  launch();
}

function destroy(block) {
  if (launching == false && landing == true) {
    landing = false;
    world.createExplosion((block.getLocation()).getX(), (block.getLocation()).getY(), (block.getLocation()).getZ(), 4, true, true);
  }
}

function launch() {
  if (launching == false && landing == false) {
    launching = true;
    var location2 = (playa.getLocation());
    var direction = (location2.getDirection());
    (location2.getWorld().spawnFallingBlock(location2, block_type, 0)).setVelocity(((new org.bukkit.util.Vector(((direction.getX()) * 2), ((direction.getY()) * 2), ((direction.getZ()) * 2)))));
  }
}

function check_if_launched() {
  var launched = false;
  if (launching == true && landing == false) {
    launching = false;
    landing = true;
    launched = true;
  }
  return launched;
}

this.init=init;
this.destroy=destroy;
this.check_if_launched=check_if_launched
}
