// const select = document.querySelector('.main__select')

const squareButton = document.querySelector('.main__square-button')
const rectangleButton = document.querySelector('.main__rectangle-button')
const triangleButton = document.querySelector('.main__triangle-button')
const circleButton = document.querySelector('.main__circle-button')

squareButton.addEventListener('click', function () {
  const side = document.getElementById('main__square-side').value

  let result = document.getElementById('main__square-result')
  let myResult = side * side
  result.value = myResult
})

rectangleButton.addEventListener('click', function () {
  const rectWidth = document.getElementById('main__rectangle-weight').value
  const rectHeight = document.getElementById('main__rectangle-height').value

  let result = document.getElementById('main__rectangle-result')
  let myResult = rectWidth * rectHeight
  result.value = myResult
})

// ююююююююю
triangleButton.addEventListener('click', function () {
  const sideFirst = document.getElementById('main__triangle-side-1').value
  const sideSecond = document.getElementById('main__triangle-side-2').value
  const sideThird = document.getElementById('main__triangle-side-3').value
  const semiperimeter = (parseInt(sideFirst) + parseInt(sideSecond) + parseInt(sideThird)) / 2

  let result = document.getElementById('main__triangle-result')
  let myResult = Math.round(Math.sqrt(semiperimeter * (semiperimeter -
    sideFirst) * (semiperimeter - sideSecond) * (semiperimeter - sideThird)) * 100) / 100
  result.value = myResult
})

circleButton.addEventListener('click', function () {
  const radius = document.getElementById('main__circle-radius').value

  let result = document.getElementById('main__circle-result')
  let myResult = Math.round(Math.PI * radius * 100) / 100
  result.value = myResult
})
