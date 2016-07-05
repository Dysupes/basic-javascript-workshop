// This is the first step in Workshop 1.


// This function will reveal the first letter of the word and print it
function firstLetter (word) {
    console.log(word[0]);
};

firstLetter("Dylan");

firstLetter("");

firstLetter("Superman");

// This function should print the last letter of the string

function lastLetter(word) {
    console.log(word[word.length - 1]);
};

lastLetter("Dylan");

lastLetter("");

lastLetter("Emma");

/* This function takes a string and a number and print a character
    FYI: pono is Korean for number :) */
    
function character(word,pono) {
    console.log(word[pono]);
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