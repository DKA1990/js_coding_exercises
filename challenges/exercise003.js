export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length > 0) {
    nums.forEach((num, i) => {
      nums[i] = num * num;
    })
  }
  return nums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words === []) throw new Error("words cannot be empty");
  let word = words[0].toLowerCase();
  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      word = word + words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }
  return word;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count = count + people[i].subjects.length;
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  //... Spreads set (used here to remove duplicates) into array. Filter based off existence in second array
  const newArr = [...new Set(arr1.filter(num => arr2.includes(num)))];
  return newArr.sort((a,b) => a - b);
}
