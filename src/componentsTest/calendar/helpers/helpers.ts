export const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

export const addLeadingZeros = (value: number, maxLengthOfNumber = 1): string => {
  const stringValue = value.toString();

  if (stringValue.length === maxLengthOfNumber) {
    return stringValue;
  }

  const initialArray = new Array<string>(maxLengthOfNumber).fill("0");
  const finalArray = [...initialArray, ...stringValue];

  return finalArray.slice(-maxLengthOfNumber).join("");
};
