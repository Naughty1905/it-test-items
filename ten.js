let recoverSecret = function(chains) {
    let char, is_first, next;

    if (!chains.length) return '';

    for (let chain of chains) {
        char = chain[0];

        is_first = chains.every(function(row) {
            return row.indexOf(char, 1) === -1;
        });

        if (is_first) break;
    }

    next = chains
        .map(row => row[0] === char ? row.slice(1) : row)
        .filter(row => row.length);

    return char + recoverSecret(next);
}
