let moveZeroToEnd = (nums) => {
    var length = nums.length;
    var i = 0;
    while (i < length) {
        var num = nums[i];
        if (num === 0) {
            nums.splice(i, 1);
            nums.push(0);
            length--;
        } else {
            i++;
        }
    }
    return nums;
};

// Another solution
// public void moveZeroes(int[] nums) {
//     if (nums.length == 0 || nums == null) return;
//     int idx = 0;
//     for (int i = 0; i < nums.length; i++) {
//         if (nums[i] != 0) {
//             nums[idx++] = nums[i];
//         }
//     }
//     while (idx < nums.length) {
//         nums[idx++] = 0;
//     }
//     return;
// }

console.log(moveZeroToEnd([0, 1, 0, 3, 0, 0, 12]));