var SESSION_STORAGE = "sessionstorage";
var LOCAL_STORAGE = "localstorage";

$( "#save-localstorage" ).click( saveLocalstorage );
$( "#show-localstorage" ).click( showLocalstorage );
$( "#save-sessionstorage" ).click( saveSessionstorage );
$( "#show-sessionstorage" ).click( showSessionstorage );

onstorage = update;
onstorage();

function update()
{
  var localstoreString = localStorage.getItem( LOCAL_STORAGE );
  var localstoreObject = JSON.parse( localstoreString );
  var localstoreValue = localstoreObject && localstoreObject.value;
  var sessionstoreString = sessionStorage.getItem( SESSION_STORAGE );
  var sessionstoreObject = JSON.parse( sessionstoreString );
  var sessionstoreValue = sessionstoreObject && sessionstoreObject.value;
  $( "#localstorage" ).val( localstoreValue );
  $( "#sessionstorage" ).val( sessionstoreValue );
}

function saveLocalstorage()
{
  var localstoreObject = { value: $( "#localstorage" ).val() };
  localStorage.setItem( LOCAL_STORAGE, JSON.stringify( localstoreObject ) );
}

function showLocalstorage()
{
  localStorage.setItem( "storageType", LOCAL_STORAGE );
  window.open( "3.5.1.result.html", "_blank" );
}

function saveSessionstorage()
{
  var sessionstoreObject = { value: $( "#sessionstorage" ).val() };
  sessionStorage.setItem( SESSION_STORAGE, JSON.stringify( sessionstoreObject ) );
}

function showSessionstorage()
{
  localStorage.setItem( "storageType", SESSION_STORAGE );
  newwindow = window.open( "3.5.1.result.html", "name", "height=300,width=450" );
  if (window.focus) { newwindow.focus() }
  return false;
}