export const findIndex = (array, value) => {
  const isInArray = (element) => element === value;
  if (array.includes(value)) {
    return array.findIndex(isInArray);
  } else {
    return -1;
  }
};

// array.indexOf(value)
