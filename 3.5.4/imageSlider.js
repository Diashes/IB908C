$(function() {

    // Settings
    var width = 640;
    var animationSpeed = 2000;
    var pause = 4000;
    var currentSlide = 1;
    var interval;

    // Cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    // Events
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    // Functions
    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    startSlider();

});