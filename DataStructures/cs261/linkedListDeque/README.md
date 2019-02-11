Part I: Amortized Analysis of the Dynamic Array

Consider the push() operation for a Dynamic Array. In the best case, the operation is O(1). This corresponds to the case where there was room in the space we have already allocated for the array. However, in the worst case, this operation slows down to O(n). This corresponds to the case where the allocated space was full and we must copy each element of the array into a new (larger) array. This problem is designed to discover runtime bounds on the average case when various array expansion strategies are used, but first some information on how to perform an amortized analysis is necessary.

Each time an item is added to the array without requiring reallocation, count 1 unit of cost. This cost will cover the assignment which actually puts the item in the array.
Each time an item is added and requires reallocation, count X + 1 units of cost, where X is the number of items currently in the array. This cost will cover the X assignments which are necessary to copy the contents of the full array into a new (larger) array, and the additional assignment to put the item which did not fit originally To make this more concrete, if the array has 8 spaces and is holding 5 items, adding the sixth will cost 1. However, if the array has 8 spaces and is holding 8 items, adding the ninth will cost 9 (8 to move the existing items + 1 to assign the ninth item once space is available).
When we can bound an average cost of an operation in this fashion, but not bound the worst case execution time, we call it amortized constant execution time, or average execution time. Amortized constant execution time is often written as O(1+), the plus sign indicating it is not a guaranteed execution time bound.

In a file called amortizedAnalysis.txt, please provide answers to the following questions:

How many cost units are spent in the entire process of performing 16 consecutive push operations on an empty array which starts out at capacity 8, assuming that the array will double in capacity each time new item is added to an already full dynamic array? Now try it for 32 consecutive push operations. As N (ie. the number of pushes) grows large, under this strategy for resizing, what is the amortized big-oh complexity for push?
How many cost units are spent in the entire process of performing 16 consecutive push operations on an empty array which starts out at capacity 8, assuming that the array will grow by a constant 2 spaces each time new item is added to an already full dynamic array? Now try it for 32 consecutive push operations. As N (ie. the number of pushes) grows large, under this strategy for resizing, what is the amortized big-oh complexity for push?
Part II: Circular Linked List Deque Implementation
Please download the file linkedListDeque.zipPreview the document and complete the implementation of a deque using the linked list. 

For this problem, you will implement the Deque ADT with a Circularly-Doubly-Linked List with a Sentinel. As you know, the sentinel is a special link, does not contain a value, and should not be removed. Using a sentinel makes some linked list operations easier and cleaner in implementation. This list is circular, meaning the end points back to the beginning, thus one sentinel suffices (the last item should point to the sentinel as its next, and the sentinel's prev should be the last item, sentinel's next is the first item). This is a bit different than the two sentinel solution talked about in the class and the slides. The header file and the implementation file for this approach are cirListDeque.h and cirListDeque.c, respectively. Complete the functions in cirListDeque.c and write a test harness in testCirListDeque.c to test the functionality of your Circularly-Doubly-Linked List deque.

You are supposed to check the precondition listed in "pre: " for each function with an assert.

Please put the solution of both parts into the same zip file and upload it.

Grading Criteria:
This assignment is worth 100 points, graded as follows:

Part I: Each question worths 20 points in total, for a total of 40 points in this part.

Part II: Each function you write worths 5 points, except the printcirListDeque function. The printcirListDeque and test harness (testCirListDeque.c) are not graded, however you may need them to make sure your deque is correct.
