$(document).ready(function() {

/*
*@description Creates the grid using the user input fields.
*/
$('#submit').click(function makeGrid(e){

  var gridHeight = $('#input1').val();
  var gridWidth = $('#input2').val();
  var table = '';

  if(checkSize()){
  removeTable();
  for(var x = 1; x <= gridHeight; x++){
      table += '<tr>';
  	     for( var y = 1; y<= gridWidth; y++){
  	         table += '<td class ="gridSquare">' + ' ' + '</td>';
            }
      table += '</tr>';
     }
  var newTable = '<table>' + table + '</table>';
  $('.grid').append(newTable);
  e.preventDefault();
}else{
  return;
}
});

/*
*@description Checks for existing table and removes it if true.
*/
function removeTable(){
  if($('.grid').find('table')){
      var table = $('.grid').find('table');
      table.remove();
    }
}


/*
*@description Checks if Height and Width are within limits.
*/
function checkSize(){
  if($('#input1').val() > 50 || $('#input2').val() > 50){
    window.alert("Please select a height and width value of 50 or below.");
    return false;
  }else{
    return true;
  }
}

/*
*@description sets the counter value to that of the slider
*/
$('#input1').on('oninput', function(e){

  var val = $("#input1").value();
  $("#valueHeight").value() = val;
  });

/*
* @description Event listener, function changes cell background colour to that of the colour picker.
*/
$('.grid').on('mousedown','td',function changeColour(e){
  e.preventDefault();
  this.style.backgroundColor = $('#colorPicker').val();
});

/*
* @description Event listener, function changes cell background colour to white.
*/
$('.grid').on('contextmenu','td', function removeColour(e){
  e.preventDefault();
  this.style.backgroundColor = "white";
});

/*
*@description Clears currently built grid.
*/
$('#clear').on('click',function clearGrid(){

  var elements = document.getElementsByClassName('gridSquare');
  for(var x =0; x < elements.length; x++){
    elements[x].style.backgroundColor="white";
}
});

});
