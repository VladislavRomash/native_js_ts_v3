import {
    addNewSkill,
    changeActivity,
    changeBudget,
    checkLiveStudent, createMessage,
    repairHouse,
    toChangeStaff
} from './functions';
import {City, student} from '../02_objects/objects';


let city: City = {
    title: 'Minsk',
    houses: [
        {
            builtAt: 2012, repaired: false, address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
        {
            builtAt: 2008, repaired: false, address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        },
        {
            builtAt: 2020, repaired: false, address: {
                number: 200,
                street: {
                    title: 'Hogwarts street'
                }
            }
        },
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {
                number: 200,
                street: {
                    title: 'Central Str'
                }
            }
        },
        {
            type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
                number: 200,
                street: {
                    title: 'Souths park str'
                }
            }
        },
    ],
    citizenNumbers: 100000
}

test('student should add new skill', () => {
    const skill = {id: 4, title: 'CSS'}
    const result = addNewSkill(student, skill)
    expect(result.technologies.length).toBe(4)
    expect(result.technologies[0].title).toBe('HTML')
    expect(result.technologies[3].title).toBe('CSS')
    expect(student).not.toEqual(result)
})

test('student should be active', () => {
    const activity = true
    const result = changeActivity(student, activity)
    expect(result.isActive).toBe(true)
})

test('does the student live in the city', () => {
    const cityName_1 = 'Minsk'
    const cityName_2 = 'Kiev'
    let result = checkLiveStudent(student, cityName_1)
    let result_2 = checkLiveStudent(student, cityName_2)
    expect(result).toBe(true)
    expect(result_2).toBe(false)
})

test('Budget should be changed for HOSPITAL', () => {
    let result = changeBudget(city, 100000, 'HOSPITAL')
    expect(result.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(result.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0]).not.toEqual(result.governmentBuildings[0])
})

test('Budget should be changed for FIRE-STATION', () => {
    expect(city.governmentBuildings[1].budget).toBe(500000)
    let result = changeBudget(city, -100000, 'FIRE-STATION')
    expect(result.governmentBuildings[1].budget).toBe(400000)
    expect(city.governmentBuildings[1]).not.toEqual(result.governmentBuildings[1])
})

test('House should be repaired', () => {
    const result = repairHouse(city)
    expect(result.houses[1].repaired).toBeTruthy()
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1]).not.toEqual(result.houses[1])
})

test('staff should be fired', () => {
    const result = toChangeStaff(city, -20, 'HOSPITAL')
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(result.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hired', () => {
    const result = toChangeStaff(city, 20, 'HOSPITAL')
    expect(result.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
})

test('Greeting', () => {
    const result = createMessage(city)
    expect(result).toBe('Hello Minsk citizens. Us 100000')
})