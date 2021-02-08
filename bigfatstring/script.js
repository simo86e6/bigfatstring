"use strict";

window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("Start");
    document.getElementById("generate_output").addEventListener("click", generateOutput);
    document.getElementById("clear").addEventListener("click", clear);
}

function generateOutput() {
    console.log("Button clicked");
    let userInput = document.getElementById("user_input").value;
    console.log("The user entered: " + userInput);

    let chosenDropdownOption = document.getElementById("user_choices").value;
    let output = "";
    let insertIntoSpan = document.getElementById("output_from_input");
    console.log(chosenDropdownOption);

    switch(chosenDropdownOption){
        case "0":
            output = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        break;
        case "1":
            //Substring skal have em start og slut værdi(index position). 0 = Det første tegn. 
            //indexOf skal have en streng foran sig (her er det UserInput). Den skal inde i () vide hvornår den skal stoppe.
            //Dette giver så index nummeret, som kan benyttes i substringen som slutværdi. 
            output = userInput.substring(0, userInput.indexOf(" "));
        break;
        case "2": // Hvis strengen indeholder et " " (mellemrum) så skal....
            if(userInput.includes(" ") ) {
                output = userInput.substring(0, userInput.indexOf(" ")).length;
            }else {
                output = userInput.length;
            } 
           
        break;
        case "3":
            let startIndex = userInput.indexOf(" ");
            let endIndex = userInput.lastIndexOf(" ");
            let input = userInput.substring(startIndex, endIndex);
            output = "startIndex: " + startIndex + " End Index: " + endIndex + " " + input;
        break;
        case "4":
            if(userInput.includes(".png")) {
                output = "This is a png file";
            }else if(userInput.includes(".jpg")) {
                output = "This is a jpg file";
            }else{
                output = "This a not a png or jpg file";
            }
           
        break;
        case "5":
            //Step 1: i bliver defineret. Step 2: Tjek om i er mindre end længden af input strengen. 
            //Step 3: i skal stige med 1, hvor gang loopet er kørt færdigt
            for(let i = 0; i < userInput.length; i++){
                //Der bliver tilføjet en stjerne for hver gang loopet kører. 
                output += "*";
            }
        break;
        case "6":
            let twoFirstLetters = userInput.substring(0, 2);
            let upperCaseLetter = userInput.charAt(2).toUpperCase();
            let restOfTheLetters = userInput.substring(3);
            output = twoFirstLetters + upperCaseLetter + restOfTheLetters;
        break;
        case "7":
            output = "";
        break;

    }

let p = document.createElement("P");
p.innerHTML = output;
insertIntoSpan.appendChild(p);

console.log(output);

}

function clear(){
    document.getElementById("output_from_input").innerHTML = "";
}