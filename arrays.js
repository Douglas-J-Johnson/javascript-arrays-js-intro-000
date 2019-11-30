var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (originalArray, prependValue) {
  originalArray = originalArray.unshift(prependValue)
  return originalArray
}
