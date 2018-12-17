var saveData = function($){

    var $localTextField = $("#localStorageMessage");
    var $sessionTextField = $("#sessionStorageMessage");
    var $jsonTextField = $("#jsonStorageMessage");

    window.addEventListener("storage", refresh);

    refresh();

    $localTextField.keyup(addToLocalStorage);
    $sessionTextField.keyup(addToSessionStorage);
    $jsonTextField.keyup(addJsonToLocalStorage);

    function addToLocalStorage(){
        localStorage.setItem("localStorageMessage", $(this).val());
        refresh();
    }

    function addToSessionStorage(){
        sessionStorage.setItem("sessionStorageMessage", $(this).val());
        refresh();
    }

    function addJsonToLocalStorage(){
        localStorage.setItem("jsonStorageMessage", JSON.stringify($(this).val()));
        refresh();
    }

    function refresh(){
        $localTextField.val(localStorage.getItem("localStorageMessage"));
        $sessionTextField.val(sessionStorage.getItem("sessionStorageMessage"));
        $jsonTextField.val(JSON.parse(localStorage.getItem("jsonStorageMessage")));
    }

};

saveData(jQuery);
