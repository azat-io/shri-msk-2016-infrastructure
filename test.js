import test from 'ava'
import helpers from './helpers'

test('Вычисление площади квадрата', t => {
  t.same(helpers.squareArea(2), 4)
})

test('Вычисление площади прямоугольника', t => {
  t.same(helpers.rectangeArea(2, 3), 6)
})

test('Вычисление площади треугольника', t => {
  t.same(helpers.triangleArea(3, 4, 5), 6)
})

test('Вычисление площади круга', t => {
  t.same(helpers.circleArea(10), 31.42)
})
