import { fromEvent, interval, map, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5,6];

const Heroes = [
    {
        name: 'Thor',
        power: 1500
    },
    {
        name: 'Fury',
        power: 500
    },
    {
        name: 'Spiderman',
        power: 1000
    },
]

const result = numbers.reduce((acum, curren) => acum + curren, 0);
const resulHeroes = Heroes.reduce(( acum, curr) => acum + curr.power, 0)
console.log(result)
console.log(resulHeroes)

interval(1000)
    .pipe(
        take(4),
        reduce( (acum, current) => acum + current  )
    )
    .subscribe({
        next: val => console.log('next' , val),
        complete: () => console.log('Completed')
    })