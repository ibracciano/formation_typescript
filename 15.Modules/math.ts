// simple exportation

export function sum(a: number, b: number): number {
  return a + b;
}
export function sub(a: number, b: number): number {
  return a - b;
}

// default exportation

export default function multiply(a: number, b: number): number {
  return a * b;
}

// namespace

export namespace MathUtils {
  export function divide(a: number, b: number): number {
    return a / b;
  }
  export function squareRoot(a: number): number {
    return Math.sqrt(a);
  }
}
