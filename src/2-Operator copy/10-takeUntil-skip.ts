import { fromEvent, interval, skip, takeUntil } from "rxjs";

/**
 * takeUntil, emite valores hasta que el 2do observable emita
 * su primer valor
 */

const button = document.createElement('button');
button.innerHTML = 'StopTimer';

document.querySelector('body').append(button);

const counter$ = interval(1000); 
const clickBtn$ = fromEvent(button, 'click').
    pipe(
        // se dispara despuues del 2 click 0 - 1 - 2completed //
        skip(2)
    )

counter$
    .pipe(
        // se dispara hasta que llegue el evento click
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('Completed')
    })