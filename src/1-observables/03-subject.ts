import { Observable, Observer, Subject } from 'rxjs';


const observer:Observer<any> = {
    next: value => console.log('next', value),
    error: err => console.warn('err', err),
    complete:() =>   console.log('completed'),
}

const intervals$ = new Observable( subs => {
    const intervalID = setInterval(
                () => subs.next( Math.random() )
        ,1000);

    return () => clearInterval( intervalID );
})

/**
 * 1- Casteo multiple
 * 2- Es un observer
 * 3- Next, error, complete
 */
const subject$ = new Subject();
const internalSubs = intervals$.subscribe( subject$ );


// ambos devuelven diferentes valores , si quiero obtener la misma info a todos mis
// susbcribers usar  SUBJECT
// const subs1 = intervals$.subscribe( console.log )
// const subs2 = intervals$.subscribe( console.log )

const subs1 = subject$.subscribe( rnd => console.log('Subs1', rnd) )
const subs2 = subject$.subscribe( rnd => console.log('Subs2', rnd) )

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    internalSubs.unsubscribe();
}, 3500);