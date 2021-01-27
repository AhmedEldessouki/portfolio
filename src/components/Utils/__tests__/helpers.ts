import faker from 'faker'
import {projects} from '../../../test/data/projects'
import {deepEqual} from '../helpers'

let num: number, str: string, arr: Array<any>, obj: object, bol: boolean
beforeAll(() => {
  num = faker.random.number()
  str = faker.random.words()
  arr = [num, str, num, str, str, str]
  obj = projects[0]
  bol = false
})
describe('Should Return True', () => {
  test('called with numbers', () => {
    expect(deepEqual(num, num)).toBe(true)
  })
  test('called with strings', () => {
    expect(deepEqual(str, str)).toBe(true)
  })
  test('called with arrays', () => {
    expect(deepEqual(arr, arr)).toBe(true)
  })
  test('called with arrays and same array shuffled', () => {
    expect(deepEqual(arr, arr.sort((a, b) => a - b).reverse())).toBe(true)
  })
  test('called with Object', () => {
    expect(deepEqual(obj, obj)).toBe(true)
  })
  test('called with Boolean', () => {
    expect(deepEqual(bol, bol)).toBe(true)
  })
})
describe('Should Return False', () => {
  test('called with different arg types', () => {
    expect(deepEqual(num, str)).toBe(false)
  })
  test('called with numbers', () => {
    expect(deepEqual(num, num + 5)).toBe(false)
  })
  test('called with strings', () => {
    expect(deepEqual(str, str.slice(0, 2))).toBe(false)
  })
  test('called with arrays', () => {
    expect(deepEqual(arr, arr.pop())).toBe(false)
  })
  test('called with arrays and same array shuffled', () => {
    expect(deepEqual(arr.pop(), arr.sort((a, b) => a - b).reverse())).toBe(
      false,
    )
  })
  test('called with Object', () => {
    expect(deepEqual(obj, projects[1])).toBe(false)
  })
  test('called with Boolean', () => {
    expect(deepEqual(!bol, bol)).toBe(false)
  })
})
