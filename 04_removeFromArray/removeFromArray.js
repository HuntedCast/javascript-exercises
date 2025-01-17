const removeFromArray = function(array, ...valuesToBeRemoved) {
    for (const valueToBeRemoved of valuesToBeRemoved) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === valueToBeRemoved) {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
