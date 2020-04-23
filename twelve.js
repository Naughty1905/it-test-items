const delegates = [
    { s: 'year', v: 60 * 60 * 24 * 365 },
    { s: 'day', v: 60 * 60 * 24 },
    { s: 'hour', v: 60 * 60 },
    { s: 'minute', v: 60 },
    { s: 'second', v: 1 }
];

function formatDuration (seconds) {
    if (!seconds) return 'now';

    return delegates.reduce((ret, dg, idx) => {
        const val = Math.floor(seconds / dg.v);
        if (!val) return ret;
        seconds -= dg.v * val;
        const str = val > 1 ? dg.s + 's' : dg.s;
        const add = !ret ? '' : (seconds > 0 ? ', ' : ' and ');
        return ret + add + `${val} ${str}`;
    }, '');
}
