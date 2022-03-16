// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

    const revNumber = int
       .split("")
       .reverse()
       .map(function(t) {
         return parseInt(t);
       });
     return revNumber;
   
 }
 