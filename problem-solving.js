var palCheck = function(word) {
    //initialize a variable to store reversed string
    var reverse = "";
    //find the length of the string
    // console.log(word.length);
    //get the last letter of the word
    for (var length = word.length; length > 0; length--) {
        // console.log(length);
        var letter = word[length - 1];
        // console.log(letter);
        reverse += letter;
        // console.log(reverse);
    }
    // next step is to see if palCheck and reverse are equal, 
    // if true return (word) is a pallindrome
    // if not return (word) is not a pallindrome
    if (word == reverse) {
        console.log(word + " is a palindrome!");
    }
    else {
        console.log(word + " is not a palindrome!");
    }
}
palCheck("JamesOrduno");
palCheck("madam");
// Does it work with capitalized first letter?
palCheck("Ana");
