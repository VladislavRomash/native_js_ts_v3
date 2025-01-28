import {people, student} from '../data/data';

test('new variables (object)', () => {
    const {id, name, age, isActive, ...rest} = student
    expect(id).toBe(1)
    expect(name).toBe('Max')
    expect(age).toBe(25)
    expect(isActive).toBe(true)
    expect(rest.technologies.length).toBe(3)
})

test('new variables with new title', () => {
    const {id: ID, name: NAME, age: AGE, isActive: ISACTIVE, ...rest} = student
    expect(ID).toBe(1)
    expect(NAME).toBe('Max')
    expect(AGE).toBe(25)
    expect(ISACTIVE).toBe(true)
    expect(rest.technologies.length).toBe(3)
})

test('new variables (array)', () => {
    const [andrew, pavel, dmitry] = people
    expect(people.length).toBe(3)
    expect(andrew.name).toBe('Andrew Developer')
    expect(pavel.name).toBe('Pavel Tehnick')
    expect(dmitry.name).toBe('Dmitry Transformator')
})