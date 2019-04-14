$(function() {
  hideExample();
  fadeExample();
  animateExample();
});

function hideExample() {
  $(".js-hide").click((event) => $(".js-image-a").hide() )
  $(".js-show").click((event) => $(".js-image-a").show() )
  $(".js-toggle").click((event) => $(".js-image-a").toggle() )
}

function fadeExample() {
  $(".js-fadeOut").click((event) => $(".js-image-b").fadeOut() )
  $(".js-fadeIn").click((event) => $(".js-image-b").fadeIn() )
  $(".js-fadeToggle").click((event) => $(".js-image-b").fadeToggle() )
}

function animateExample() {
  $(".js-animate").click((event) => $(".js-image-c").animate({
      left: [ "+=200", "swing" ],
      opacity: [ 0.5, "linear" ]
    }, 400, () => { $(".js-image-c").animate({
      left: [ "-=200", "swing" ],
      opacity: [ 1, "linear" ]
    }, 400) })
  );
}