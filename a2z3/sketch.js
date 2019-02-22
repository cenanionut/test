var textfield;
var output;
var submit;

function setup() {
  noCanvas();
  textfield = select("#txt");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);

}

function newText() {
  var q = textfield.value();
  var words = splitTokens(q, ', ');
  for (var i = 0; i < words.length; i++)
      // createP(words[i]);


words = sort(words);
s = join(words,' ');
createP(s);

  // var index = q.indexOf("rainbow",10);
  // var newtext = q.substring(q.length/2,q.length);
  // createP(newtext);
}
