// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const foundSentences = word.search(/[.?!]/g);
  if (foundSentences > 0 && foundSentences != word.trim.length -1) {
  // Assume strings don't contain | or trouble!
  // Assume strings follow english grammar eg no double spaces
  // Captures ?!. followed by space followed by a letter or number. $1 preserves replaced character (?!.), adds | after as split removes split character
    const sentenceArr = word.replace(/([?!.])\s(?=[\w\d])/g, "$1|").split("|");
    let newSentence = '';
    sentenceArr.map(sentence => newSentence = newSentence + sentence[0].toUpperCase() + sentence.substring(1) + ' ');
    return newSentence.trimEnd();
  }
  return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.floor(originalPrice * (1 + (vatRate/100)) * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.floor(originalPrice * (1 - (reduction/100)) * 100) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const len = str.length;
  if (len % 2 === 0) {
    return str[(len/2) - 1] + str[len/2];
  } else {
    return str[Math.ceil((len/2) - 1)];
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      count++;
    }
  }
  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0;
  scores.forEach(number => {
    total = total + number;
  })
  return Math.round(total / scores.length * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
}
