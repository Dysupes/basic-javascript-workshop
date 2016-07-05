// This is Workshop 1.


// This function will reveal the first letter of the word and print it
function firstLetter (word) {
    console.log(word[0]);
};

firstLetter("Dylan");

firstLetter("");

firstLetter("Superman");

// This function should print the last letter of the string

function lastLetter(mot) {
    console.log(mot[mot.length - 1]);
};

lastLetter("Dylan");

lastLetter("");

lastLetter("Emma");

/* This function takes a string and a number and print a character
    FYI: pono is Korean for number :) */
    
function character(char,pono) {
    console.log(char[pono]);
};

character("George",2);

character("unicorn",5);

character("",0);

// This function takes two number inputs and prints the sum

function addition(num1, num2) {
    console.log(num1 + num2);
};

addition(2,4);

addition(465,978);

addition(3,12);

// This function takes two numbers and multiplies them (if input is not a number, NaN returns)

function multiplication(numb1, numb2) {
    console.log(numb1 * numb2);
};

multiplication(67,33);

multiplication(200,965);

multiplication(200,"Sam");

// This function explores if and else

function options(words,n1,n2) {
    if (words === "add") {
        console.log(n1 + n2);
    } else if (words === "subtract") {
        console.log(n1 - n2);
    } else if (words === "mult") {
        console.log(n1 * n2);
    } else if (words === "div") {
        console.log(n1 / n2);
    } else {
        console.log(0);
    }
};

options("add",2,67);

options("subtract",98,56);

options("mult",56,87);

options("div",98,7);

// This function repeats a string to correspond to the number input

function repeat(sent,mult1) {
    for(var i = mult1; i > 0; i = i - 1){
    console.log(sent);

    };    
};

repeat("Javascript is fun!",4);

repeat("Javascript is getting harder!",7);

repeat("I'm getting on just fine so far!",8);

// This function should take a string and reverse it

function reverse(sent1) {
    var reversed = "";                               // Reversed as an empty string helps it to start 
    for(var i = sent1.length - 1; i >= 0; i--) {    // Sets it to decline from the end
        reversed = reversed + sent1[i];             // Allows the string to concatenate
    };
    return reversed;                                // Allows it to keep being used over and over
};

console.log(reverse("Dylan"));

console.log(reverse("waterfall"));

console.log(reverse("earth"));

// This function returns the factorial of a number

function factorial(numbers1) {
	var fact = 1;
	for(var i = numbers1; i > 0; i--){
		fact = fact * i;
	};
	return fact;
};

console.log(factorial(5));

console.log(factorial(8));

console.log(factorial(45));

// This function returns the longest word in a sentence

function longestWord(phrase){
    var longWord = phrase.split(" ");
    var longerWords = "";
    
    longWord.forEach(function(word) {
    if (word.length > longerWords.length) {
            longerWords = word;
        };
    });    

return longerWords    
};

console.log(longestWord("The Pyramids are in Egypt"));