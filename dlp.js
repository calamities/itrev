console.log("-dlp-")
var i = 0
function dlp() {
    i++
    if (playing) {
        player.getCurrentTime().then(function(seconds) {
            player.getVideoTitle().then(function(title) {
                player.getVideoID().then(function(id) {
                    console.log(seconds) 
                    console.log(title)
                    console.log(id)
                    console.log(i)
                    /*
                    <script>
                    dataLayer.push({
                        'event': 'videoPlayerEvent',
                        'videoId': '{{VideoId}}',
                        'videoName': '{{VideoName}}',
                        'videoPlayerTime': '{{videoPlayerTime}}',
                        'videoMinutesWatched': '{{videoMinutesWatched}}'
                    });
                    */
                });
            });
        });
    }
    else {

    } 
    setTimeout(
        function () {
            dlp();
        }
        , 15000);
}
dlp();
