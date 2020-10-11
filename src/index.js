module.exports = function reverse (n) {
  let result = '';

  n.toString().split('').forEach((current) => {
    result = current + result;
  })

  result = result[result.length - 1] === '-' ? result.slice(0, -1) : result

  return result;
}
