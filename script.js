function checkTypes() {
  var name = "Riya";
  var score = 95;
  var isReady = true;

  document.getElementById("typeResult").innerHTML =
    "Name: " + typeof name + "<br>" +
    "Score: " + typeof score + "<br>" +
    "Is Ready: " + typeof isReady;
}

function convertTypes() {
  var marksText = "88";
  var marksNumber = Number(marksText);
  var age = 12;
  var ageText = String(age);

  document.getElementById("convertResult").innerHTML =
    '"88" as a number: ' + marksNumber + "<br>" +
    "Type: " + typeof marksNumber + "<br><br>" +
    "12 as text: " + ageText + "<br>" +
    "Type: " + typeof ageText;
}

function replaceText() {
  var sentence = "I like maths because maths is fun.";
  var newSentence = sentence.replace("maths", "coding");

  document.getElementById("replaceResult").innerHTML =
    "Original: " + sentence + "<br><br>" +
    "Fixed: " + newSentence;
}
function catchError() {
  try {
    var result = totalMarks + 10; 
    document.getElementById("errorResult").innerHTML = "Result: " + result;
  }
  catch(error) {
    document.getElementById("errorResult").innerHTML =
      "Oops! An error was caught: " + error.message;
  }
}