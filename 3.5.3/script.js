"use strict";

var dropDownMenu = function($) {

    var listItems = $("nav ul li");
    var newWindowLinks = $('a[href^="http"]');

    listItems.hover(
        function(){
            $("ul", this).stop().slideDown(100);
        },
        function(){
            $("ul", this).stop().slideUp(100);
        }
    );

    newWindowLinks.attr("target", "_blank");

};

dropDownMenu(jQuery);