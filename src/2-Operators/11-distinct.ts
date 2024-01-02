import { distinct, from, of } from "rxjs";

/**
 * filtra como sql, que no toquen repetidos, la
 */
const numbers$ = of(1,1,1,2,2,3,3,2,2,4,4,5,3,1);

numbers$
    .pipe(
        distinct()
    )
    .subscribe( console.log ) // output 1 2 3 4 5
interface Character {
    name: string
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'X-men'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Wolverine'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Megaman'
    },
]

from(characters)
    .pipe(
        distinct( val => val.name )
    )
    .subscribe( console.log )