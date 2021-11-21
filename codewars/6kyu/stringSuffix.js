const matchLength = (a, b) => {
    for (let j = a.length; j > 0; j--) {
        if (a.slice(0, j) === b.slice(0, j)) {
            return j;
        }
    }
    return 0;
}

function stringSuffix(s) {
    let len = s.length;
    let res = len;
    for (let i = 1; i < len; i++) {
        res += matchLength(s.slice(0, len - i), s.slice(i));
    }
    return res;
}

console.log(stringSuffix('ababaa'));//11
console.log(stringSuffix('abc'));//3