# it-test-items
# Here you can find various programming tasks and their solutions

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

# Task №7
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling<br> clockwise.<br>

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]<br>
For better understanding, please follow the numbers of the next array consecutively:<br>

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]<br>
This image will illustrate things more clearly:<br>
<img src="http://www.haan.lu/files/2513/8347/2456/snail.png"><br>

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in<br>  a clockwise snailshell pattern.<br>

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].<br>

# Task №8
Consider a sequence u where u is defined as follows:<br>

1. The number u(0) = 1 is the first one in u.<br>
2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.<br>
3. There are no other numbers in u.<br>
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]<br>

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...<br>

Task:<br>
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence <br>  u (so, there are no duplicates).<br>

Example:<br>
dbl_linear(10) should return 22<br>

Note:<br>
Focus attention on efficiency<br>

# Task №9
Sudoku Background<br>
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each<br> column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.<br>
(More info at: http://en.wikipedia.org/wiki/Sudoku)<br>

Sudoku Solution Validator<br>
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns<br> true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty<br> cells. Boards containing one or more zeroes are considered to be invalid solutions.<br>

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.<br>

Examples<br>
validSolution([<br>
  [5, 3, 4, 6, 7, 8, 9, 1, 2],<br>
  [6, 7, 2, 1, 9, 5, 3, 4, 8],<br>
  [1, 9, 8, 3, 4, 2, 5, 6, 7],<br>
  [8, 5, 9, 7, 6, 1, 4, 2, 3],<br>
  [4, 2, 6, 8, 5, 3, 7, 9, 1],<br>
  [7, 1, 3, 9, 2, 4, 8, 5, 6],<br>
  [9, 6, 1, 5, 3, 7, 2, 8, 4],<br>
  [2, 8, 7, 4, 1, 9, 6, 3, 5],<br>
  [3, 4, 5, 2, 8, 6, 1, 7, 9]<br>
]); // => true<br>
validSolution([<br>
  [5, 3, 4, 6, 7, 8, 9, 1, 2],<br> 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],<br>
  [1, 0, 0, 3, 4, 2, 5, 6, 0],<br>
  [8, 5, 9, 7, 6, 1, 0, 2, 0],<br>
  [4, 2, 6, 8, 5, 3, 7, 9, 1],<br>
  [7, 1, 3, 9, 2, 4, 8, 5, 6],<br>
  [9, 0, 1, 5, 3, 7, 2, 1, 4],<br>
  [2, 8, 7, 4, 1, 9, 6, 3, 5],<br>
  [3, 0, 0, 4, 8, 1, 1, 7, 9]<br>
]); // => false<br>

# Task №10
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".<br>

As a simplification, you may assume that no letter occurs more than once in the secret string.<br>

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient<br> information to deduce the original string. In particular, this means that the secret string will never contain letters that do not<br> occur in one of the triplets given to you.<br>

# Task №11
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret<br> warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock.<br> Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.<br>

The keypad has the following layout:<br>
<pre>
     ┌───┬───┬───┐
     │ 1 │ 2 │ 3 │
     ├───┼───┼───┤
     │ 4 │ 5 │ 6 │
     ├───┼───┼───┤
     │ 7 │ 8 │ 9 │
     └───┼───┼───┘
         │ 0 │
         └───┘
         </pre><br>
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit<br> (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could<br><br> also be the 2, 4, 6 or 8.<br>

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system<br> or sound the alarm. That's why we can try out all possible (*) variations.<br>

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits<br>

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#)<br> of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python,<br> GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially<br> leading '0's. We already prepared some test cases for you.<br>

Detective, we count on you!<br>

For C# user: Do not use Mono. Mono is too slower when run your code.<br>

# Task №12
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a<br>   human-friendly way.<br>

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a<br> combination of years, days, hours, minutes and seconds.<br>

It is much easier to understand with an example:<br>
```
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
```
For the purpose of this Kata, a year is 365 days and a day is 24 hours.<br>

Note that spaces are important.<br>

Detailed rules<br>
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid<br> units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.<br>

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like<br>    it would be written in English.<br>

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but<br> 1 year and 1 second is.<br>

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.<br>

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be<br> just 1 minute.<br>

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1<br> second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.<br>

# Task №13
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase<br> letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.<br>
```
s1 = "A aaaa bb c"
```
```
s2 = "& aaa bbb c d"
```
```
s1 has 4 'a', 2 'b', 1 'c'
```
```
s2 has 3 'a', 3 'b', 1 'c', 1 'd'
```
So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters<br> when the maximum of their occurrences is less than or equal to 1.<br>

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and<br> aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.<br>

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is<br> strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and<br> :. If the maximum is in s1 as well as in s2 the prefix is =:.<br>

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their<br> length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by<br> codepoint); the different groups will be separated by '/'. See examples and "Example Tests".<br>

Hopefully other examples can make this clearer.<br>
```
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
```
```
s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
```
```
s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
```
Note for Swift, R, PowerShell<br>
The prefix =: is replaced by E:<br>
```
s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
```

# Task №14
Проверка правильности расстановки фигурных скобок в строке.<br>

# Task №15
Given a string which may include opening or closing round brackets, can you tell whether the string contains a balanced pair(s) of<br> round brackets, that is there are no brackets which are either opened & not closed, or vice versa. Opening round brackets always<br> have to come before closing bracket.<br>
```
Test.assertEquals(isBalanced("hi)("),false)
Test.assertEquals(isBalanced("hi(hi)"),true)
Test.assertEquals(isBalanced("("),false)
```

# Task №16
How many ways can you make the sum of a number?<br>
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#<br>

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as<br> a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order<br> matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:<br>
```
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
```
Examples<br>
Basic<br>
```
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
...
sum(10) // 42
```
Explosive<br>
```
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
```
See here for more examples.<br>

# Task №17
Pascal's Triangle<br>
<img src="http://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif"><br>
Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle<br>

Write a function that, given a depth (n), returns a single-dimensional array/list representing Pascal's Triangle from the first to<br> the n-th level.<br>

For example:<br>
```
pascalsTriangle(4) == [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]
```

# Task №18
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end<br> of the line should also be stripped out.<br>

Example:<br>

Given an input string of:<br>
```
apples, pears # and bananas
grapes
bananas !apples
```
The output expected would be:<br>
```
apples, pears
grapes
bananas
```
The code would be called like so:<br>
```
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
```

# Task №19
Task<br>
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West).<br> Return ```true``` if you can reach position [N-1, N-1] or ```false``` otherwise.<br>

Empty positions are marked ```.```. Walls are marked ```W```. Start and exit positions are empty in all test cases.<br>

Path Finder Series:<br>
<a href="https://www.codewars.com/kata/5765870e190b1472ec0022a2">#1: can you reach the exit?</a><br>
<a href="https://www.codewars.com/kata/57658bfa28ed87ecfa00058a">#2: shortest path</a><br>
<a href="https://www.codewars.com/kata/576986639772456f6f00030c">#3: the Alpinist</a><br>
<a href="https://www.codewars.com/kata/5a0573c446d8435b8e00009f">#4: where are you?</a><br>
<a href="https://www.codewars.com/kata/5a05969cba2a14e541000129">#5: there's someone here</a><br>
