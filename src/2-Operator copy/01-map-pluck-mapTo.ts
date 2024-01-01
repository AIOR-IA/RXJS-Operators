import { fromEvent, map, mapTo, pipe, pluck, range } from 'rxjs';
/**
 * pluck = obtiene una propiedad de un objeto en especifico
 */
range(1,6)
    .pipe(
        map<number,string>( res =>  (res * 10).toString() )
    )
    .subscribe( console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Key pressed')
);



keyUp$
    .pipe( 
        map( res => res.code)
     )
    .subscribe( val => console.log('map', val));

keyUpPluck$.subscribe( code => console.log('pluck', code))
keyUpMapTo$.subscribe( code => console.log('MapTo', code))
