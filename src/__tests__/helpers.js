import faker from 'faker'
import { projects } from '../test/data/projects'
import { deepEqual } from "../Utils/deepEqual";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// let num: number, str: string, arr: Array<any>, obj: object, bol: boolean
let num, str, arr, obj, bol;
beforeAll(() => {
  num = faker.random.number()
  str = faker.random.words()
  arr = [num, str, num, str, str, str]
  obj = projects[0]
  bol = false
})
describe('Should Return True', () => {
  test('called with numbers', () => {
    expect(deepEqual(num, num)).toBeTruthy()
  })
  test('called with strings', () => {
    expect(deepEqual(str, str)).toBeTruthy()
  })
  test('called with arrays', () => {
    expect(deepEqual(arr, arr)).toBeTruthy()
  })
  test('called with arrays and same array shuffled', () => {
    expect(deepEqual(arr, arr.sort((a, b) => a - b).reverse())).toBeTruthy()
  })
  test('called with Object', () => {
    expect(deepEqual(obj, obj)).toBeTruthy()
  })
  test('called with Boolean', () => {
    expect(deepEqual(bol, bol)).toBeTruthy()
  })
})
describe('Should Return False', () => {
  test('called with different arg types', () => {
    expect(deepEqual(num, str)).toBeFalsy()
  })
  test('called with numbers', () => {
    expect(deepEqual(num, num + 5)).toBeFalsy()
  })
  test('called with strings', () => {
    expect(deepEqual(str, str.slice(0, 2))).toBeFalsy()
  })
  test('called with arrays', () => {
    expect(deepEqual(arr, arr.pop())).toBeFalsy()
  })
  test('called with arrays and same array shuffled', () => {
    expect(deepEqual(arr.pop(), arr.sort((a, b) => a - b).reverse())).toBe(
      false,
    )
  })
  test('called with Object', () => {
    expect(deepEqual(obj, projects[1])).toBeFalsy()
  })
  test('called with Boolean', () => {
    expect(deepEqual(!bol, bol)).toBeFalsy()
  })
})
