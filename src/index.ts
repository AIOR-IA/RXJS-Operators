import { catchError, map, of, pluck } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const apiKey = process.env.apikey;
const ts = process.env.ts;
const hash = process.env.hash;
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

const catchErrors = ( error : AjaxError ) => {
    console.warn('Error in ', error.message, ' status:' , error.status);
    return of([]);
}

ajax({
    url: url,
    method: 'GET',
    crossDomain: true,
    responseType: 'json',
  })
  .pipe(
    pluck('response', 'data', 'results'),
    catchError(catchErrors)
  )
  .subscribe(res => {
    console.log(res);
  });