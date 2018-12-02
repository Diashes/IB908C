var storageType = localStorage.getItem( "storageType" );
var SESSION_STORAGE = "sessionstorage";
var LOCAL_STORAGE = "localstorage";

$( "#delete-sessionstorage" ).click( deleteSessionstorage );
$( "#delete-localstorage" ).click( deleteLocalstorage );

if ( storageType === LOCAL_STORAGE )
{
  $( "#sessionstorage-fieldset" ).hide();
}

if ( storageType === SESSION_STORAGE )
{
  $( "#localstorage-fieldset" ).hide();
}

onstorage = update;
onstorage();

function update()
{
  var localstoreObject = localStorage.getItem( LOCAL_STORAGE );
  var sessionstoreObject = sessionStorage.getItem( SESSION_STORAGE );
  $( "#localstorage" ).val( JSON.parse( localstoreObject ).value );
  $( "#sessionstorage" ).val( JSON.parse( sessionstoreObject ).value );
}

function deleteLocalstorage()
{
  localStorage.clear();
}

function deleteSessionstorage()
{
  sessionStorage.clear();
}
