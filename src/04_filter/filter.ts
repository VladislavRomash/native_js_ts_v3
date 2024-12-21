import {City, Course, GovernmentBuildings, Task} from '../types';

export const olderFiftyFn = (arr: number[], condition: number): number[] => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > condition) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

export const courseSelection = (courses: Course[], price: number): Course[] => courses.filter(f => f.price <= price)

export const completedTasks = (tasks: Task[]): Task[] => tasks.filter(f => f.isDone)

export const uncompletedTasks = (tasks: Task[]): Task[] => tasks.filter(f => !f.isDone)

export const demolishHousesOnTheStreet = (city: City, street: string): City => ({
    ...city,
    houses: city.houses.filter(f => f.address.street.title !== street)
})

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: GovernmentBuildings[], count: number): GovernmentBuildings[] => governmentBuildings.filter(f => f.staffCount > count)