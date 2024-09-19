import {addGovernmentBuildings, addHousesToCity, City} from './objects';


let city: City

beforeEach(() => {
    city = {
        title: 'Minsk',
        houses: [],
        governmentBuildings: [],
        citizenNumbers: 100200,
    }
})

test('city should 3 houses', () => {
    const result = addHousesToCity(city)
    expect(result.houses.length).toBe(3)
    expect(result.houses[0].builtAt).toBe(2012)
    expect(result.houses[0].repaired).toBe(false)
    expect(result.houses[0].address.number).toBe(17)
    expect(result.houses[0].address.street.title).toBe('Lenina')
    expect(result.houses[1].address.number).toBe(65)
    expect(result.houses[2].address.street.title).toBe('Sovetskaya')
})

test('city should have hospital and fire station', () => {
    const result = addGovernmentBuildings(city)
    expect(result.governmentBuildings.length).toBe(2)
    expect(result.governmentBuildings[0].type).toBe('Fire station')
    expect(result.governmentBuildings[0].budget).toBe(200000)
    expect(result.governmentBuildings[0].staffCount).toBe(500)
    expect(result.governmentBuildings[0].address.street.title).toBe('Mira')
    expect(result.governmentBuildings[1].address.street.title).toBe('Surganova')
})