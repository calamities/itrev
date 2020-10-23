var i = -1
var dlp_player = new Vimeo.Player(vimeo_iframe);
var isPlaying = false
function dlp() {
    i++
    if (isPlaying) {
        dlp_player.getCurrentTime().then(function(seconds) {
            dlp_player.getVideoTitle().then(function(title) {
                dlp_player.getVideoId().then(function(id) {
                    /*
                    console.log(seconds) 
                    console.log(title)
                    console.log(id)
                    console.log(i)
                    */
                    dataLayer.push({
                        'event': 'videoPlayerEvent',
                        'videoId': id,
                        'videoName': title,
                        'videoPlayerTime': seconds,
                        'videoMinutesWatched': i
                    });
                    console.log("dataLayer push");
                });
            });
        });
    setTimeout(
    function () {
        dlp();
    }
    , 60000);
    }
}
dlp_player.on('play', function () {
    isPlaying=true
    dlp();
}); 
dlp_player.on('pause', function () {
    isPlaying=false
    dlp();
}); 
dlp_player.on('ended', function () {
    isPlaying=false
    dlp();
}); 
