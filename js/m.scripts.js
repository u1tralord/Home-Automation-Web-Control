window.addEventListener('orientationchange', calculateTileSize);
calculateTileSize()

var songArea = $("#songs");
for(var i = 0; i < 100; i++){
	var songItem = $("<div class='song-item'></div>");
	songItem.append($("<button><div></div><div></div><div></div></button>"));

	var songInfo = $("<div></div>").addClass("song-info");
	songInfo.append($("<img></img>").attr("src", "res/album.jpg"));
	songInfo.append($("<h1></h1></br>").text("Song #" + i));
	songInfo.append($("<h2></h2>").text("Song #"+ i));
	songItem.append(songInfo);

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

$(".song-item > .song-info").click(function(){
	$(this).parent().addClass("selected");
	var music = document.getElementById("audio-handler");
	var albumArt = $("#simple-player > img");
	var songText = $("#simple-player > h1");
	var artistText = $("#simple-player > h2");
	var playPauseButton = $("#simple-player > button");
	
	$("#audio-handler > source").attr("src", "res/song.mp3");
	music.currentTime = 0;
	music.play();
	
	
	albumArt.attr("src", "res/album.jpg");
	albumArt.click(function(){
		$("#simple-player").removeClass("active-audio");
	});
	songText.text("Song");
	artistText.text("Artist");

	playPauseButton.addClass("play");
	playPauseButton.click(function(){
		if (music.paused) {
			music.play();
			$(this).removeClass("play");
			$(this).addClass("pause");
		} else {
			music.pause();
			$(this).removeClass("pause");
			$(this).addClass("play");
		}
	});
	
	//Show the miniplayer
	$("#simple-player").addClass("active-audio");
});