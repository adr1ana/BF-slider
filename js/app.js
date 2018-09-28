/***********************************************
* Creating two lists which will hold pictures *
**********************************************/

const listOne = [
  'img/slider-image-7.jpeg',
  'img/slider-image-6.jpeg',
  'img/slider-image-9.jpeg',
  'img/slider-image-8.jpeg',
  'img/slider-image-5.jpeg'
];

const listTwo = [
  'img/slider-image-4.jpeg',
  'img/slider-image-1.jpeg',
  'img/slider-image-2.jpeg',
  'img/slider-image-3.jpeg'
];

const firstList = document.querySelector(".first");
const secondList = document.querySelector(".second");

function rowOne () {
  for ( let i = 0; i < listOne.length; i++) {
    const picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = `<img src="${listOne[i]}"/>`;
    firstList.appendChild(picture);
  }
}

function rowTwo () {
  for ( let i = 0; i < listTwo.length; i++) {
    const picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = `<img src="${listTwo[i]}"/>`;
    secondList.appendChild(picture);
  }
}

/**************************************************
* Functions for scrolling pictures left and right *
*************************************************/

function moveLeftFirst () {
  var last = $('ul.first > li:last-child').css({opacity:'0'});
  //var myWidth = $('ul.first > li:last-child').width();
  //console.log("my width: " + myWidth);
  last.prependTo('.first');
  //last.animate({opacity: '1', width: myWidth});
  last.animate({opacity: '1'});
}

/* Htjela sam pomoću .width() pamtiti širinu zadnje slike da se pomakne cijeli
red za tu dimanziju, ali kada tu opciju primjenim redovi u slideru kao da
dodaju marginu prilikom animacije pa se cijeli slider kao prošiti i suzi za
par pixela.*/

function moveRightFirst () {
  var first = $('ul.first > li:first-child').css({opacity:'0'});
  first.appendTo('.first');
  first.animate({opacity: '1'});
}

function moveLeftSecond () {
  var last = $('ul.second > li:last-child').css({opacity:'0'});
  last.prependTo('.second');
  last.animate({opacity: '1'});
}

function moveRightSecond () {
  var first = $('ul.second > li:first-child').css({opacity:'0'});
  first.appendTo('.second');
  first.animate({opacity: '1'});
}

$(".previous").click(function(){
  moveLeftFirst();
  moveLeftSecond();
});

$(".next").click(function(){
  moveRightFirst();
  moveRightSecond();
});

rowOne();
rowTwo();
