import { first, fromEvent, tap } from "rxjs";

const clicks$ = fromEvent<PointerEvent>(document, 'click');

clicks$
    .pipe(
        tap( res => console.log('tap', res)),
        first<PointerEvent>( event => event.clientY >= 360)
    )
    .subscribe( {
        next: res => console.log('next', res),
        complete: () => console.log('completed') 
    })