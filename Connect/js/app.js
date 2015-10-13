window.onload = function() { 

  var columns = [[],[],[],[],[],[]];
  var player = "blue";
  var buttons = document.getElementsByTagName("button")

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", takeTurn)
  };

  // var testColumns = [
  //   ["red", "blue", "blue", "blue"],
  //   ["blue", "red", "blue", "blue"],
  //   ["blue", "blue", "red", "blue"],
  //   ["blue", "blue", "blue", "red"],
  //   []
  // ];

  // checkDiagonal();

  function takeTurn() {
    // var chuteIndex = parseInt(prompt("choose chute"));
    var chuteIndex = this.getAttribute("id");
    console.log(chuteIndex)
    var chuteLength = columns[chuteIndex].push(player);
    var row = $("tr").toArray().reverse()[chuteLength-1];
    //the array needs to be transformed into a jquery object, reversed and decremented (rather than incremented) in order to get the pieces to move up the column from the bottom
    var cell = $(row).find("td")[chuteIndex];
    $(cell).addClass(player);
     //now we change the player
     checkWin();

     player = (player == "red") ? "blue" : "red";
   }

   function checkColumn(){
    //first we check columns
    sameColorSuite = 1;
    
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 5; j++){
        var currentCell = columns[i][j];
        
        if(currentCell === player){
          if(sameColorSuite >= 4){
            return true;
          }
          sameColorSuite++;
        }
      }
      sameColorSuite = 1;
    }
    return false;

  }
  function checkRow(){
    sameColorSuite = 1;
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 5; j++){
        var currentCell = columns[j][i];
        
        if(currentCell === player){
          if(sameColorSuite >= 4){
            return true;
          }
          sameColorSuite++;
        }
      }
      sameColorSuite = 1;
    }
    return false;
  }

  function checkDiagonal(){
    // redCheck = 0;
    // blueCheck = 0;
    // sameColorSuite = 1;
    // for (var i =0 ; i < 5 ; i++){
    //   // for (var j=4; j>=0; j--){
    //     // console.log(i,j)
    //     var currentCell = testColumns[i][i];
    //     if(currentCell === player) { sameColorSuite++; }
    //     else { sameColorSuite = 1; }

    //     console.log(player + " " + sameColorSuite);
    //   // }
    // }
    return false;
    // console.log("sameColorSuite for player "+ player, sameColorSuite)
    // if(currentCell === player){
    //   if(sameColorSuite >= 4){
    //     return true;
    //   }
    //   sameColorSuite++;
    // }
  }

    function checkWin() {
      console.log("checkRow", checkRow());
      console.log("checkColumn", checkColumn());
      console.log("checkDiagonal", checkDiagonal());

      if(checkColumn() || checkRow() || checkDiagonal()) {
        alert("Yeah! " + player + " is the Chute master");
      }
      return checkColumn() || checkRow()  || checkDiagonal();
    }

    $("#chooseChute").on("click", takeTurn);

}








