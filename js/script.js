
// function textChange () {
//     let a,b,c;
//     a =5;
//     b =6;
//     c =a+b;
//     document.getElementById('h2').innerHTML = "the value is "+c+"";
// }

// let x, y, z;
// x =5;
// y =6;
// z = y % x;
// function arrithmatic () {
//     document.getElementById('h3').innerHTML = "the value is"+z;
// }

// let m = 5;
// m--;
// let n =x;
// document.getElementById('h4').innerHTML = z;


$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    $(".resizable").resizable ();
    $(".resizable").draggable ();
    $( "#selectable" ).selectable();
    $ ( "#accordion").accordion ();
    var availableTags = ["abdullah", "Abdur Rahman", "sazal syed", "syed shaon"];
    $("tags").autocomplete ({
      source: availableTags
    });

    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").on("click", function(event){
      event.preeventDefault();
    });

    // date picker
    $("#datepecker").datepicker();

  } );  
  