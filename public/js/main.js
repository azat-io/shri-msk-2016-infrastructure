'use strict'

const squareButton = document.querySelector('.main__square-button')
const rectangleButton = document.querySelector('.main__rectangle-button')
const triangleButton = document.querySelector('.main__triangle-button')
const circleButton = document.querySelector('.main__circle-button')

squareButton.addEventListener('click', squareArea)
rectangleButton.addEventListener('click', rectangleArea)
triangleButton.addEventListener('click', triangleArea)
circleButton.addEventListener('click', circleArea)

function squareArea () {
  const side = document.getElementById('main__square-side').value
  let result = document.getElementById('main__square-result')

  let req = new window.XMLHttpRequest()
  req.addEventListener('load', function () {
    result.value = JSON.parse(this.responseText).result
  })
  let sqr = '?type=square&side=' + side
  req.open('GET', window.location.href + 'helpers' + sqr)
  req.send()
}

function rectangleArea (e) {
  const rectWidth = document.getElementById('main__rectangle-weight').value
  const rectHeight = document.getElementById('main__rectangle-height').value
  let result = document.getElementById('main__rectangle-result')

  let req = new window.XMLHttpRequest()
  req.addEventListener('load', function () {
    result.value = JSON.parse(this.responseText).result
  })
  let rct = '?type=rectangle&rectWidth=' + rectWidth + '&rectHeight=' + rectHeight
  req.open('GET', window.location.href + 'helpers' + rct)
  req.send()
}

function triangleArea () {
  const sideFirst = document.getElementById('main__triangle-side-1').value
  const sideSecond = document.getElementById('main__triangle-side-2').value
  const sideThird = document.getElementById('main__triangle-side-3').value
  let result = document.getElementById('main__triangle-result')

  let req = new window.XMLHttpRequest()
  req.addEventListener('load', function () {
    result.value = JSON.parse(this.responseText).result
  })
  let trg = '?type=triangle&sideFirst=' + sideFirst + '&sideSecond=' +
    sideSecond + '&sideThird=' + sideThird
  req.open('GET', window.location.href + 'helpers' + trg)
  req.send()
}

function circleArea () {
  const radius = document.getElementById('main__circle-radius').value
  let result = document.getElementById('main__circle-result')

  let req = new window.XMLHttpRequest()
  req.addEventListener('load', function () {
    result.value = JSON.parse(this.responseText).result
  })
  let crl = '?type=circle&radius=' + radius
  req.open('GET', window.location.href + 'helpers' + crl)
  req.send()
}
