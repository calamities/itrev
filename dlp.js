console.log("-dlp-")
function dlp() {
    console.log('-dlp-')
    setTimeout(
        function () {
            if (playing) {
                player.getCurrentTime().then(function(seconds) {
                    console.log(seconds)
                });
            }
            else {

            } dlp();
        }
        , 60000);
}
dlp();
