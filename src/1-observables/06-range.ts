import { asyncScheduler, of, range } from 'rxjs';


/**
 * Event of DOM
 */

// const src1$ = of(1,2,3,4,5,6,7,8,9,10);


// sincrona
const src2$ = range(1,10);

// asincrona
const src3$ = range(1,10, asyncScheduler);

// src1$.subscribe( console.log )
console.log("inicio")
src2$.subscribe( console.log )
src3$.subscribe( console.log )
console.log("fin")
