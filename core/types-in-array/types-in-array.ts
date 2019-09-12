const fillIntoJSONArray = <T>(value: T): string => {
    const result: T[] = [];
    for (let i=0; i<10000; i++) {
        for (let j=0; j<1000; j++) {
            result.push(value);
        }
    }
    return JSON.stringify(result);
};

class User {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

console.time('string');
fillIntoJSONArray('string'); // 900ms
console.timeEnd('string');

console.time('number');
fillIntoJSONArray(1); // 500ms
console.timeEnd('number');

console.time('float');
fillIntoJSONArray(1.25); // 1600ms
console.timeEnd('float');

console.time('class');
fillIntoJSONArray(new User('bob')); // 2500ms
console.timeEnd('class');