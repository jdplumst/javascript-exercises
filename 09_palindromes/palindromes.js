const palindromes = function (s) {
    let backwardsString = ''
    s = s.replace(/[^a-zA-Z]/g, '');
    s = s.toLowerCase();
    for (let i = s.length - 1; i >= 0; i--) {
        backwardsString += s[i];
    }
    return backwardsString === s;
};

// Do not edit below this line
module.exports = palindromes;
