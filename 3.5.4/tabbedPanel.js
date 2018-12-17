$(function() {

    // Cache DOM
    var $tabbedPanel = $('#tabbed-panel');
    var $tabContainer = $tabbedPanel.find('.tabs');
    var $tabs = $tabContainer.find('.tab');
    var $panels = $tabbedPanel.find('.panel');

    // Events
    $tabs.on('click', function() {
        $tabs.removeClass('active-tab');
        $(this).addClass('active-tab');

        var panelToShow = $(this).attr('rel');
        $tabbedPanel.find('.panel.active-panel').slideUp(300, showNextPanel);

        function showNextPanel() {
            $panels.removeClass('active-panel');
            $('#' + panelToShow).slideDown(300, function () {
                $(this).addClass('active-panel');
            });
        }
    });



});