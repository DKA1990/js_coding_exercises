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
  let num = n.toString();
  return parseInt(num.split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.forEach(arr => {
    total = arr.reduce((acc, cur) => acc + cur, total);
  });
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    let val = arr.pop();
    arr.push(arr[0]);
    arr.shift();
    arr.unshift(val);
  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
// Check for found === true to stop executing further code if found. Change to for loop for ability to break?
  Object.values(haystack).forEach(hay => {
  //for (let i = 0; i < Object.values(haystack).length; i++) {
    if (found === true) {
      return;
    }
    if (hay.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      found = true;
    }
  });
  return found;
}  

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let strArr = str.split(" ");
  let strObj = {};
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i].replace(/[^\w ]/g, '').toLowerCase();
    if (Object.keys(strObj).includes(word)) {
      strObj[word]++;
    } else {
      strObj[word] = 1;
    }
  }
  return strObj;
};
