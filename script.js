// To initialize counters for sentence length, word count, and vowel count
let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

// To define a set of vowels for easy checking
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

// To read the sentence
const sentence = prompt("Enter a sentence ending with a period:");

// To initialize a flag to track the start of a word
let inWord = false;

// To process each character in the sentence
for (let char of sentence) {
    // Increment sentence length for each character
    sentenceLength++;
    
    // To Check if the character is a vowel
    if (vowels.has(char)) {
        vowelCount++;
    }

    // To Check for spaces and count words
    if (char === ' ') {
        if (inWord) {
            wordCount++;
            inWord = false;
        }
    } else if (char === '.') {
        if (inWord) {
            wordCount++; // Count the last word before the period
        }
    } else {
        inWord = true; // We're inside a word
    }
}

// Display the results
console.log("Length of the sentence:", sentenceLength);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
