import {
    completedTasks,
    courseSelection,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen,
    olderFiftyFn,
    uncompletedTasks
} from './filter';
import {City, Course} from '../data/types';
import {city, tasks} from '../data/data';

test('separate people', () => {
    const olderFifty: number[] = [18, 21, 49, 63, 81]
    const result: number[] = olderFiftyFn(olderFifty, 50)
    expect(result.length).toBe(2)
})

test('course selection', () => {
    const courses: Course[] = [
        {title: 'REACT', price: 230},
        {title: 'HTML', price: 180},
        {title: 'JS', price: 200},
        {title: 'CSS', price: 80},
    ]
    const result = courseSelection(courses, 200)
    expect(result.length).toBe(3)
    expect(result[0].title).toBe('HTML')
})

test('filter completed tasks', () => {
    const result = completedTasks(tasks)
    expect(result.length).toBe(3)
    expect(result[1].title).toBe('JS')
})

test('filter uncompleted tasks', () => {
    const result = uncompletedTasks(tasks)
    expect(result.length).toBe(1)
    expect(result[0].title).toBe('Angular')
})

test('Houses should be destroyed', () => {
    const result: City = demolishHousesOnTheStreet(city, 'Happy street');
    expect(result.houses.length).toBe(2);
    expect(result.houses[1].address.street.title).toBe('Hogwarts street');
});

test('buildings with correct staff count', () => {
    const buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
});