/* 
To output the rest of the sentence after the first
occurrence of the letter in the sentence if it exists
Otherwise, If the letter does not exist in the sentence, output“The letter does not exist in the
sentence”.
*/


function check() {

    var sentence = document.getElementById('sentence').value;  // Getting the sentence
    var letter = document.getElementById('letter').value;       // Getting the letter
    var index = sentence.indexOf(letter);                       // Finding the character location in sentence
    if (sentence === "" || letter === '') {                     // Check if the inputs are missing
        var result = document.getElementById("temp");
        result.innerHTML = "Input missing";                 
    }
    else {
        if (index === -1) {
            var result = document.getElementById("temp");
            result.innerHTML = "The letter does not exist in the sentence";
        } else {
            var result = document.getElementById("temp");
            result.innerHTML = sentence.substring(index + 1);

        }
    }
}
