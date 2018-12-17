var drawingApp = function($) {

    "use strict";

    // SETTINGS ============================================== //

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var paint;
    var mouse = { x:0, y:0 };

    var clickX = [];
    var clickY = [];
    var clickDrag = [];
    var clickTool = [];
    var clickColor = [];
    var clickSize = [];
    var clickGradient = [];
    var clickTransparency = [];
    var clickShadow = [];

    var selectedTool = "pencil";
    var selectedColor = "#000000";
    var selectedSize = 5;
    var selectedGradient = false;
    var selectedTransparency = 1;
    var selectedShadow = 20;
    var text = "Hello World!";

    var $canvas = $("#canvas");
    var $clear = $("#clear");
    var $imageButton = $("#image");
    var $patternButton = $("#pattern");
    var $gradientButton = $("#gradient");
    var $transparencyButton = $("#transparency");
    var $shadowButton = $("#shadow");
    var $downloadButton = $("#download");

    var toolButtons = $("#toolButtons").find(".buttonGroup-button");
    var colorButtons = $("#colorButtons").find(".buttonGroup-button");
    var sizeButtons = $("#sizeButtons").find(".buttonGroup-button");
    var effectButtons = $("#effectButtons").find(".buttonGroup-button");

    var tools = [$("#pencil"), $("#eraser"), $("#path"), $("#line"), $("#text"), $("#circle"), $("#square")];
    var colors = [$("#red"), $("#black"), $("#yellow"), $("#green"), $("#blue")];
    var sizes = [$("#xs"), $("#s"), $("#m"), $("#l"), $("#xl")];


    // BIND EVENTS ============================================== //

    $canvas.mousedown(startPaint);
    $canvas.mousemove(trackMouse);
    $canvas.mousemove(painting);
    $canvas.mousedown(painting);
    $canvas.mouseup(stopPainting);

    $clear.click(clearCanvas);
    $imageButton.click(insertImage);
    $patternButton.click(insertPattern);
    $downloadButton.click(downloadImage);

    toolButtons.click(changeTool);
    colorButtons.click(changeColor);
    sizeButtons.click(changeSize);


    // PAINTING ============================================== //

    function startPaint(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;

        paint = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
    }

    function trackMouse(e) {
        if(paint == true){
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }
    }

    function updateSettings(){
        clickTool.push(selectedTool);
        clickSize.push(selectedSize);
        clickColor.push(selectedColor);
        clickGradient.push(selectedGradient);
        clickTransparency.push(selectedTransparency);
        clickShadow.push(selectedShadow);
    }

    function painting(){
        if (paint == true) {

            if ($transparencyButton.prop("checked")) { selectedTransparency = 0.05; }
            else { selectedTransparency = 1; }

            if ($shadowButton.prop("checked")) {
                selectedShadow = 20; }
            else { selectedShadow = 0; }

            updateSettings();

            if (selectedTool == "eraser") {
                context.strokeStyle = "#FFFFFF";
                context.fillStyle = "#FFFFFF";

            } else if ($gradientButton.prop("checked")) {
                selectedGradient = context.createLinearGradient(0,0,0,300);
                selectedGradient.addColorStop(0,selectedColor);
                selectedGradient.addColorStop(1,"white");
                clickColor.push(selectedGradient);
                context.strokeStyle = clickColor[clickColor.length-1];
                context.fillStyle = clickColor[clickColor.length-1];

            } else {
                context.strokeStyle = clickColor[clickColor.length-1];
                context.fillStyle = clickColor[clickColor.length-1];
            }

            if (selectedTool == "path"){
                context.quadraticCurveTo(mouse.x-130, mouse.y-20, mouse.x-50, mouse.y-120);
                context.bezierCurveTo(mouse.x+290, mouse.y-40, mouse.x+300, mouse.y+200, mouse.x+400, mouse.y+150);
                context.lineTo(mouse.x+500, mouse.y+90);

            } else if (selectedTool == "line"){
                context.lineTo(mouse.x - 150, mouse.y + 150);

            } else if (selectedTool == "text"){
                context.font = 'italic 40pt Calibri';
                context.fillText(text, mouse.x, mouse.y);

            } else if (selectedTool == "circle"){
                context.fill();
                context.arc(mouse.x-50, mouse.y, 50, 0, 2 * Math.PI);

            } else if (selectedTool == "square"){
                context.fill();
                context.rect(mouse.x, mouse.y, 200, 200);
            }

            context.lineWidth = clickSize[clickSize.length-1];
            context.lineJoin = "round";
            context.globalAlpha = clickTransparency[clickTransparency.length-1];
            context.shadowBlur = clickShadow[clickShadow.length-1];
            context.shadowColor = "#666666";

            if (selectedTool == "pencil" || selectedTool == "eraser"){
                context.lineTo(mouse.x, mouse.y);
            }

            context.stroke();
        }
    }

    function stopPainting(){
        paint = false;
    }

    // EXECUTE EVENTS ============================================== //

    function clearCanvas() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        clickX = [];
        clickY = [];
        clickDrag = [];
        clickTool = [];
        clickColor = [];
        clickSize = [];
        clickGradient = [];
        clickTransparency = [];
        clickShadow = [];
    }

    function changeTool() {
        for(var i = 0; i < tools.length; i++) { tools[i].removeClass("active"); }
        $(this).addClass("active");
        selectedTool = $(this).attr("value");
    }

    function changeSize() {
        for(var i = 0; i < sizes.length; i++) { sizes[i].removeClass("active"); }
        $(this).addClass("active");
        selectedSize = $(this).attr("value");
    }

    function changeColor() {
        for(var i = 0; i < colors.length; i++) { colors[i].removeClass("active"); }
        $(this).addClass("active");
        selectedColor = $(this).attr("value");
    }

    function insertImage(){
        var imageObj = new Image();
        imageObj.onload = function() {
            context.drawImage(imageObj, 69, 50);
        };
        imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
    }

    function insertPattern(){
        var imageObj = new Image();
        imageObj.onload = function() {
            var pattern = context.createPattern(imageObj,"repeat");
            context.rect(0,0,context.canvas.width,context.canvas.height);
            context.fillStyle = pattern;
            context.fill();
        };
        imageObj.src = 'http://lottabruhn.typepad.com/lotta_bruhn_illustration/images/2008/01/18/elephant_pattern.gif';
    }

    function downloadImage() {
        this.href = document.getElementById("canvas").toDataURL();
        this.download = "myPainting.png";
    }

};

drawingApp(jQuery);