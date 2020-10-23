console.log("-dlp-")
function dlp() {
    console.log('-dlp-')
    setTimeout(
        function () {
            if (playing) {
                console.log("test")
            }
            else {

            } dlp();
        }
        , 60000);
}
dlp();
