var mana = 100,
    spell = "haggler's charm",
    grimoire = Game.Objects["Wizard tower"].minigame;
function autocastSpell() {
  if (grimoire.magic >= mana)
    grimoire.castSpell(grimoire.spells[spell]);
}
setInterval(autocastSpell, 1000);