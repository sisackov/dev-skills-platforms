let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums1 = [1, 1, 2];

/**
 * For some reason this doesn't work on leetcode server.
 * it does print the values as expected
 */
var removeDuplicates = function (nums) {
    let dup = 0;
    nums.reduce((prev, curr, i, arr) => {
        if (prev === curr) {
            delete arr[i];
            dup++;
            return prev;
        }
        return curr;
    });
    nums.sort();
    for (let i = nums.length - dup; i < nums.length; i++) {
        nums[i] = '_';
    }

    return dup;
};
console.log(removeDuplicates(nums1));
console.log(nums1);