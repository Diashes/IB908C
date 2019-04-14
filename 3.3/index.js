/**
 * Created by Amanda on 7/23/2015.
 */

$(document).ready(function(){

    // Window Egenskaper
    $("#navigator").text(window.navigator);
    $("#screen").text(window.screen);
    $("#location").text(window.location);
    window.defaultStatus = "Det här är standardtext som finns i statusbaren.";
    $("#defaultStatus").text(window.defaultStatus);
    window.status = "Det här är text som finns i statusbaren.";
    $("#status").text(window.status);
    $("#screenLeft").text(window.screenLeft);
    $("#screenTop").text(window.screenTop);
    $("#screenX").text(window.screenX);
    $("#screenY").text(window.screenY);
    $("#innerHeight").text(window.innerHeight);
    $("#innerWidth").text(window.innerWidth);
    $("#outerHeight").text(window.outerHeight);
    $("#outerWidth").text(window.outerWidth);
    $("#pageXOffset").text(window.pageXOffset);
    $("#pageYOffset").text(window.pageYOffset);

    // Window Metoder
    $("#alert-Example").click(function(){
       alert("Alert Exempel!");
    });

    $("#confirm-Example").click(function(){
        confirm("Confirm Exempel!");
    });

    $("#prompt-Example").click(function(){
        prompt("Prompt Exempel!");
    });

    $("#open-Example").click(function(){
        open("http://google.se/");
    });

    $("#close-Example").click(function(){
        close();
    });

    $("#focus-Example").click(function(){
        var myWindow = window.open("", "", "width=200, height=200");
        myWindow.document.write("<p>Ett nytt fönster som har fokus!</p>");
        myWindow.focus();
    });

    $("#blur-Example").click(function(){
        var myWindow = window.open("", "", "width=200, height=200");
        myWindow.document.write("<p>Ett nytt fönster som INTE har fokus!</p>");
        myWindow.blur();
    });

    $("#setInterval-Example").click(function(){
        var interval = setInterval(function(){ alert("Du har satt på att popup ska visas med 3000 millisekunders intervall. Meddelandet upprepas tills du kör clearInterval-exemplet."); }, 3000);
        $("#clearInterval-Example").click(function(){
            clearInterval(interval);
        });
    });

    $("#setTimeout-Example").click(function(){
        var timeout = setTimeout(function(){ alert("Det här meddelandet visades med en 3000 millisekuners fördröjning. Körs bara en gång."); }, 3000);
        $("#clearTimeout-Example").click(function(){
            alert("Om du hann trycka på clearTimeout-exemplet efter att du tryckt på setTimeout-exemplet men innan du sett en popup så har du avbrutit setTimeout.")
            clearTimeout(timeout);
        });
    });

    $("#moveBy-Example").click(function(){
        var myWindow = window.open('', '', 'width=200, height=200');
        myWindow.document.write("<p>Det här fönstret är nerflyttat med 'moveBy'</p>");
        myWindow.moveBy(250, 250);
        myWindow.focus();
    });

    $("#moveTo-Example").click(function(){
        var myWindow = window.open('', '', 'width=200, height=200');
        myWindow.document.write("<p>Det här fönstret är flyttat till 500, 100 med 'moveTo'</p>");
        myWindow.moveTo(500, 100);
        myWindow.focus();
    });

    $("#resizeBy-Example").click(function(){
        var myWindow = window.open('', '', 'width=200, height=200');
        myWindow.document.write("<p>Det här fönstrets storlek har ändrats till 350, 350 med 'resizeBy' i relation till sin nuvarande position.</p>");
        myWindow.resizeBy(350, 350);
        myWindow.focus();
    });

    $("#resizeTo-Example").click(function(){
        var myWindow = window.open('', '', 'width=200, height=200');
        myWindow.document.write("<p>Det här fönstrets storlek har ändrats till 550, 350 med 'resizeTo'</p>");
        myWindow.resizeTo(550, 350);
        myWindow.focus();
    });

    $("#scrollBy-Example").click(function(){
        window.scrollBy(0, 100);
    });

    $("#scrollTo-Example").click(function(){
        window.scrollTo(0, 100);
    });

    $("#print-Example").click(function(){
        window.print();
    });

    // Navigator Egenskaper

    $("#appCodeName").text(navigator.appCodeName);
    $("#appName").text(navigator.appName);
    $("#appVersion").text(navigator.appVersion);
    $("#platform").text(navigator.platform);
    $("#userAgent").text(navigator.userAgent);

    // Screen Egenskaper

    $("#width").text(screen.width);
    $("#height").text(screen.height);
    $("#availWidth").text(screen.availWidth);
    $("#availHeight").text(screen.availHeight);
    $("#colorDepth").text(screen.colorDepth);
    $("#pixelDepth").text(screen.pixelDepth);

    // Location Egenskaper

    $("#host").text(location.host);
    $("#hostname").text(location.hostname);
    $("#port").text(location.port);
    $("#href").text(location.href);
    $("#protocol").text(location.protocol);
    $("#pathname").text(location.pathname);
    $("#hash").text(location.hash);
    $("#search").text(location.search);

    // Location Metoder

    $("#assign-Example").click(function(){
        location.assign("http://www.w3schools.com");
    });

    $("#reload-Example").click(function(){
        location.reload();
    });

    $("#replace-Example").click(function(){
        location.replace("http://www.google.com/");
    });

});