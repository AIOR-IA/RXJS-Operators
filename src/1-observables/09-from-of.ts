import { asyncScheduler, from, of } from 'rxjs';
/**
 * of = toma argumentos y genera una secuencia
 * from = crea un observable en base a : array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('completed')
}

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Lenar');
const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async res => {
//     const data = await res.json();
//     console.log(data)
// })
// source$.subscribe( observer );