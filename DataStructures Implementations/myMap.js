const double = num => 2 * num;
const doubleEach = input => input.map(double);

const square = num => num * num;
const squareEach = input => input.map(square);

const doubleAndSquareEach = input => input.map(double).map(square);

const myMap = (array, fn) => {
  const answer = [];
  for(let i = 0, l = array.length; i < l; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};
