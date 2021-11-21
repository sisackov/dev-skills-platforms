const enqueue = (num, dur) => (`${num} ${num === 1 ? dur.slice(0, dur.length - 1) : dur}`);

function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }

    const times = ['seconds', 'minutes', 'hours', 'days', 'years'];
    let dur, num;
    let res = [];

    for (let i = 0; seconds > 0 && i < times.length; i++) {
        dur = times[i];
        switch (dur) {
            case 'seconds':
            case 'minutes':
                num = seconds % 60;
                if (num > 0) {
                    res.unshift(enqueue(num, dur));
                }
                seconds = parseInt(seconds / 60);
                break;
            case 'hours':
                num = seconds % 24;
                if (num > 0) {
                    res.unshift(enqueue(num, dur));
                }
                seconds = parseInt(seconds / 24);
                break;
            case 'days':
                num = seconds % 365;
                if (num > 0) {
                    res.unshift(enqueue(num, dur));
                }
                seconds = parseInt(seconds / 365);
                break;
            case 'years':
                num = seconds;
                if (num > 0) {
                    res.unshift(enqueue(num, dur));
                }
                break;
        }
    }

    let str = res.join(', ');
    let comma = str.lastIndexOf(',');
    return comma === -1 ? str : str.slice(0, comma) + ' and' + str.slice(comma + 1);
}
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(15731080));


