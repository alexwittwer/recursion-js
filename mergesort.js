function mergesort(arr) {
  if (arr.length === 0) return [];
  if (!Array.isArray(arr)) return "error: not an array";
  if (arr.length === 1) {
    return arr;
  }

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  const sortedLeft = mergesort(left);
  const sortedRight = mergesort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  while (left.length) {
    sortedArray.push(left.shift());
  }

  while (right.length) {
    sortedArray.push(right.shift());
  }

  return sortedArray;
}
