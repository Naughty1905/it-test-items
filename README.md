# it-test-items
# Here you can find test tasks from different companies

# Task №1
We have this big list of (signed) integers.<br> 
We are interested in finding every index &quot;idx&quot; (zero-based, of course) in this list, that has the following <br>
property: <br>
The sum of the integers preceding (but not including) index idx is equal to the sum of the integers <br>
following (again not including) idx. i.e.: (Referring to our list of integers for a moment as &quot;A[]&quot; and the <br>
number of integers in the list N), then we want every index  <br>
idx for which the following is true:  <br>
   A[0] + A[1] + ... + A[idx-1] == A[idx+1] + A[idx+2] ... + A[N-1] <br>
Note that there is likely to be more than one index &quot;idx&quot; in the list that satisfies this property. <br>
Write code that finds every index in our big list that has this property.  <br>
Then, sum up every index that you found, and that is the answer to question 1. <br>
For reference, given the array [-7,1,5,2,-4,3,0], the answer we are looking for is 9 because indices 3 and <br>
6 have the property we are looking for  <br>
(-7 + 1 + 5 == -4 + 3 + 0  and  -7 + 1 + 5 + 2 + -4 + 3 == 0) <br>
and 3 + 6 = 9. <br>

# Task №2
Function for reversing the array value <br>

# Task №3
In this kata, you are asked to square every digit of a number.<br>
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.<br>
Note: The function accepts an integer and returns an integer.<br>

# Task №4
Create a moreZeros function which will receive a string for input, and return an array containing only the characters<br>
from that string whose binary representation of its ASCII value consists of more zeros than ones.<br>

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same<br>
order in the final array as they first appeared in the input string.<br>

Examples<br>

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.<br>

# Task №5
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help<br>
him to find out, how many cakes he could bake considering his recipes?<br>

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns<br>
the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of<br>
flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.<br>

Examples:<br>

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); <br>
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); <br>

# Task №6
My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in<br> pieces which, when assembled, give squares the sides of which form an increasing sequence of numbers. At the beginning it<br> was lot of fun but little by little we were tired of seeing the pile of torn paper. So we decided to write a program that<br> could help us and protects trees.

Task<br>
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language)<br> of numbers, so that the sum of the squares is equal to n².<br>

If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:

Examples<br>
decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 +<br> 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.<br>

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly<br> increasing sequence.<br>

Note<br>
Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null, Nothing, None (depending<br> on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).<br>

The function "decompose" will take a positive integer n and return the decomposition of N = n² as:<br>

[x1 ... xk] or<br>
"x1 ... xk" or<br>
Just [x1 ... xk] or<br>
Some [x1 ... xk] or<br>
{x1 ... xk} or<br>
"[x1,x2, ... ,xk]"<br>
depending on the language (see "Sample tests")<br>

Note for Bash<br>
decompose 50 returns "1,3,5,8,49"<br>
decompose 4  returns "Nothing"<br>
Hint<br>
Very often xk will be n-1.<br>
