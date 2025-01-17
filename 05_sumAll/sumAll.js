const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || int1 < 0 || int2 < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let smallInt = 0;
    let largeInt = 0;
    if (int1 >= int2) {
        largeInt = int1;
        smallInt = int2;
    } else {
        largeInt = int2;
        smallInt = int1;
    }

    for (i = smallInt; i <= largeInt; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
