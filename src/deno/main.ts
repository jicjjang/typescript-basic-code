enum GENDER {
  MAN,
  WOMAN,
  UNKNOWN,
}

interface IHuman {
  name: string;
  age: number;
  gender: GENDER;
}

const person1: IHuman = {
  name: "jed",
  age: 32,
  gender: GENDER.MAN,
};

console.log(person1);
