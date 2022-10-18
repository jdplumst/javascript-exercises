const reverseString = function(string) {
    let newStringArray = [];
    originalStringArray = string.split('');
    for (let i = originalStringArray.length - 1; i >= 0; i--) {
        newStringArray.push(originalStringArray[i]);
    }
    let newString = newStringArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
