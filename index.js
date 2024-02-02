const uniqueNumbers = (numbers) => {
  const numbersLen = numbers.length;
  const result = [];
  for (let i = 0; numbersLen > i; i += 1) {
    const number = numbers[i];
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
};

export const findLongestWord = (strings) => {
  const stringsLen = strings.length;
  if (stringsLen === 0) {
    return undefined;
  }

  let longestWordIndex = 0;
  let longestWordLen = 0;
  for (let i = 0; stringsLen > i; i += 1) {
    const stringLen = strings[i].length;
    if (stringLen > longestWordLen) {
      longestWordIndex = i;
      longestWordLen = stringLen;
    }
  }

  return strings[longestWordIndex];
};

export const sumUniqueNumbers = (numbers) => {
  const numbersLen = numbers.length;
  if (numbersLen === 0) {
    return undefined;
  }

  const uniqueValues = uniqueNumbers(numbers);
  const uniqueValuesLen = uniqueValues.length;
  let result = 0;
  for (let i = 0; uniqueValuesLen > i; i += 1) {
    result += uniqueValues[i];
  }

  return result;
};

export const mergeArrays = (...arrays) => {
  const arraysCount = arrays.length;
  if (arraysCount === 0) {
    return undefined;
  }
  const flattenNumbers = [...arrays.flat()];
  return uniqueNumbers(flattenNumbers);
};

export const hasProperty = (object, property) => {
  if (object[property] === undefined) {
    return false;
  }

  return true;
};

export const getPropertyValue = (object, property) => {
  if (hasProperty(object, property)) {
    return object[[property]];
  }
  return undefined;
};

export const invertObject = (object) => {
  const result = {};
  const entries = Object.entries(object);
  const entriesLen = entries.length;
  for (let i = 0; entriesLen > i; i += 1) {
    const [value, key] = entries[i]; // inverted
    result[key] = value;
  }

  return result;
};
