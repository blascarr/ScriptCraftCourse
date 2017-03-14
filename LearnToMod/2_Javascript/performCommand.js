
function creeper1() {
  (me).performCommand('summon creeper');
}

function creeper2() {
  (me).performCommand('summon creeper');
}

function main() {
  (me).performCommand('summon cow');
  creeper1();
  creeper2();
}