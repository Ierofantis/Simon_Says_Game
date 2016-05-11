var colours = [
  ['#red'],
  ['#red', '#blue'],
  ['#red', '#blue', '#yellow'],
  ['#red', '#blue', '#yellow', '#green'],
  ['#red', '#blue', '#yellow', '#green', '#red'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow', '#green'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow', '#green', '#red'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow', '#green', '#red', , '#blue'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow', '#green', '#red', , '#blue', '#yellow'],
  ['#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', '#green', '#red', '#blue', '#yellow', 'green', '#red', '#blue', '#yellow', '#green', '#red', , '#blue', '#yellow', '#blue']
]; //matches
var red = ['#red'];
var human = []; //push colors
var wrong = ["wrong"];
var i = 0;
var iFrequency = 500; // expressed in miliseconds
var myInterval = 0;

// STARTS and Resets the loop if any

if (myInterval > 0) clearInterval(myInterval); // stop
myInterval = setInterval(play, iFrequency); // run

function play() {
  start();

  // for (var i=0;i<colours.length;i++){
  // if (JSON.stringify(colours[i]) === JSON.stringify(human)) {
  //  i++;
  //  animate(colours[i]);
  //   human = [];}
  //}
}

function start() {
  animate(red);
  red = [];
}

function comp() {
  compf();
}

function compf() {

  if (i < 20) {
    // for (var i = 0; i < colours.length; i++) {
    if (JSON.stringify(colours[i]) === JSON.stringify(human)) {
      i++;
      alert(i);
      animate(colours[i]);
      human = [];
    } else {
      alert(wrong)
      animate(colours[i])
      human = [];
    }
  } else(alert('you won!'))
}

function comps() {

  if (i < 20) {
    // for (var i = 0; i < colours.length; i++) {
    if (JSON.stringify(colours[i]) === JSON.stringify(human)) {
      i++;
      alert(i);
      animate(colours[i]);
      human = [];
    } else {
      alert(wrong)
      i = 0;
      animate(colours[i]);
      human = [];
    }
  } else(alert('you won!'))
}

//}

//if (JSON.stringify(human) === JSON.stringify(colours[0]) {
//    human = [];
//   alert(yellow)

function add_sequence() {
  animate(red);
  red = [];
}

function animate(s) {

  var i = 0;
  var interval = setInterval(function() {

    anim(s[i]);
    i++;
    if (i >= s.length) {
      clearInterval(interval);
    }
  }, 500);
}

function anim(id) {

  $("" + id + "").delay(600)
    .animate({
      opacity: 1
    }, 300)
    .animate({
      opacity: 0.5
    }, 300)

}
$('#restart').click(function() {
  location.reload();
});

$('#red').click(function() {

  $("#red").animate({
    opacity: 1

  }, 200, function() {});
  $("#red").animate({
    opacity: 0.5

  }, 200, function() {});

});

$('#green').click(function() {

  $("#green").animate({
    opacity: 1

  }, 200, function() {});
  $("#green").animate({
    opacity: 0.5

  }, 200, function() {});

});

$('#yellow').click(function() {

  $("#yellow").animate({
    opacity: 1

  }, 200, function() {});
  $("#yellow").animate({
    opacity: 0.5

  }, 200, function() {});

});

$('#blue').click(function() {

  $("#blue").animate({
    opacity: 1

  }, 200, function() {});
  $("#blue").animate({
    opacity: 0.5

  }, 200, function() {});

});

function playSound(file) {
  var aud = new Audio(file);
  aud.play();
}

var a1 = document.getElementById("red").addEventListener("click", function() {
  human.push('#red')
});

var a2 = document.getElementById("green").addEventListener("click", function() {
  human.push('#green')
});

var a3 = document.getElementById("yellow").addEventListener("click", function() {
  human.push('#yellow')
});

var a4 = document.getElementById("blue").addEventListener("click", function() {
  human.push('#blue')
});