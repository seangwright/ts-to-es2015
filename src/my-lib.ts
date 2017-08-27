export const PI = 3.1415;

export const add = (x: number) => (y: number) => x + y;

export const addToPI = add(PI);

export const sayHello = (name: string) => `Hello ${name}`;