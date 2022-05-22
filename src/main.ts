const version: string = process.version; // 'v16.15.0'
const splitedVersion: string[] = process.version.split("."); // ['v16', '15', '0']
const splitedNumberVersion: number[] = splitedVersion.map((eachValue: string, index: number) =>
  parseInt(!index ? eachValue.substring(1) : eachValue, 10)
);

const isNumArr: boolean =
  Array.isArray(splitedNumberVersion) &&
  splitedNumberVersion.every((eachValue: number) => typeof eachValue === "number");

console.log(splitedNumberVersion); // [16, 15, 0]
console.log(isNumArr); // true
