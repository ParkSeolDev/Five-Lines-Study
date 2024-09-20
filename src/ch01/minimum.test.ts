function minimumIfPositiveInfinity(result: number, arr: number[][], x: number, y: number) {
  if (result > arr[x][y]) {
    result = arr[x][y];
  }

  return result;
}

function calculateRowMin(arr: number[][], x: number, result: number) {
  for (let y = 0; y < arr[x].length; y++) {
    result = minimumIfPositiveInfinity(result, arr, x, y);
  }

  return result;
}

function calculateRow(arr: number[][], result: number) {
  for (let x = 0; x < arr.length; x++) {
    result = calculateRowMin(arr, x, result);
  }

  return result;
}

const calculateMinimum = (arr: number[][]) => {
  const result = Number.POSITIVE_INFINITY;

  return calculateRow(arr, result);
};

describe('minimum', () => {
  it('두 배열의 값이 주어지면 최소값을 리턴한다.', () => {
    expect(
      calculateMinimum([
        [1, 2, 4],
        [1, 2, 3],
      ]),
    ).toBe(1);
  });
});
