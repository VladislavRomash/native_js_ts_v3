import {Developers, GovernmentBuildings, House, Man} from '../data/types';

export const transform = (people: Man[]): Developers[] => people.map(m => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: m.name.split(' ')[0],
        lastName: m.name.split(' ')[1]
    })
)

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildings[]): string[] => governmentBuildings.map(m => m.address.street.title)

export const getStreetsTitlesOfHouses = (houses: House[]): string[] => houses.map(m => m.address.street.title)

export const createMessages = (houses: House[]): string[] => houses.map(m => `Hello guys from ${m.address.street.title}`)