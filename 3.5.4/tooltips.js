$(function(){

    // Settings
    var $showTooltip = $('.show-tooltip');
    var $tooltip = $('<div class="tooltip"></div>');

    // Events
    $showTooltip.hover(hoverOver, hoverOut).mousemove(getCoordinates);

    // Functions
    function hoverOver() {
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $tooltip.text(title).appendTo('body').fadeIn('slow');
    }
    function hoverOut() {
        $tooltip.remove();
    }
    function getCoordinates(e) {
        var x = e.pageX;
        var y = e.pageY;
        $tooltip.css({ top: y, left: x });
    }
});