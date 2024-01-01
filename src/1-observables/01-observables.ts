import { Observable, Observer } from 'rxjs';

// create pbservable 
// const obs$ = Observable.create();
const observer:Observer<any> = {
    next: value => console.log('next', value),
    error: err => console.warn('err', err),
    complete:() =>   console.log('completed',),
}

const obs$ = new Observable<string>( subs => {
    subs.next('Holaaaaa');
    subs.next('Hola Mundo');

    //force an error
    // subs.error('An error here');

    subs.complete();
    subs.next('Hola Mundo');

});

// obs$.subscribe(
//     valor => console.log('next:' , valor),
//     error => console.warn('error:' , error),
//     () => console.info('Completed')

// );

obs$.subscribe(observer);
