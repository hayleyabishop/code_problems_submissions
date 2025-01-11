/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    
    // each number is either even or 1+an even number. 
    // every 2 steps can be taken 2 ways. 
    // climb 6 steps: 2 + 2 + 2 -> (1+1) + 2 + 2; number of ways = 2 * 2 * 2. 
    // ex. (1+1) + (1+1) + 2; (1+1) + 2 + (1+1); (1+1) + (1+1) + (1+1); 2 + 2 + (1+1); 2 + (1+1) + 2; 2 + (1+1) + (1+1). Eight ways!

    //Permutation with idential items: (#1's + #2's)! / ((#1's)! *  (#2's)!)
    // ex. for 2: "2" or "1+1". 
            // "2": 1!/(1)!     = 1
            // "1+1": 2!/(2)!   = 1
            // total            = 2.
    // ex. for 3: 1 + 2 or 2 + 1
            // "1 + 2": 2!/(1!*1!) = 2/1 = 2
            // "1 + 1 + 1": 3!/(3!)      = 1
            // total                     = 3.
    // for each number: 1. break out into possible combinations of 1 and 2; 2. calculate the permutation identical items for each combination of 1 and 2. 
    

    //Number of combinations of 1 and 2: every n=2 adds 1 additional way. 
    // ex. 5: 2 ways + 1 way.
    // 5: 2 + 2 + 1; 2 +(1 + 1)+ 1; (1 + 1)+(1 + 1)+ 1.
    // 4: 3 ways: 2 + 2; 2 + 1 + 1; 1 + 1 + 1 + 1
    // 3: 2 + 1, 1 + 1 + 1
    // 2: 2, 1 + 1
    // 5: two 2's, one 1 -> 3! / (2! * 1!) = 3. 
    //   one 2, three 1s -> 4! / (1! * 3!) = 4. 
    //  five 1s -> 5! / 5! = 1. 
    // answer = 8.

    // 4: two 2's -> 2! / 2! = 1
    //  one 2, two 1s -> 3! / (2!*1!) = 3
    //  four 1's -> 4!/4! = 1
    // answer = 5.

    twoCount = ~~(n/2); //Divide and truncate remainder. 


    // DIY factorial function (can't import math :( )
    function factorial(num){
        let total=0;
        for (i=num; i>0; i--){
            total *= i;
        }
        return total;
    }

    //started using math.factorial(), but then found out I can't use math.js. :(
    function permutations(twos, ones){
       return factorial(twos+ones)/(factorial(twos)*factorial(ones));
    }    

    let sum=0;
    for (i=0;i<= twoCount;i++){
        sum += permutations(twoCount-i, n-twoCount+i);
    }

    sum += permutations(twoCount, n-twoCount);

    return sum;

    // if(n==1){
    //     return 1
    // }
    // else {
    //     return n%2 + 2**((n-(n%2))/2);
    // }
    //ex n=2: 0 + 2^(2/2) = 2^1 = 2. Check!
    //ex n=3: 1 + 2^((3-(1))/2) = 1+2^1 = 3. Check!

    //ERROR: handle n=1!
    //if? Not very elegant but ok... Adds to time complexity though. 
    //ERROR: DOESN'T WORK FOR N=4 EITHER!

};
