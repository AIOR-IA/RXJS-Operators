import { catchError, map, of, pluck } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const apiKey = process.env.apikey;
const ts = process.env.ts;
const hash = process.env.hash;
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

const handleError = ( response: Response ) => {
    if( !response.ok ) {
        throw new Error( response.statusText );
    }

    return response;
}

// fetch(url)
//     .then( handleError )
//     .then( res => res.json())
//     .then( data => console.log(data.data))
//     .catch( error => console.warn(error));

const catchErrors = ( error : AjaxError ) => {
    console.warn('Error in ', error.message, ' status:' , error.status);
    return of([]);
}

ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters',
    method: 'GET',
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json',
    },
    queryParams: {
      ts: ts,
      apikey: apiKey,
      hash: hash,
    },
  })
  .pipe(
    //opcions1
    pluck('response', 'data'),
    //opcion2
    // map( (resp:any) => resp.response.data ),
    catchError(catchErrors)
  )
  .subscribe(  res => {
    console.log(res);
  })
