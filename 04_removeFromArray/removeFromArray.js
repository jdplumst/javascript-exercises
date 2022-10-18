const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
        let x = arr.indexOf(args[i]);
        if (x != -1) {
            arr.splice(x,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
