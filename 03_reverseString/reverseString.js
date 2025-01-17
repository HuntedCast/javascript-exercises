const reverseString = function(string) {
    const stringArray = String(string).split("");
    const newArray = new Array(0);
    for (const char of stringArray) {
        newArray.splice(0, 0, char);
    }

    return newArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
