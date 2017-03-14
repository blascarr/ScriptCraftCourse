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

function info(){
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
  events.when(('block.BlockBreakEvent'),(info), me);
}
