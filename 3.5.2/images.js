/**
 * Created by Amanda on 7/27/2015.
 */

$(function(){

    var images = [];
    function preload() {
        for(var i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }

    preload("http://i566.photobucket.com/albums/ss103/diashes/20150716_210059_zpsvu0wjmhr.jpg",
        "http://i566.photobucket.com/albums/ss103/diashes/20150717_233624_zpsxxr9pe1v.jpg",
        "http://i566.photobucket.com/albums/ss103/diashes/20150807_210823-2_zpsanzsgfdd.jpg",
        "http://i566.photobucket.com/albums/ss103/diashes/20150715_174341_zpsk53psakr.jpg");

    var switchCount = 0;
    $('.switch').click(function(){
        switchCount += 1;
        if (switchCount == images.length)
            switchCount = 0;
        $(this).attr("src", images[switchCount].src);
    });

    $('.rollover').hover(function() {
        $(this).attr('src', images[3].src);
    }, function(){
        $(this).attr('src', images[0].src);
    });

});
