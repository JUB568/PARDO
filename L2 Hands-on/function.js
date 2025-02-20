function addNumbers(a, b) {
    return a + b
    }

    function getValidNumber(promptMessage) {
        let num;
        do {
            num = prompt(promptMessage);
        } while (isNaN(num) || num.trim() === "");
    
        return parseFloat(num);
    }


let a = getValidNumber("Enter First Number: ")
let b = getValidNumber("Enter second Number: ")


let result = addNumbers(a, b);

console.log("Total Number: " + result);
alert("Total Number: " + result);