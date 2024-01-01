import { asyncScheduler } from 'rxjs';
/**
 *  asyncScheduler 
 */

// ambos se pueden hacer con el asyncScheduler pero con mas control
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hi world');
const saludar2 = name => console.log(`Hi ${name}`);



// 1: funcion, 2: tiempo a ejecutar
// asyncScheduler.schedule( saludar, 2000)

// 1: funcion, 2: tiempo a ejecutar, 3: send arguments
// asyncScheduler.schedule( saludar2, 2000, 'Lenar')

const subs = asyncScheduler.schedule( function( state ) {
    console.log('state', state);
    this.schedule( state + 1, 1000 )

}, 2500, 0)

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )