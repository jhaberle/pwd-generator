// ---------------Global Vars-------------------------

var underCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var finalPassword = [];

var passwordJoin = [];


// --------------------------------------------------



function generateNumber() {
    alert("Password Generator - Answer the following questions to determine specific aspects of your new password to be created.");
    var confirmOpen = prompt("how may characters would you like your password to be (must be between 8 and 128)");
    console.log(confirmOpen);

    if (confirmOpen < 8 || confirmOpen > 128) { 
        alert("Your password must be between 8 and 128 characters long");return
       
    } 
    else if (confirmOpen > 8 || confirmOpen < 128)
        console.log("your number is between 8 and 128");
    
        var underCaseConfirm = confirm("Do you want undercase letters in your password?");
        console.log(underCaseConfirm);

        var upperCaseConfirm = confirm("Do you want capitalized letters in your password?");
        console.log(upperCaseConfirm);

        var specCharConfirm = confirm("Do you want special characters in your password?");
        console.log(specCharConfirm);

        var numberConfirm = confirm("Do you want numbers in your password?");
        console.log(numberConfirm);
    
    
    
    // } else if 
    //     (confirmOpen > 128) {
    //     alert("your password must be less than 128 characters");
    //     return
        
    // }

    for (var i = 0; i < confirmOpen; i++) {
        if (underCaseConfirm) {
            var newUndercase = underCase[Math.floor(Math.random() * underCase.length)];
            passwordJoin.push(newUndercase);
            // console.log(newUndercase);
        } else {
            return;
        }
        if (upperCaseConfirm) {
            var newUppercase = upperCase[Math.floor(Math.random() * upperCase.length)];
            passwordJoin.push(newUppercase);
            // console.log(newUppercase);
        } else {
            return;
        }
        if (specCharConfirm) {
            var newSpecialChar = specChar[Math.floor(Math.random() * specChar.length)];
            passwordJoin.push(newSpecialChar);
            // console.log(newSpecialChar);
        } else {
            return;
        }
        if (numberConfirm) {
            var newNumber = number[Math.floor(Math.random() * number.length)];
            passwordJoin.push(newNumber);
            // console.log(newNumber);
        } else {
            return;
        }
    }

console.log(finalPassword);

  for (var i = 0; i < confirmOpen; i++) {
    var finalPassword = passwordJoin[Math.floor(Math.random() * passwordJoin.length)];
    passwordJoin.push(finalPassword)
    console.log (passwordJoin);
    document.getElementById("final-password").innerHTML = passwordJoin.join(""); 
  }
}

    
generateNumber();
