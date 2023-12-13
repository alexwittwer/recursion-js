export function collatz(num, total = -1) {
  total++;
  if (num === 1) {
    return total;
  } else if (num % 2 === 0) {
    return collatz(num / 2, total);
  } else {
    return collatz(3 * num + 1, total);
  }
}

function sumAll(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumAll(n - 1);
  }
}

function pow(n, e) {
  return e === 0 ? 1 : n * pow(n, e - 1);
}

function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function all(array, callback) {
  let copy = array.slice();

  if (copy.length === 0) {
    return true;
  }
  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array.shift() * productOfArray(array);
  }
}

function contains(object, arg) {
  for (const key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], arg);
    }
    if (object[key] === arg) {
      return true;
    }
  }
  return false;
}

function parseArray(array) {
  if (array.length === 0) {
    return 0;
  }

  let total = 0;
  let currentItem = array.shift();

  if (Array.isArray(currentItem)) {
    total += parseArray(currentItem);
  } else if (Number.isInteger(currentItem)) {
    total++;
  }

  return total + parseArray(array);
}

// squareNestedArray[1, 2] -- 1 + 4 = 5
function squareNestedArray(array) {
  if (array.length === 0) {
    return 0;
  }

  let currentItem = array.shift();

  if (Array.isArray(currentItem)) {
    return squareNestedArray(currentItem) + squareNestedArray(array);
  } else if (Number.isInteger(currentItem)) {
    return currentItem * currentItem + squareNestedArray(array);
  }

  return squareNestedArray(array);
}

function replicate(multiple, base) {
  if (multiple <= 0) return [];

  return [base].concat(replicate(multiple - 1, base));
}

function fibs(num) {
  if (num === 0) return [0];
  else if (num === 1) return [0, 1];
  else {
    const array = fibs(num - 1);
    array.push(array[num - 1] + array[num - 2]);
    return array;
  }
}
