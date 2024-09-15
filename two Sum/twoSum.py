"""
. Find a pair with the given sum in an array. Given an unsorted integer array, print a pair
with the given sum in it.
For example,
Input:
nums = [8, 7, 2, 5, 3, 1]
target = 10
Output:
Pair found (8, 2) or
Pair found (7, 3)
—
Input:
nums = [5, 2, 6, 8, 1, 9]
target = 12
Output: Pair not found.
"""

"""
the code below goes through all the number with the inner is the list, and try to match with target number,
if target is match, it will show all the combination that match the target. 
"""

def twoSum(nums, target): # creating a function with parameter of nums and target, where nums is array of number and target is desired result.
    for n in nums: # loops through an array.
        for m in nums: # inner loops through the array again
            if n+m == target: # if integer match the target it print the matched integer.
                print(n,m)
    else:
        print("Pair not found.") # if doesn't match the target this msg is shown.
            
nums = [8, 7, 2, 5, 3, 1]
target = 1    
twoSum(nums,target)






"""
Finds and prints a pair of numbers from the list `nums` that add up to the `target` sum.

    Parameters:
    nums (list of int): A list of integers.
    target (int): The target sum to find in pairs.

    Returns:
    None
"""     
def twoSum(nums, target) :# creating a function with parameter of nums and target, where nums is array of number and target is desired result.
     
  
    seen = set() # this is created to store the looped number that we have seen
    for num in nums: # loop over the array
        complement = target - num  # this calculate the needed compliment to reach the target
        if complement in seen:
            print(complement, num)  # print the pair if compliment is found 
            return ## the function is terminted after finding a valid pair
        seen.add(num) ### adds the current number to the set of seen numbers.
    print("Pair not found.")

# example
nums = [8, 7, 2, 5, 3, 1]
target = 2
twoSum(nums, target)

