import {stringToArr, sumNum} from './first';

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 5
    b = 5
    c = 7
})

test('string to array', () => {
    const string = 'Hello World'
    const result = stringToArr(string)
    expect(result.length).toBe(2)
    expect(result[1]).toBe('World')
})

test('sum numbers', () => {
    a = 2
    const result = sumNum(a, b, c)
    expect(result).toBe(14)
})

test('sum numbers default', () => {
    const result = sumNum(a, b, c)
    expect(result).toBe(17)
})

