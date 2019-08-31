import { Cache } from 'memory-cache';

const cache = new Cache();

// set initial value and reset it after 100ms
cache.put('value', 1, 200, () => {
    cache.put('value', 2);
});

let counter = 0;
const interval = setInterval(() => {
    counter++;
    if (counter > 3) {
        clearInterval(interval);
    } else {
        const valueFromCache = cache.get('value');
        console.log(valueFromCache);
    }
}, 100);