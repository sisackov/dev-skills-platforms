const ll = console.log;

const list = [1, 3, 5];

function getAverages(arr, avg) {
    const dyn = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        dyn[i] = Array.from({ length: n }, (v) => arr[i]);
        for (let j = i + 1; j < n; j++) {
            dyn[i][j] = (dyn[i][j - 1] + arr[j]) / (j - i + 1);
        }
    }

    ll(dyn);
}

getAverages(list);
