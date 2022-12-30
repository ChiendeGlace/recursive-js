const fibonacci = (index) => {
    let a = 1;
    let b = 1;
    let c;
    if (index < 2) {
        return index;
    } else {
        for (let i = 2; i < index; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
};

console.log(fibonacci(10));
console.log(fibonacci(4));

const fibonacciRecursive = (index) => {
    if (index < 2) {
        return index;
    } else {
        return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
    }
};

console.log(fibonacciRecursive(19));
