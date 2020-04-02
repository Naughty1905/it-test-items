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


