"use strict";
// ? Interface is a programming structure/syntax
// ? that allows the computer to enforce certain peroperties on an object(class)
console.log("Interfaces");
const p1 = {
    fullName: "Dipak Tamang",
    age: 24,
};
const p2 = {
    fullName: "Raju Pandey",
    citizenNum: 812892,
    age: 45,
    checkVoter: function () {
        if (this.age > 18)
            return { id: this.citizenNum, canVote: true };
        else
            return { id: this.citizenNum, canVote: false };
    },
};
const checkVotingStatus = p2.checkVoter();
console.log(checkVotingStatus);
