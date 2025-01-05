//https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // ex. climb 10 steps: 1 + 1 + 1... to 10. 
    // climb 10 steps: 1 + 2 + 1 + 1...
    // climb 10 steps: 2 + 2 + 2 + 2 + 2
    // ex. climb 2 steps: 1 or 2 -> 1 + 1 or 2. 
    // climb 3 steps: 1 + 1 + 1 or 1 + 2 or 2 + 1. 
    // climb 4 steps: 1 + 1 + 1 + 1; 1 + 2 + 1; 1 + 1 + 2; 2 + 1 + 1; 2 + 2. 
    // need to find out the number of distinct ways! (Permutations).
    // each number is either even or 1+an even number. 
    // every 2 steps can be taken 2 ways. 
    // climb 6 steps: 2 + 2 + 2 -> (1+1) + 2 + 2; number of ways = 2 * 2 * 2. 
    // ex. (1+1) + (1+1) + 2; (1+1) + 2 + (1+1); (1+1) + (1+1) + (1+1); 2 + 2 + (1+1); 2 + (1+1) + 2; 2 + (1+1) + (1+1). Eight ways!
    // Our estimate for 7 is: 1 + 2 *  2 * 2; That is, if 7=n: n%2=1,(n-(n%2)) / 2 = 3. 
    // Estimate is 2^3 + 1. 
    // Answer would be n%2 + 2^((n-(n%2))/2)
    if(n==1){
        return 1
    }
    else {
        return n%2 + 2**((n-(n%2))/2);
    }
    //ex n=2: 0 + 2^(2/2) = 2^1 = 2. Check!
    //ex n=3: 1 + 2^((3-(1))/2) = 1+2^1 = 3. Check!

    //ERROR: handle n=1!
    //if? Not very elegant but ok... Adds to time complexity though. 
    //ERROR: DOESN'T WORK FOR N=4 EITHER!

    //I'd like to see what other people do!
};
