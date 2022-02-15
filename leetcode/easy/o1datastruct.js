const arr = [];
let all = {};

function getTime() {
    return Date.now();
}

function set(index, value) {
    arr[index] = { timestamp: getTime(), value: value };
}

function get(index) {
    if (arr[index].timestamp > all.timestamp) return arr[index].value;
    return all.value;
}

function setAll(value) {
    all = { timestamp: getTime(), value: value };
}
