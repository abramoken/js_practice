 
 // CHALLENGE 4: CAPITALIZE LETTERS
 // Return a string with the first letter of every word capitalized
 // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
 function capitalizeLetters(str) {
 
     let splitStr = str.split(' ');
     let newStr = [];
     let firstLetter, capitalizeFirstLetter, word, capitalizeWord;
 
     for(let i = 0; i < splitStr.length; i++) {      
         word = splitStr[i];
         firstLetter = word[0];
         capitalizeFirstLetter = firstLetter.toUpperCase();
         capitalizeWord = word.replace(firstLetter, capitalizeFirstLetter);
         newStr.push(capitalizeWord);
     }
     
 }
 