import { debounceTime, fromEvent, map, mapTo, tap, pluck, distinctUntilChanged, throttleTime, asyncScheduler } from 'rxjs';

/**
 * DEBOUNCETIME = solo se dispara, despues que haya
 *  X tiempo desde la ultima vez que se emitio un evento
 */

const click$ = fromEvent(document, 'click');

click$
    .pipe(
        throttleTime(2000)
    )
    // .subscribe(console.log )

const input = document.createElement('input');
input.placeholder = 'write name...'
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' )

// filtra que lo que se envie no se vaya a repetir
// y que se dispare despues de 2seg de el last emit 
input$
    .pipe(
        throttleTime(2000, asyncScheduler, {
            leading: false,
            trailing: true
        }),
        //opcion 1
        pluck('target', 'value'),
        //opcion 2
        // map( (event:any) => event.target.value ),
        distinctUntilChanged()
    )
    .subscribe( console.log )