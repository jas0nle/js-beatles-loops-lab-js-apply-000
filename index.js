// add solution here
function theBeatlesPlay(musicians, instruments) {
  var  BeatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    BeatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return BeatlesArray;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var FactsArray = [];
  var i = 0;
  while(i < facts.length) {
    FactsArray.push(facts[i] + "!!!");
    i++;
  }
  return FactsArray;
}