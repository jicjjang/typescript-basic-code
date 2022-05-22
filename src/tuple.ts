const friendList: [string, number][] = [
  ["jed", 10],
  ["ben", 20],
  ["jam", 30],
];

const [nickname, age] = friendList[0];

type bestFriendType = [string, number, ...number[]];
const bestFriend1: bestFriendType = ["jed", 20];
const bestFriend2: bestFriendType = ["jed", 20, "t"];
const bestFriend3: bestFriendType = ["jed", 20, 1];
const bestFriend4: bestFriendType = ["jed", 20, 1, 2];
const bestFriend5: bestFriendType = ["jed", 20, 1, 2, 3];
