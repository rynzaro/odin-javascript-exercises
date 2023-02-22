const repeatString = function(word, n) {
    if (n < 0) {
        return 'ERROR';
    }
    var output = '';
    for(let i = 0; i < n; i++) {
        output += word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
