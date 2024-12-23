import {Developers} from '../data/types';
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, transform} from './map';
import {city, people} from '../data/data';


test('people to developers', () => {
    const result: Developers[] = transform(people)
    expect(result[0].firstName).toBe('Andrew')
    expect(result[1].lastName).toBe('Tehnick')
    expect(result.length).toBe(3)
})

test('list of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central street');
    expect(streetsNames[1]).toBe('Souths park street');
})

test('list of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White street');
    expect(streetsNames[1]).toBe('Happy street');
    expect(streetsNames[2]).toBe('Hogwarts street');
})

test('create greeting messages for streets', () => {
    const messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street');
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Hogwarts street');
});