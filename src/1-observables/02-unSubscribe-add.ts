import { Observable, Observer } from 'rxjs';


const observer:Observer<any> = {
    next: value => console.log('next', value),
    error: err => console.warn('err', err),
    complete:() =>   console.log('completed'),
}

const intervals = new Observable( subs => {
    let cont = 0
    setInterval(() => {
        subs.next(cont++);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 5000);
})

const subs1 = intervals.subscribe(observer);
const subs2 = intervals.subscribe(observer);
const subs3 = intervals.subscribe(observer);

// add subscribers into subs1
subs1.add( subs2 )
subs1.add( subs3 )


setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
}, 3000);