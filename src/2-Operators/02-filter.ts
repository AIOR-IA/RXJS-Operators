import { filter, fromEvent, map, of, range } from 'rxjs';
/**
 * filter = sirve para filtrar por una condicion
 */
range(1,10)
    .pipe(
        filter( (val, i) => {
            console.log('index', i)
            return val % 2 !== 0;
        })
    )
    // .subscribe(console.log)

const characters = [
    {
        id: 1,
        type: 'hero',
        name: 'Batman'
    },
    {
        id: 2,
        type: 'hero',
        name: 'Superman'
    },
    {
        id: 3,
        type: 'villain',
        name: 'Joker'
    }
] 
 // we can use OF or FROM (with from we don't need to use operator spreed)
// const heroes = from( ...characters )
const heroes = of( ...characters )
                    .pipe(
                        filter( hero => hero.type === 'hero')
                    )
                    .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')
                        .pipe(
                            map( event =>  event.code),
                            filter( code => code === 'Enter' )
                        )
// solo se dispara si hacemos ENTER por el filter aplicado
keyup$.subscribe(console.log)
