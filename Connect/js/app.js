window.onload = function() {

var columns = [[],[],[],[],[],[]];
var player = "red";

function takeTurn() {
  var chuteIndex = parseInt(prompt("choose chute"));
  columns[chuteIndex][25] = player; 
  //for the moment we just fill the bottom row
  var rows = $("tr").last();
  var cell = rows.find("td")[chuteIndex];
  $(cell).addClass(player);
  //now we change the player
  player = (player == "red") ? "blue" : "red";
}

function getAvailableCellForChute(chute){
    var table = document.getElementById("td");
    for (var i = 30; i > -1; i--) {
      console.log(i);
     if (cell = "empty") 
     //else (cell = "null") {
  $("#chooseChute").on("click", takeTurn);
  }
 }
  getAvailableCellForChute()
}

//need to set the cell to null once it's been filled


//$("td").each(takeTurn(){
//$(this).find('td').each(takeTurn(){
// when the user picks a chute, you need to check which cell in this chute is available
// starting from the bottom

 //iterate through cells
//cells would be accessed using the "cell" variable assigned in the for loop

//var colorCell = $("td[data-col=0][data-row=0]");
//colorCell.attr("data-piece", "red");

//$("td").each(takeTurn(){
//$(this).find('td').each(takeTurn(){
        //do your stuff, you can use $(this) to get current cell
    //})
  //})

// loop through the col the user entered, and find the first empty slot
// i.e. the first cell with "empty" as the "data-piece" attribute value
// then set that attr to red/blue whatever


//var colorCell = $("td[data-col][data-row]");
//colorCell.attr("data-piece", "player");

//var colorCell = player;

//find row and column that's just been played and change it to the colour of the player







//var colorCell = document.getElementById("data-piece").innerHTML = "red";
//columns[0].length $("red").attr("data-piece", "red");
//var cellOne = $("html").find("[data-col='0'][data-row='0']")[0];
//<td data-col="0" data-row="0" data-piece="empty"></td>

//document.getElementById("data-col=1").push;

/*
// find (array of) elements with attribute data-col = 0
$("html").find("[data-col='0']")

// first element in that array -it'll be a dom object, not jquery
var cellOne = $("html").find("[data-col='0']")[0];
var cellOneAsJquery = $(cellOne);

// then stuff like this will work to make the piece red
cellOneAsJquery.attr("data-piece", "red");

// to get out the attribute value
cellOneAsJquery.attr("data-piece")

// to get out a specific cell, need both col and row defined
var cellOne = $("html").find("[data-col='0'][data-row='0']")[0];
*/

// var col = prompt("What col?");
// var col = "3"
//so you're checking the same one -- so it's not always empty


//using variables to store each column's value

// var col0 = [];
// var col1 = [];
// var col2 = [];
// var col3 = [];
// var col4 = [];
// var col5 = [];

//set up as an array
// col1 = [{ player: 1}, {player: 2}];
// col1[0] --> {player:1};
// .push() .pop() .shift() .unshift()



