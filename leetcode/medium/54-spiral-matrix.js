const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

var spiralOrder = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let direction = 'right';
    let [left, top, right, bottom] = [0, 0, n - 1, m - 1];
    const res = [];

    while (left <= right && top <= bottom) {
        switch (direction) {
            case 'right':
                for (let i = left; i <= right; i++) {
                    res.push(matrix[top][i]);
                }
                // res.push(...matrix[top].slice(left, right + 1));
                top++;
                direction = 'down';
                break;
            case 'down':
                for (let i = top; i <= bottom; i++) {
                    res.push(matrix[i][right]);
                }
                right--;
                direction = 'left';
                break;
            case 'left':
                for (let i = right; i >= left; i--) {
                    res.push(matrix[bottom][i]);
                }
                bottom--;
                direction = 'up';
                break;
            case 'up':
                for (let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left]);
                }
                left++;
                direction = 'right';
                break;
        }
    }

    return res;
};

console.log(spiralOrder(mat));
