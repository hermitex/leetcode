var twoSum = function (nums, target) { // O(1)
    let compliments = {}; // O(1)
    for (let i = 0; i < nums.length; i++) { // O(n)
      let compliment = target - nums[i]; // O(1)
      if (nums[i] in compliments) {// O(1)
        return [compliments[nums[i]], i]; // O(1)
      } else  { // O(1)
        compliments[compliment] = i; // O(1)
      }
    }
    return []; // O(1)
  };
  
  // Total time complexity = O(n)

console.log(twoSum([-1, -2, -3, -4, -5], - 8));