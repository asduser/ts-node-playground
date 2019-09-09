const counting = (size: number = 1000000): number => {
    let total = 1;
    for (let i = 1; i <= size; i++) {
        total += i;
    }
    return total;
}

const syncEvaluation = () => {
    console.time('sync');
    for (let i = 0; i < 100; i++) {
        counting();
    }
    console.timeEnd('sync');
};

const asyncEvaluation = () => {
    console.time('async');
    for (let i = 0; i < 100; i++) {
        setTimeout(counting, 0);
    }
    console.timeEnd('async');
};

syncEvaluation(); // 90ms
asyncEvaluation(); // 0.6ms