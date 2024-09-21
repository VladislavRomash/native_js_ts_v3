import React from 'react';

export type Technologies = {
    id: number
    title: string
}
export type CityObj = {
    title: string;
    country: string;
}
export type AddressObj = {
    street: string;
    city: CityObj;
}
export type Student = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressObj
    technologies: Technologies[]
}

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

export type GovernmentBuildings = {
    type: string
    budget: number
    staffCount: number
    address: Address
}
export type Street = {
    title: string
}
export type Address = {
    number: number
    street: Street
}
export type House = {
    builtAt: number
    repaired: boolean
    address: Address
}
export type City = {
    title: string
    houses: House[]
    governmentBuildings: GovernmentBuildings[]
    citizenNumbers: number
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