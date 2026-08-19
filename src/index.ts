/**
 * Return the n-th number in the Fibonacci sequence.
 *
 * The sequence starts with 0, 1, 1, 2, ...
 */
export function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }

  let previous = 0;
  let current = 1;

  for (let index = 0; index < n; index += 1) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}

export default fibonacci;
