window.addEventListener('orientationchange', calculateTileSize);
calculateTileSize()

var songArea = $("#songs");
for(var i = 0; i < 20000; i++){
	var songItem = $("<div class='song-item'></div>").text("Song #"+i);
	songArea.append(songItem);
}
function calculateTileSize()
{
    var bodyWidth = $(".panel-body").first().width();
    var bodyHeight = $(".panel-body").first().height();
    var squareSize = 125;
    switch(window.orientation) 
    {  
        case -90:
        case 90:
            squareSize = (bodyHeight/2);
            break;
        default:
            squareSize = (bodyWidth/2);
            break; 
    }
    $(".tile").each(function(){
        $(this).width(squareSize);
        $(this).height(squareSize);
    });
}

$(".tab-nav").click(function() {
  $( ".panel-screen" ).each(function() {
    $( this ).removeClass( "active-panel" );
  });
  $("#"+$(this).attr('linkTo')).addClass("active-panel");
});