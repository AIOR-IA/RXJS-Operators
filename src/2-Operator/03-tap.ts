import { filter, fromEvent, map, of, range, tap } from 'rxjs';
/**
 * tap = dispara efectos secundarios 
 */
const numbers$ = range(1,10);


numbers$
    .pipe(
        tap( x => console.log('before', x)),
        map( val => val * 10),
        tap({
            next: val => console.log('after', val),
            complete: () => console.log('completed')
        }),
    )
    .subscribe( val => console.log('subs', val))
