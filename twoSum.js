const twoSumPrimary = function (nums, target) {
   let hash = {};
   for(let i=0; i < nums.length; i++) {
     if(hash[target - nums[i]] >= 0) {
       return [i, hash[target - nums[i]]];
     }
     hash[nums[i]] = i;
     console.log(hash);
   }
}

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
