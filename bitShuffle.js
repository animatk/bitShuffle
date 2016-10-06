var bi = [];

for(var i=0; i<256; i++ ){
  bi.push(i);
}

var bi1 = JSON.stringify(bi);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function mix( elm ){
  var bi2 = shuffle(bi);
  var bi3 = JSON.stringify(bi2);
  var el = document.getElementById(elm).innerHTML = bi3;
}
