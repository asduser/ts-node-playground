type CombineFunction = (v1: number, v2: number) => number;

const combine = (v1: number, v2: number): number => {
    return v1 + v2;
};

const execute = (name: string): CombineFunction => {
    console.log(`Who executed: ${name}` );
    return combine;
};

const result1 = execute('user1')(1, 2);
const result2 = execute('user2')(2, 3);
console.log(result1);
console.log(result2);