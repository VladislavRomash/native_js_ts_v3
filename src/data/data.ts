import {City, Man, Student, Task, User} from './types';

export let city: City = {
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
                    title: 'Central street'
                }
            }
        },
        {
            type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
                number: 200,
                street: {
                    title: 'Souths park street'
                }
            }
        },
    ],
    citizenNumbers: 100000
}

export const tasks: Task[] = [
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'REACT', isDone: true},
    {id: 4, title: 'Angular', isDone: false}
]

export const people: Man[] = [
    {name: 'Andrew Developer', age: 34},
    {name: 'Pavel Tehnick', age: 18},
    {name: 'Dmitry Transformator', age: 55},
]

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

export const user: User[] = [
    {id: crypto.randomUUID(), name: 'Ann'},
    {id: crypto.randomUUID(), name: 'Nick'},
    {id: crypto.randomUUID(), name: 'Max'},
]