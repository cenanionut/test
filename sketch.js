var srctxt;
var words;

function diastic(seed, words) {
  for (i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);
    for (j = 0; j < words.length; j++)
      if (words[j].charAt(i) == c) {
        console.log(words[j]);
        break;
      }
  }
}

function preload() {
  srctxt = loadStrings('rainbow.txt');
}

function setup() {
  noCanvas();
  srctxt = join(srctxt, ' ');
  words = splitTokens(srctxt, '   ,.?!');
  var seed = select("#seed");
  var button = select("#submit");
  button.mousePressed(function() {
    var phrase = diastic(seed.value(), words);
    // createP(seed.value());
    // createP(srctxt);
  })
}
