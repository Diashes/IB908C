$(function () {
  changePropertyExample();
  changeTextExample();
  removeElementExample();
  getInformationExample();
  addBorderExample();
  removeBorderExample();
  mouseEventsExample();
  windowEventWidthExample();
  formEventsExample();
  keyCodeEventsExample();
  jQueryExample();
  evtPropertyExample();
  preventDefaultExample();
  offEventExample();
});

function changePropertyExample() {
  $("#changePropertyExampleButton").click(function () {
    $("#changePropertyExampleDiv").css("background", "red");
  });
}

function changeTextExample() {
  $("#changeTextExampleButton").click(function () {
    $("#changeTextExampleDiv").text("Hello World!");
  });
}

function removeElementExample() {
  $("#removeElementExampleButton").click(function () {
    $("#removeElementExampleDiv").remove();
  });
}

function getInformationExample() {
  $("#getInformationExampleButton").click(function () {
    alert("Utvunnen information: " + $("#getInformationExampleInput").val())
  });
}

function addBorderExample() {
  $("#addBorderExampleButton").click(function () {
    $("#changeBorderExampleDiv").addClass("border");
  });
}

function removeBorderExample() {
  $("#removeBorderExampleButton").click(function () {
    $("#changeBorderExampleDiv").removeClass("border");
  });
}

function mouseEventsExample() {
  $("#mouseEventsExampleDiv").mouseover(function () {
    $(this).css("background", "red");
  });
  $("#mouseEventsExampleDiv").mouseout(function () {
    $(this).css("background", "yellow");
  });
}

function windowEventWidthExample() {
  $("#windowEventWidthExampleSpan").text($(window).width());
  $("#windowEventHeightExampleSpan").text($(window).height());
  $(window).resize(function () {
    $("#windowEventWidthExampleSpan").text($(window).width());
    $("#windowEventHeightExampleSpan").text($(window).height());
  });
}

function formEventsExample() {
  $("#formEventsExampleInput").focus(function () {
    $(this).css("background-color", "#cccccc");
    $(this).blur(function () {
      $(this).css("background-color", "#ffffff");
    });
  });
}

function keyCodeEventsExample() {
  $(document).keydown(function (e) {
    if (e.keyCode == 37) $("#keyCodeEventsExampleDiv").animate({ left: "-=5" }, 0);
    if (e.keyCode == 39) $("#keyCodeEventsExampleDiv").animate({ left: "+=5" }, 0);
  });
}

function jQueryExample() {
  $("#hoverExampleButton").hover(function () {
    $("#hoverExampleDiv").toggle(50);
  }, function () {
    $("#hoverExampleDiv").toggle(50);
  });
  $("#toggleExampleButton").click(function () {
    $("#toggleExampleDiv").toggle(50);
  });
}

function evtPropertyExample() {
  $(document).mousemove(function (e) {
    $("#evtPropertyExampleDiv").text("Position-X: " + e.pageX + ", Position-Y: " + e.pageY);
  });
}

function preventDefaultExample() {
  $("#example12-button").click(function (e) {
    e.preventDefault();
    alert("Du förhindrade standardbeteendet.");
  });
}

function offEventExample() {
  $("#example13-checkbox").click(function () {
    $("#example13-div").html("Klicka!");
    $("#example13-div").click(function () {
      alert("Klickad!");
      $(this).off("click");
      $("#example13-checkbox").prop("checked", false);
      $(this).text("Oklickbar...");
    });
  });
}