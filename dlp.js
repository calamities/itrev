var i = -1
var dlp_player = new Vimeo.Player(vimeo_iframe);
var isPlaying = false
function dlp() {
    console.log('test')
    if (isPlaying) {
        i++
        dlp_player.getCurrentTime().then(function (seconds) {
            dlp_player.getVideoTitle().then(function (title) {
                dlp_player.getVideoId().then(function (id) {

                    console.log(isPlaying)
                    console.log(seconds)
                    console.log(title)
                    console.log(id)
                    console.log(i)

                    /*
                      dataLayer.push({
                          'event': 'videoPlayerEvent',
                          'videoId': id,
                          'videoName': title,
                          'videoPlayerTime': seconds,
                          'videoMinutesWatched': i
                      });
                      */
                });
            });
        });
    }
    setTimeout(
        function () {
            dlp();
        }
        , 60000);
}
dlp_player.on('play', function () {
    isPlaying = true
});
dlp_player.on('pause', function () {
    isPlaying = false
});
dlp_player.on('ended', function () {
    isPlaying = false
});

dlp();