
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
  
    return revString === str;
  
    ///////////////////////
  
  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali

   /////////////////////////////

  // for (i=0; i<str.length/2; i++) {
  //     if (str[i]!== str[str.length-i-1]) {
  //         return false;
  //     }
  // }
  //
  // return true;
  
  }
  