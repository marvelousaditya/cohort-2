// strings are immutable , so any function creates a new string


let nam = " aditya singh ";

console.log(nam.length); // finds length of string

console.log(nam.indexOf("y")); // gives index of the specified character

console.log(nam.lastIndexOf("a")); // gives last index of the specified character

console.log(nam.slice(6, nam.length)); // returns a new string from specified index to specified index

console.log(nam.substring(6, nam.length));
// similar to slice , difference is if startIndex is greater than endIndex it swaps them and it treats negative index as zero while slice treats negative index as index from the end

console.log(nam.replace("aditya", "aditi")); // replaces the word with another word

console.log(nam.split(" ")); // splits the string into an array , whenever the specified separator is met

console.log(nam.trim()); // removes spaces from start and end of string if there are any

console.log(nam.toUpperCase());

console.log(nam.toLowerCase());
