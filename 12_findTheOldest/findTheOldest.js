const findTheOldest = function(arr) {
    let oldestIndex = 0;
    let oldestAge = 0;
    let currAge = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].hasOwnProperty('yearOfDeath')) {
            arr[i].yearOfDeath = new Date().getFullYear();
        } 
        currAge = (arr[i].yearOfDeath - arr[i].yearOfBirth);
        if (currAge > oldestAge) {
            oldestIndex = i;
            oldestAge = currAge;
        }
    }
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
