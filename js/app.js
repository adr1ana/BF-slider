/***********************************************
* Creating two lists which will hold pictures *
**********************************************/

var listOne = [
  "img/slider-image-7.jpeg",
  "img/slider-image-6.jpeg",
  "img/slider-image-9.jpeg",
  "img/slider-image-8.jpeg",
  "img/slider-image-5.jpeg"
];

var listTwo = [
  "img/slider-image-4.jpeg",
  "img/slider-image-1.jpeg",
  "img/slider-image-2.jpeg",
  "img/slider-image-3.jpeg"
];

var firstList = document.querySelector(".first");
var secondList = document.querySelector(".second");

function rowOne () {
  for ( var i = 0; i < listOne.length; i++) {
    var picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = '<img src="' + listOne[i] + '"/>';
    firstList.appendChild(picture);
  }
}

function rowTwo () {
  for ( var i = 0; i < listTwo.length; i++) {
    var picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = '<img src="' + listTwo[i] + '"/>';
    secondList.appendChild(picture);
  }
}

/**************************************************
* Functions for scrolling pictures left and right *
*************************************************/

function moveLeftFirst () {
  $("ul.first > li:last-child").remove().prependTo(".first");
}

function moveRightFirst () {
  $("ul.first > li:first-child").remove().appendTo(".first");
}

function moveLeftSecond () {
  $("ul.second > li:last-child").remove().prependTo(".second");
}

function moveRightSecond () {
  $("ul.second > li:first-child").remove().appendTo(".second");
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
