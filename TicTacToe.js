/*
var numbers = [
  45, 
  4,
  9,
  16,
  25];


test.innerHTML = numbers;

function testa () {
  numbers += [, 4];
  test.innerHTML = numbers;
} 

let object = (0, 53, 46, 43, 7, 43, 77)
let object2 = [0, 4, 6]

function myFunction() {
  let x = Math.max(object);
  if (x = 'NaN') {
    test.innerHTML = 'The object is not a number';
  } else {
    test.innerHTML = x;
  }
} */

var square = document.querySelectorAll(".square")
first = 'x'
text = document.getElementById("text")
one = document.getElementById("one")
two = document.getElementById("two")
three = document.getElementById("three")
four = document.getElementById("four")
five = document.getElementById("five")
six = document.getElementById("six")
seven = document.getElementById("seven")
eight = document.getElementById("eight")
nine = document.getElementById("nine")
scoreBoard0 = document.getElementById("score-0")
scoreBoardX = document.getElementById("score-x")
counter = 0
scoreX = 0
score0 = 0

square.forEach(square => {
  square.addEventListener("click", () => {
    if (first == 'x' & square.innerHTML == "") {
      square.innerHTML = "X";
      first = '0';
      text.innerHTML = "Player's with 0 turn!";
    } else if (first == '0' & square.innerHTML == "") {
      square.innerHTML = "0";
      first = 'x' ;
      text.innerHTML = "Player's with X turn!";
    } else {
      setTimeout(alert('Wrong spot'), 200);
      counter -= 1;   
    }
    setTimeout (win, 100, one, two, three);
    setTimeout (win, 100, four, five, six);
    setTimeout (win, 100, seven, eight, nine);
    setTimeout (win, 100, one, four, seven);
    setTimeout (win, 100, two, five, eight);
    setTimeout (win, 100, three, six, nine);
    setTimeout (win, 100, one, five, nine);
    setTimeout (win, 100, three, five, seven);
    counter += 1;
    if (counter == 9 ){
      setTimeout(tie, 100)
    }
  })
})

function tie () {
  restart();
}

function restart () {
  square.forEach(square => {
    square.innerHTML = '';
  })
  counter = 0;
  console.log('restart');
}

let a;
let b;
let c;
function win (a, b, c) {
  if (a.innerHTML == "X" && b.innerHTML == "X" && c.innerHTML == "X") {
    alert ('Player X win');
    scoreX += 1;
    restart ();
    scoreBoardX.innerHTML = scoreX;
  } else if (a.innerHTML == "0" && b.innerHTML == "0" && c.innerHTML == "0") {
    alert ('Player 0 win');
    restart ();
    score0 += 1;
    scoreBoard0.innerHTML = score0;
  }
}








