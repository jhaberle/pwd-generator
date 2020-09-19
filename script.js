// ---------------Global Vars-------------------------

var underCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var finalPassword = [];


// --------------------------------------------------



function generateNumber() {
    alert("Password Generator - Answer the following questions to determine specific aspects of your new password to be created.");
    var confirmOpen = confirm("how may characters would you like your password to be (must be between 8 and 128)");
    console.log(confirmOpen);

    if (confirmOpen < 8 || confirmOpen > 128) { 
        alert("Your password must be between 8 and 128 characters long");
        return;
    }
    // } else if 
    //     (confirmOpen > 128) {
    //     alert("your password must be less than 128 characters");
    //     return
        
    // }

    for (var i = 0; i < confirmOpen; i++) {
        if (underCaseConfirm) {
            var newUndercase = undercase[Math.floor(math.random() * undercase.length)];
            finalPassword.push(newUndercase);
        } else {
            return;
        }
        if (upperCaseConfirm) {
            var newUppercase = undercase[Math.floor(math.random() * undercase.length)];
            finalPassword.push(newUppercase);
        } else {
            return;
        }
        if (specCharConfirm) {
            var newSpecialChar = undercase[Math.floor(math.random() * undercase.length)];
            finalPassword.push(newSpecialChar);
        } else {
            return;
        }
        if (numberConfirm) {
            var newNumber = undercase[Math.floor(math.random() * undercase.length)];
            finalPassword.push(newNumber);
        } else {
            return;
        }
    }

    var underCaseConfirm = alert("Do you want undercase letters in your password?");

    var upperCaseConfirm = alert("Do you want capitalized letters in your password?");

    var specCharConfirm = alert("Do you want special characters in your password?");

    var numberConfirm = alert("Do you want numbers in your password?");


}
    
generateNumber();
