import { fromEvent } from 'rxjs';

const observer = {
    next: val => console.log(val)
}

/**
 * Event of DOM
 */

const src1$ = fromEvent<PointerEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

src1$.subscribe( ({x, y}) => {
    console.log(x,y)
});
src2$.subscribe( val => {
    console.log(val.key)
})