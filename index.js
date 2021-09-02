/* 1881. Maximum Value after Insertion (Medium)

You are given a very large integer n, represented as a string,​​​​​​ and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number.

You want to maximize n's numerical value by inserting x anywhere in the decimal representation of n​​​​​​. You cannot insert x to the left of the negative sign.

    For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making n = 763.
    If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.

Return a string representing the maximum value of n​​​​​​ after the insertion.

 

Example 1:

Input: n = "99", x = 9
Output: "999"
Explanation: The result is the same regardless of where you insert 9.

Example 2:

Input: n = "-13", x = 2
Output: "-123"
Explanation: You can make n one of {-213, -123, -132}, and the largest of those three is -123.

 

Constraints:

    1 <= n.length <= 105
    1 <= x <= 9
    The digits in n​​​ are in the range [1, 9].
    n is a valid representation of an integer.
    In the case of a negative n,​​​​​​ it will begin with '-'.



/Javascript Solution: (NEEDS DEBUGGING) **
 * @param {string} n
 * @param {number} x
 * @return {string}
 *
 */

var maxValue = function(n, x) {
        var len = n.size; //Length of the string
        var ans = len;      //Initially we assume that we add the new digit at the end of the string.

        if (n[0] == '-')
        {
            //If the number is negative
            for (var i = 1; i < len; ++i)
            {
                if (n[i] - '0' > x)
                {
                    ans = i;
                    break;
                }
            }
        }
        else
        {
            //If the number is positive
            for (var i = 0; i < len; ++i)
            {
                if (n[i] - '0' < x)
                {
                    ans = i;
                    break;
                }
            }
        }
        n.insert(n.begin() + ans, x + '0'); //Inserting the number at the index of ans
        return n;
};


/* C++ Solution (WORKING)

class Solution
{
public:
    string maxValue(string n, int x)
    {
        int len = n.size(); //Length of the string
        int ans = len;      //Initially we assume that we add the new digit at the end of the string.

        if (n[0] == '-')
        {
            //If the number is negative
            for (int i = 1; i < len; ++i)
            {
                if (n[i] - '0' > x)
                {
                    ans = i;
                    break;
                }
            }
        }
        else
        {
            //If the number is positive
            for (int i = 0; i < len; ++i)
            {
                if (n[i] - '0' < x)
                {
                    ans = i;
                    break;
                }
            }
        }
        n.insert(n.begin() + ans, x + '0'); //Inserting the number at the index of ans
        return n;
    }
};

Reference: 

https://helloml.org/maximum-value-after-insertion-solution-to-leetcode-problem/