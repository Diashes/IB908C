var $imagefileDropbox = $( "#imagefile-dropbox" );
var $imagefileInput = $( "#imagefile-input" );
var $imagefileImg = $( "#imagefile-img" );
var $textfilesAddButton = $( "#textfiles-add-button" );
var $textfilesInput = $( "#textfiles-input" ); 

$imagefileDropbox.on( "dragenter", function( event ) {
  event.stopPropagation();
  event.preventDefault();
} );

$imagefileDropbox.on( "dragover", function( event ) {
  event.stopPropagation();
  event.preventDefault();
} );

$imagefileDropbox.on( "drop", function( event ) {
  event.stopPropagation();
  event.preventDefault();
  handleImageFiles(event.originalEvent.dataTransfer.files);
} );

$textfilesAddButton.on( "click", function( event ) {
  event.stopPropagation();
  event.preventDefault();
  handleURL( $textfilesInput.val() );
} );

function handleImageFiles( files ) {
  var objectURL = window.URL.createObjectURL(files[0]);
  $imagefileImg.attr( "src", objectURL );
}

function handleURL( url ) {
  console.log("url", url);
}
