// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log('Original message:', message);

// Use the length property to obtain the length of the string
let messageLength = message.length;
console.log('Length of message:', messageLength);

// Task 2: Converting Cases
let text = "Hello, World!";
console.log('Original text:', text);

// Use the toUpperCase method to convert the string to uppercase
let upperCaseText = text.toUpperCase();
console.log('Uppercase text:', upperCaseText);

// Use the toLowerCase method to convert the string to lowercase
let lowerCaseText = text.toLowerCase();
console.log('Lowercase text:', lowerCaseText);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log('Original sentence:', sentence);

// Use the substring method to extract a substring from the original string
let substring = sentence.substring(4, 9);
console.log('Extracted substring:', substring);

// Task 4: Splitting Strings
sentence = "The quick brown fox";
console.log('Original sentence:', sentence);

// Use the split method to split the string into an array of words based on the space delimiter
let words = sentence.split(' ');
console.log('Split into words:', words);
