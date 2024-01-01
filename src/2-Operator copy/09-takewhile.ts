import { first, fromEvent, tap } from "rxjs";
import { map, takeWhile } from 'rxjs/operators';

const clicks$ = fromEvent<PointerEvent>(document, 'click');

clicks$
    .pipe(
        map( ({x, y}) => ({x, y})),
        // takeWhile( ({y}) => y <= 250)

        // the last argument true, return de last value that break the condition
        takeWhile( ({y}) => y <= 250, true)

    )
    .subscribe( {
        next: res => console.log('next', res),
        complete: () => console.log('completed') 
    })