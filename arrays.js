var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (originalArray, prependValue) {
  return [prependValue, ...originalArray]
}

function destructivelyAddElementToBeginningOfArray (originalArray, prependValue) {
  return originalArray.unshift(prependValue)
}