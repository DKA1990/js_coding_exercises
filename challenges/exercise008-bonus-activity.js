// Spread Syntax Bonus activity

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
  const coloursCopy = [...colours];
  return coloursCopy;
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  const fullList = [...list, ...newItem];
  return fullList;
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  return [...string];
}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  return user.address?.postcode;
}
