


function main() {
  init();
}

function init() {
  events.when(('player.PlayerInteractEvent'),(fireball), me);
  events.when(('entity.EntityDamageByEntityEvent'),(polymorph), me);
  examples_magic_wands.init();
  examples_magic_wands.give_wand('Polymorph Wand', examples_magic_wands.dark_blue());
}