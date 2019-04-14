var array = [];
function arrayExample() {
  var itemText = document.getElementById("itemTextField").value;
  array.push(itemText);
  document.getElementById("arrayResult").innerHTML = array;
}

function booleanExample() {
  var firstNumber = parseInt(document.getElementById("firstNumber").value);
  var secondNumber = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("booleanResult").innerHTML = Boolean(firstNumber > secondNumber);
}

document.getElementById("dateExample").innerHTML = new Date();
document.getElementById("mathExample").innerHTML = "Math.PI: " + Math.PI;
document.getElementById("numberExample").innerHTML = "Number.MAX_VALUE: " + Number.MAX_VALUE;

function stringExample() {
  var word = 'i love strings';
  document.getElementById("stringResult").innerHTML = word.split(" ");
}

function regExpExample() {
  var wordToFind = document.getElementById("searchString").value;
  if (wordToFind.length > 0) {
    var textToSearch = document.getElementById("textToSearch").innerHTML;
    if (textToSearch.match(new RegExp(wordToFind, "gi")) !== null) {
      var count = textToSearch.match(new RegExp(wordToFind, "gi")).length;
      document.getElementById("regExpResult").innerHTML = count.toString();
    }
    else { document.getElementById("regExpResult").innerHTML = '0'; }
  }
  else {
    document.getElementById("regExpResult").innerHTML = '0';
  }
}

function isNaNExample(num) {
  document.getElementById("isNaNExample").innerHTML = isNaN(num);
}