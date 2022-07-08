function sum(a: number, b: number): number {
    return a + b;
}

const sum2 = (a: number, b: number)  => { a + b };

sum2(1, 2);
console.log(sum(1, 2));
console.log(sum2);