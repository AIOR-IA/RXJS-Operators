import { interval, timer } from 'rxjs';
/**
 *  interval es asyncrono
 */
const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('completed')
}

// no se dispara el completed
const interval$ = interval(1000);

// cuando termine se completa en automatico el timer
const timer$ = timer(2000);


console.log('start');
// interval$.subscribe( observer );
timer$.subscribe( observer );

console.log('end');
