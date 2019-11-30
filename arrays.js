var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (originalArray, prependValue) {
  return [prependValue, ...originalArray]
}

function destructivelyAddElementToBeginningOfArray (originalArray, prependValue) {
  return originalArray.unshift(prependValue)
}

function addElementToEndOfArray (originalArray, appendValue) {
  return [...originalArray, appendValue]
}

function destructivelyAddElementToEndOfArray (originalArray, appendValue) {
  return originalArray.push(appendValue)
}

function accessElementInArray (array, index) {
  return array[index]
}
