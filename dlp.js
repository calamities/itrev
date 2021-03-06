var i = 0
var secondsWatched = 0
var minutesWatched = 0
var dlp_player = new Vimeo.Player(vimeo_iframe);
var isPlaying = false
function dlp() {
    if (isPlaying) {
        i++
        dlp_player.getCurrentTime().then(function (seconds) {
            dlp_player.getVideoTitle().then(function (title) {
                dlp_player.getVideoId().then(function (id) {

                    /*
                    console.log(isPlaying)
                    console.log(seconds)
                    console.log(title)
                    console.log(id)
                    console.log(i)
                    console.log(secondsWatched)
                    console.log(minutesWatched)
                    */

                    dataLayer.push({
                        'event': 'videoPlayerEvent',
                        'videoId': id,
                        'videoName': title,
                        'videoPlayerTime': seconds,
                        'videoMinutesWatched': minutesWatched
                    });
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
function timeIncrementer() {
    if (isPlaying) {
        secondsWatched++
        if (secondsWatched === 60) {
            secondsWatched = 0
            minutesWatched++
        }
    }
    setTimeout(
        function () {
            timeIncrementer();
        }
        , 1000);
}
dlp_player.on('play', function () {
    isPlaying = true
});
dlp_player.on('pause', function () {
    isPlaying = false
});
dlp_player.on('ended', function () {
    isPlaying = false
    $.getJSON(
        'https://cdn.jsdelivr.net/gh/calamities/itrev@main/videoList.json',
        function (videoIdList) {
            dlp_player.getVideoId().then(function (id) {
                var nextVideoIndex = videoIdList.videoIds.indexOf(id.toString()) + 1
                var nextVideoId = videoIdList.videoIds[nextVideoIndex]
                var nextVideoURL = "http://videolibrary.doesvirtual.com/?video=" + nextVideoId
                window.top.location.href = nextVideoURL
            });
        }
    );
});

dlp();
timeIncrementer();
