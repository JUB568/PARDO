function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

function getUserInput() {
    let userInput = prompt("Enter a number:");
    
    let number = Number(userInput);

    if (!isNaN(number)) {
        checkEvenOdd(number);
    } else {
        console.log("Invalid input! Please enter a valid number.");
    }
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

getUserInput();