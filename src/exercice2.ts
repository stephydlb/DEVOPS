/*function addnumbers(a: number,b: number){
    return a + b;
}

var sum: number = addnumbers(45, 145)

console.log('la somme de deux nombre est: ' +sum)


// ARRAYS

let names:  string[] = ['mario', 'john','pat']
let ages: number[] = [23, 24, 45]

names.push('bowser')
ages.push(56)

// type inference with arrays


let fruits = ['apples', 'pears', 'bananas']
fruits.push('peaches')
const f = fruits[3]
let things = [1, true, 'hello']

const t = things[0]


// object literals


let user: {firstName: string, age: number, id: number} = {
    firstName: 'mario',
    age:56,
    id: 1
}

user.firstName = 'peach'
user.id = 5



// type inference with object litterals

let person = {
    name: 'steph',
    score: 54
}

person.name = 'joh'
person.score = 56

const score = person.score



// FUNCTIONS

function addTwonumbers(a: number, b:number) {
    return a + b
}

const substractnumber = (a:number, b:number): number {
    return a - b
}

addTwonumbers(3, 9)
substractnumber(10, 2)


function addernumber(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

addernumber([3,4,5,6,7,8,6,5,74,3])



//RETURN TYPE INFERENCE

        function formatGreeting(name: string, greeting: string): string
function formatGreeting(name: string, greeting: string){
    return `${greeting}, ${name}`

    const result = formatGreeting('steph','greet')
}

let result = formatGreeting('steph','greet')
console.log(result)




// ANY TYPE

let age:any
let titre
age = 'steph'
age = 4

titre = 45
titre = {
    hello: 'world'
}

// any type in arrays

let things: any[] = ['hello', true, 30, null]
things.push({id: 123})



// function et any

function addTogether(value: any): any {
    return value + value
}

const resultat1 = addTogether('hey')
const resultat2 = addTogether(3)




// TUPLEs

let trys: [number, string,boolean]
trys = [34, 'steph', false]

function xyz(): [number, number] {
    const lat = 45.5
    const long = 33

    return [lat, long]
}

const [lat, long] = xyz()

// NAMED TUPLES


let employee: [name:string, age: number]

employee = ['best', 65]
console.log(employee[1])

*/

// INTERFACES


interface author {
    name: string
    avatar: string
}

const authorOne: author  = {name: 'steph', avatar: 'icons8-person-playing-handball-48.png'}


interface post{
    title: string
    body: string
    tags: string[]
    created_at: Date
    author: author
}

const newpost: post = {
    title: ' my  fist one',
    body: 'testing my code',
    tags: ['gaming','technologies'],
    created_at: new  Date(),
    author: authorOne

}