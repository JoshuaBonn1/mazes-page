$().ready(function(){
    $.getJSON( "/mazes-page/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});