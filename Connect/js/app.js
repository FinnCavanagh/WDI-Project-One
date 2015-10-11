
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

var col = prompt("What col?");
var col = "3"
//so you're checking the same one -- so it's not always empty

// loop through the col the user entered, and find the first empty slot
// i.e. the first cell with "empty" as the "data-piece" attribute value
// then set that attr to red/blue whatever