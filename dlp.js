var playing1 = false;
var player1 = new Vimeo.Player(vimeo_iframe2);

function dlp() {
    setTimeout(
        function () {
            if (playing1) {
                console.log("test")
            }
            else {

            } dlp();
        }
        , 60000);
}
player1.on('play', function () {
    playing1 = true;
}); 
player1.on('ended', function () {
    playing1 = false; 
}); 
player1.on('pause', function () {
    playing1 = false;
}); 
dlp();
