const fibonacci = function(n) {
    a = 1;
    b = 1;
    let curr = 2;
    if (n == 1 || n == 2) {
        return 1;
    } else if (n == 3) {
        return curr;
    } else if (n <= 0) {
        return "OOPS";
    }
    for (let i = 2; i < n; i++) {
        curr = a + b;
        a = b;
        b = curr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
