import React from 'react';
import {City, Student, Technologies} from '../02_objects/objects';

export const addNewSkill = (student: Student, skill: Technologies) => ({
    ...student,
    technologies: [...student.technologies, skill]
});

export const changeActivity = (student: Student, activity: boolean) => ({...student, isActive: activity})

export const checkLiveStudent = (student: Student, city: string) => {
    return student.address.city.title === city
}

export const changeBudget = (city: City, budget: number, building: string) => ({
    ...city,
    governmentBuildings: city.governmentBuildings.map(m => m.type === building
        ? {...m, budget: m.budget + budget}
        : m)
})

export const repairHouse = (city: City) => ({
    ...city, houses: city.houses.map(m => m.builtAt < 2010
        ? {...m, repaired: true}
        : m)
})

export const toChangeStaff = (city: City, count: number, organization: string) => ({
    ...city,
    governmentBuildings: city.governmentBuildings.map(m => m.type === organization
        ? {
            ...m,
            staffCount: m.staffCount + count
        }
        : m)
})

export const createMessage = (city: City) => {
    return `Hello ${city.title} citizens. Us ${city.citizenNumbers}`
}