//Business Logic

function Board() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]]
  this.turnCount = 9
}

function player() {
  this.player = [[0,0,0], [0,0,0], [0,0,0]]
}




//User Interface Logic
$(document).ready(function() {
  $("div .well").click(function() {
    $(".blank").hide();
    $(".x").show();
  });



});
