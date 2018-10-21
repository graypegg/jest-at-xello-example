/**
 * Adds the first two parameters together and returns the result.
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns {number}
 */
export function sum (
  firstNumber,
  secondNumber
) {
  const element = document.createElement('div')
  element.appendChild(
    document.createTextNode(
      firstNumber + secondNumber
    )
  )
  return element
}