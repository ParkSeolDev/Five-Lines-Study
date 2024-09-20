function sum(arr: number[]) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function size(arr: number[]) {
  return arr.length;
}

const average = (arr: number[]) => sum(arr) / size(arr);

describe('average', () => {
  it('배열의 평균값', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});
