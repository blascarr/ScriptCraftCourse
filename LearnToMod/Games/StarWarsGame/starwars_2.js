var Button;
var Clicked;
var ClickedFace;
var ClickedType;
var Holding;
var HoldingType;
var Lifted;
var Playa;
var d;
var dir;
var info;
var loc;

function Lift() {
  if (String(Button) == 'LEFT_CLICK_BLOCK') {
    if (String(ClickedFace) == 'UP') {
      d.setLocation((Clicked.getLocation()));
      d.box((Material.AIR));
      Lifted = ((Clicked.getLocation()).getWorld().spawnFallingBlock((Clicked.getLocation()), ClickedType, 0));
      Lifted.setVelocity(((new org.bukkit.util.Vector(0, 1, 0))));
    }
  }
}

function TheForce(info) {
  d = (new Drone(me, me.location));
  Playa = (info.getPlayer());
  Holding = (Playa.getItemInHand());
  HoldingType = (Holding.getType());
  Button = (info.getAction());
  Clicked = (info.getClickedBlock());
  ClickedFace = (info.getBlockFace());
  ClickedType = (Clicked.getType());
  loc = (Playa.getLocation());
  dir = (loc.getDirection());
  if (HoldingType == (Material.SUGAR)) {
    Lift();
  }
}

function main() {
  (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
  events.when(('player.PlayerInteractEvent'),(TheForce), me);
}

