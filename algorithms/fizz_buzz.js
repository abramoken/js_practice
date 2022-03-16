// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    //   for(let i = 1; i <= 100; i++) {
    //     if(i % 15 === 0) {
    //       console.log('FizzBuzz');
    //     } else if(i % 3 === 0) {
    //       console.log('Fizz');
    //     } else if(i % 5 === 0) {
    //       console.log('Buzz');
    //     } else {
    //       console.log(i);
    //     }
    //   }
    
      // for(let i = 1; i <= 100; i++) {
      //   let printNum=true;
      //    if(i % 3 === 0) 
      //      console.log('Fizz');
      //    if(i % 5 === 0) 
      //      console.log('Buzz');
      //   // if divisable by 3 then i%3 is zero,
      //   // if divisable by 5 then i%5 is zero,
      //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print 
      //    printNum=((i%3*i%5)!==0);
      //   if(printNum) {
      //      console.log(i);
      //   }
      // }
      for(var i = 1; i <= 20; i++) {
        let output = '';
        if(i % 3 === 0) {
          output += 'fizz';
        }
        if(i % 5 === 0) {
          output += 'buzz';
        }
        console.log(output || i);
      }
}
