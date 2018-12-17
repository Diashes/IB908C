var showData = function($){

    window.addEventListener("storage", refresh, false);

    var $localText = $("#localStorageMessage");
    var $sessionText = $("#sessionStorageMessage");
    var $jsonText = $("#jsonStorageMessage");
    var $deleteButton = $("#deleteButton");

    $deleteButton.click(deleteData);

    refresh();

    function deleteData(){
        localStorage.removeItem("localStorageMessage");
        sessionStorage.removeItem("sessionStorageMessage");
        localStorage.removeItem("jsonStorageMessage");
        refresh();
    }

    function refresh(){
        console.log("Refreshing...");
        $localText.html(localStorage.getItem("localStorageMessage"));
        $sessionText.html(sessionStorage.getItem("sessionStorageMessage"));
        $jsonText.html(JSON.parse(localStorage.getItem("jsonStorageMessage")));
    }

};

showData(jQuery);
