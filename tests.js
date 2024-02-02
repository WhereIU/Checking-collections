import {
  findLongestWord, sumUniqueNumbers,
  mergeArrays, hasProperty,
  getPropertyValue, invertObject,
} from './index.js';

const toBeEqual = (input, equal) => {
  if (Array.isArray(equal)) {
    const inputLen = input.length;
    const equalLen = equal.length;
    if (inputLen !== equalLen) {
      return false;
    }

    for (let i = 0; inputLen > i; i += 1) {
      if (input[i] !== equal[i]) {
        return false;
      }
    }

    return true;
  }
  if (equal !== null && typeof equal === 'object') {
    const inputKeys = Object.keys(input);
    const equalKeys = Object.keys(equal);
    const inputLen = inputKeys.length;
    const equalLen = equalKeys.length;
    if (inputLen !== equalLen) {
      return false;
    }

    for (let i = 0; inputLen > i; i += 1) {
      if (input[inputKeys[i] !== equal[equalKeys[i]]]) {
        return false;
      }
    }

    return true;
  }

  return input === equal;
};
console.log('tests 1:');
console.log(toBeEqual(findLongestWord(['Java', 'Python', 'JavaScript']), 'JavaScript'));
console.log(toBeEqual(findLongestWord(['football', 'basketball', 'tennis']), 'basketball')); // "basketball"
console.log(toBeEqual(findLongestWord(['sun', 'moon', 'stars']), 'stars'));

console.log('tests 2:');
console.log(toBeEqual(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5]), 15));
console.log(toBeEqual(sumUniqueNumbers([10, 20, 10, 20, 30]), 60));
console.log(toBeEqual(sumUniqueNumbers([0, -1, -2, -1, -3]), -6));

console.log('tests 3:');
console.log(toBeEqual(
  mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
));
console.log(toBeEqual(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7]), [1, 3, 5, 2, 4, 6, 7]));

console.log('tests 4:');
console.log(toBeEqual(hasProperty({ name: 'Alice', age: 25 }, 'age'), true));
console.log(toBeEqual(hasProperty({ name: 'Bob', country: 'France' }, 'gender'), false));
console.log(toBeEqual(hasProperty({ type: 'fruit', color: 'red' }, 'color'), true));

console.log('tests 5:');
console.log(toBeEqual(getPropertyValue({ name: 'Alice', age: 25 }, 'name'), 'Alice')); //
console.log(toBeEqual(getPropertyValue({ brand: 'Toyota', model: 'Camry' }, 'year'), undefined));
console.log(toBeEqual(getPropertyValue({ type: 'laptop', brand: 'Dell' }, 'brand'), 'Dell'));

console.log('tests 6:');
const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(toBeEqual(invertedObject1, { 1: 'c', 2: 'b' }));
