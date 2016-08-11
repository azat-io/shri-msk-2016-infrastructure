import test from 'ava'
import helpers from './helpers'

test('Вычисление площади квадрата', t => {
  t.deepEqual(helpers.squareArea(2), 4)
})

test('Вычисление площади прямоугольника', t => {
  t.deepEqual(helpers.rectangeArea(2, 3), 6)
})

test('Вычисление площади треугольника', t => {
  t.deepEqual(helpers.triangleArea(3, 4, 5), 6)
})

test('Вычисление площади круга', t => {
  t.deepEqual(helpers.circleArea(10), 31.42)
})
