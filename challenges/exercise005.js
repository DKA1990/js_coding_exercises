export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const nIndex = nums.indexOf(n);
  if (nIndex === nums.length - 1 || nIndex === -1) {
    return null;
  } else {
    return nums[nIndex + 1];
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let count = {0: 0, 1: 0};
  count['0'] = str.split('0').length - 1;
  count['1'] = str.split('1').length - 1;
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
