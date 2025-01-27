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

export type Course = {
    title: string
    price: number
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export type Man = {
    name: string
    age: number
}

export type Developers = {
    stack: string[],
    firstName: string
    lastName: string
}

export type User = {
    id: string
    name: string
}