export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === 'Manchester' ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'sheep') {
      count++;
    }
  }
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Check first letter is 'M', second letter is number. Safe to assume?
  return (person.address.postCode[0].toUpperCase() === 'M' && person.address.postCode[1].toUpperCase() === person.address.postCode[1].toLowerCase());
}
