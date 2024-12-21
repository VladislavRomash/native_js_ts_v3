import React from 'react';
import {City, Student} from '../types';

export const student: Student = {
    id: 1,
    name: 'Max',
    age: 25,
    isActive: true,
    address: {
        street: 'Lenina',
        city: {
            title: 'Minsk',
            country: 'Belarus',
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'React'},
        {id: 3, title: 'TS'},
    ]
}

export const addHousesToCity = (obj: City) => {
    return {
        ...obj,
        houses: [
            {builtAt: 2012, repaired: false, address: {number: 17, street: {title: 'Lenina'}}},
            {builtAt: 1976, repaired: true, address: {number: 65, street: {title: 'White street'}}},
            {builtAt: 2024, repaired: false, address: {number: 34, street: {title: 'Sovetskaya'}}}]
    }
}
export const addGovernmentBuildings = (obj: City) => {
    return {
        ...obj, governmentBuildings: [
            {
                type: 'Fire station',
                budget: 200000,
                staffCount: 500,
                address: {
                    number: 17,
                    street:
                        {title: 'Mira'}
                }
            },
            {
                type: 'Hospital',
                budget: 500000,
                staffCount: 1500,
                address: {
                    number: 4,
                    street:
                        {title: 'Surganova'}
                }
            },
        ]
    }
}