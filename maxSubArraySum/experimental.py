# Python program to find maximum contiguous subarray by DP

from sys import maxsize
# import matplotlib.pyplot as plt 
import time
import numpy as np
import random

#read input from mstest.txt file into two lists: alist-list of arrays and oplist-list of output
def testinput(test):
	inputList = []
	alist=[]
	oplist=[]

	if test=='random':
		alist = generateArrays()


	if test=='mstest':
		with open('mstest.txt') as file:
			for lines in file:
				inputList.append(lines.strip())
				
			for i in inputList:
				if i:
					y = i.rsplit(",", 1)[0]
					z = y[1:-1].split(",")
					alist.append(z)
					oplist.append(i.rsplit(",", 1)[-1]) 

		return alist, oplist


def generateArrays():
	i=1000
	n = 9000
	arr = [];
	while i<=n:
		# print(i)
		randArr = np.random.randint(-100, 100, i)
		# randArr = "["+(','.join(map(str, randArr)))+"]"

		arr.append(randArr.tolist())
		# print("_____________________", i)
		i+=1000
	print(arr)
	return arr
		

#Algorithm 1
def max_sub_array(array):
    global_max = float('-inf')
    sub_array = []
    n = len(array)
    maximum =0
    subarray=0
    
    startTime = time.clock()
    for i in range(0, n):
        for j in range(i, n+1):
            current_sum = 0
            curarray = []
            for k in range(i, j):
                current_sum += array[k]
                curarray = curarray+ [array[k]]
                if current_sum > maximum:
                    maximum = current_sum
                    subarray = curarray
    endTime = time.clock()
    timediff = endTime-startTime
    return maximum, subarray, timediff

#Algorithm 2
def max_sub_array_better(array):
    global_max = float('-inf')
    sub_array = []
    startTime = time.clock()
    for i in range(len(array)+1):
        for j in range(len(array)+1):
            iter_max = sum(array[i:j])
          
            if iter_max > global_max:
                global_max = iter_max
                sub_array = array[i:j]
    endTime = time.clock()
    timediff = endTime-startTime
    # print(global_max, sub_array)
    return global_max, sub_array, timediff

#Algorithm 3
def maxSubArraySum(a,size): 
  
    max_so_far = -maxsize - 1
    max_ending_here = 0
    start = 0
    end = 0
    s = 0
    
    startTime = time.clock()
    for i in range(0,size): 
  
        max_ending_here += a[i] 
  
        if max_so_far < max_ending_here: 
            max_so_far = max_ending_here 
            start = s 
            end = i 
  
        if max_ending_here < 0: 
            max_ending_here = 0
            s = i+1

    #if all elements are negative, 
    if max_so_far < 0:
    	max_so_far=0

    endTime = time.clock()
    
    timediff = endTime-startTime
    #printing the sum and largest found subarray
    print ("Maximum contiguous sum is %d."%(max_so_far)) 
    print("SubArray:\n", a[start:end])
    return max_so_far, timediff


def runAlgorithm(num, alist, oplist):
	i=0
	timeTaken=[]
	asize=[]
	timediff=0
	maxsum = []
	maxsum=0
	subarray=[]
	arr=0
	
	if num==1:
		#Enumeration
		print("--------------------Enumeration--------------------")
		
		while i < len(alist):
			alist[i] = list(map(int, alist[i]))
			maxsum, subarray, timediff = max_sub_array(alist[i])
			print("\nSum, subarray: ", maxsum, subarray)
			timeTaken.append(timediff)
			asize.append(len(alist[i]))
			i+=1

		#To plot time complexity graph(in excel)
		print("\nTime taken for each subarray:\n", timeTaken)
		print("\nSize of array:\n", asize)

	if num==2:
		#Better Enumeration
		print("\n--------------------Better Enumeration--------------------\n")
		
		while i < len(alist):
			alist[i] = list(map(int, alist[i]))
			maxsum, subarray, timediff = max_sub_array_better(alist[i])
			print("\nSum, subarray: ", maxsum, subarray)
			timeTaken.append(timediff)
			asize.append(len(alist[i]))
			i+=1

		#To plot time complexity graph(in excel)
		print("\nTime taken for each subarray:\n", timeTaken)
		print("\nSize of array:\n", asize)

	if num==3:

		print("\n--------------------Dynamic Programming--------------------\n")
		explist = []
		#Parsing alist items to int and getting maxsubarraysum, sum
		while i < len(alist):
			alist[i] = list(map(int, alist[i]))
			maxsum, timediff = maxSubArraySum(alist[i],len(alist[i])) 
			#append experimental output to a list
			explist.append(maxsum)
			timeTaken.append(timediff)
			asize.append(len(alist[i]))
			i+=1
		
		#Compare results from the mstest.txt file with the code results
		print("\nArray of sums from code:", explist)
		print("Array of sums from mstest.txt file:", oplist)

		#To plot time complexity graph(in excel)
		print("\nTime taken for each subarray:\n", timeTaken)
		print("\nSize of array:\n", asize)
	

if __name__ == '__main__':

	alist, oplist=testinput('mstest')
	# print(alist)

	# #Parsing oplist items to int
	# oplist = list(map(int, oplist))
	
	# runAlgorithm(1, alist, oplist)
	# runAlgorithm(2, alist, oplist)
	# runAlgorithm(3, alist, oplist)
	# generateArrays()

	alist= generateArrays()
	# runAlgorithm(1, alist, oplist)
	runAlgorithm(2, alist, oplist)
	# plt.plot(timeTaken, asize, 'ro')
	# plt.ylabel('time taken')
	# plt.xlabel('array size')
	# # plt.axis([ 2, 4, 6, 8, 10])
	# plt.show()

	#generating file to write random arrays in a file

