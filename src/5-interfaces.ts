// ? Interface is a programming structure/syntax
// ? that allows the computer to enforce certain peroperties on an object(class)
console.log("Interfaces");

// ? eg 1
interface Person {
  fullName: string;
  age: number;
  married?: boolean;
  hadBang?: boolean;
}
const p1: Person = {
  fullName: "Dipak Tamang",
  age: 24,
};
// console.log(p1);

// ? eg 2
interface GrabInfo {
  fullName: string;
  citizenNum: number;
  age: number;
  checkVoter: () => void;
}
const p2: GrabInfo = {
  fullName: "Raju Pandey",
  citizenNum: 812892,
  age: 45,
  checkVoter: function () {
    if (this.age > 18) return { id: this.citizenNum, canVote: true };
    else return { id: this.citizenNum, canVote: false };
  },
};
const checkVotingStatus = p2.checkVoter();
console.log(checkVotingStatus);
