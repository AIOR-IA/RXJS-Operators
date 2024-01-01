import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a iure facilis perspiciatis dolores. Cupiditate, quos consectetur, 
<br>nemo commodi temporibus beatae sunt rem laboriosam voluptates blanditiis totam quisquam, aut nam? Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. Culpa nam nostrum dignissimos! Placeat provident numquam <br>debitis nostrum saepe corporis. Eos, maiores? Aperiam tempore voluptatibus <br>nam ipsum sint cum dolore nihil maxime! Sit fuga error laborum dignissimos cumque exercitationem ducimus quidem veritatis voluptates ipsam. Necessitatibus quod, exercitationem pariatur veritatis rerum placeat.
<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam aliquam. Dolor eveniet praesentium enim vitae veniam nulla omnis, odio maxime repellat ex vel quod laudantium labore blanditiis asperiores quas quasi iure delectus quibusdam nostrum ullam exercitationem, dolorem in libero! Similique blanditiis fugit est labore ad, perspiciatis molestias <br>aliquid necessitatibus molestiae amet facere harum, sint eveniet sequi deserunt dolorem in aut corporis, assumenda ex hic commodi? Labore ipsum harum voluptatibus sint natus reprehenderit atque sequi maiores nobis! <br>Cumque sit animi quo consequuntur qui, necessitatibus totam velit nulla perferendis illo architecto quam consequatur temporibus quod rerum <br>suscipit veritatis rem harum ab dicta ipsa? Nesciunt adipisci reprehenderit eius iure iste quaerat culpa eligendi laborum mollitia! Vel, <br>fuga corrupti alias assumenda laudantium velit, quod numquam error incidunt omnis unde distinctio officiis. Maiores, qui!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab alias, eos dolorem quidem modi laudantium eveniet quia temporibus culpa quasi sunt, <br>aliquam minima corporis ipsam, omnis odio veniam unde dolore similique esse natus et ex? Cupiditate suscipit in doloribus voluptatem, beatae at <br>accusantium dignissimos rem, rerum quibusdam aliquam nam eum voluptas ratione explicabo itaque. Fugiat, assumenda. Consequuntur odit nesciunt <br>tempore magni amet ratione nam quia nihil, eaque at eligendi aut.
<br>aliquid necessitatibus molestiae amet facere harum, sint eveniet sequi deserunt dolorem in aut corporis, assumenda ex hic commodi? Labore ipsum harum voluptatibus sint natus reprehenderit atque sequi maiores nobis! <br>Cumque sit animi quo consequuntur qui, necessitatibus totam velit nulla perferendis illo architecto quam consequatur temporibus quod rerum <br>suscipit veritatis rem harum ab dicta ipsa? Nesciunt adipisci reprehenderit eius iure iste quaerat culpa eligendi laborum mollitia! Vel, <br>fuga corrupti alias assumenda laudantium velit, quod numquam error incidunt omnis unde distinctio officiis. Maiores, qui!
Lorem ipsum, dolor sit amet consectetur <br>adipisicing elit. Ab alias, eos dolorem quidem modi laudantium eveniet quia temporibus culpa quasi sunt, <br>aliquam minima corporis ipsam, omnis odio veniam unde dolore similique esse natus et ex? Cupiditate suscipit in doloribus voluptatem, beatae at <br>accusantium dignissimos rem, rerum quibusdam aliquam nam eum voluptas ratione explicabo itaque. Fugiat, assumenda. Consequuntur odit nesciunt <br>tempore magni amet ratione nam quia nihil, eaque at eligendi aut.
<br>nemo commodi temporibus beatae sunt rem laboriosam voluptates blanditiis totam quisquam, aut nam? Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. Culpa nam nostrum dignissimos! Placeat provident numquam <br>debitis nostrum saepe corporis. Eos, maiores? Aperiam tempore voluptatibus <br>nam ipsum sint cum dolore nihil maxime! Sit fuga error laborum dignissimos cumque exercitationem ducimus quidem veritatis voluptates ipsam. Necessitatibus quod, exercitationem pariatur veritatis rerum placeat.
<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsam aliquam. Dolor eveniet praesentium enim vitae veniam nulla omnis, odio maxime repellat ex vel quod laudantium labore blanditiis asperiores quas quasi iure delectus quibusdam nostrum ullam exercitationem, dolorem in libero! Similique blanditiis fugit est labore ad, perspiciatis molestias <br>aliquid necessitatibus molestiae amet facere harum, sint eveniet sequi deserunt dolorem in aut corporis, assumenda ex hic commodi? Labore ipsum harum voluptatibus sint natus reprehenderit atque sequi maiores nobis! <br>Cumque sit animi quo consequuntur qui, necessitatibus totam velit nulla perferendis illo architecto quam consequatur temporibus quod rerum <br>suscipit veritatis rem harum ab dicta ipsa? Nesciunt adipisci reprehenderit eius iure iste quaerat culpa eligendi laborum mollitia! Vel, <br>fuga corrupti alias assumenda laudantium velit, quod numquam error incidunt omnis unde distinctio officiis. Maiores, qui!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab alias, eos dolorem quidem modi laudantium eveniet quia temporibus culpa quasi sunt, <br>aliquam minima corporis ipsam, omnis odio veniam unde dolore similique esse natus et ex? Cupiditate suscipit in doloribus voluptatem, beatae at <br>accusantium dignissimos rem, rerum quibusdam aliquam nam eum voluptas ratione explicabo itaque. Fugiat, assumenda. Consequuntur odit nesciunt <br>tempore magni amet ratione nam quia nihil, eaque at eligendi aut.
<br>aliquid necessitatibus molestiae amet facere harum, sint eveniet sequi deserunt dolorem in aut corporis, assumenda ex hic commodi? Labore ipsum harum voluptatibus sint natus reprehenderit atque sequi maiores nobis! <br>Cumque sit animi quo consequuntur qui, necessitatibus totam velit nulla perferendis illo architecto quam consequatur temporibus quod rerum <br>suscipit veritatis rem harum ab dicta ipsa? Nesciunt adipisci reprehenderit eius iure iste quaerat culpa eligendi laborum mollitia! Vel, <br>fuga corrupti alias assumenda laudantium velit, quod numquam error incidunt omnis unde distinctio officiis. Maiores, qui!
Lorem ipsum, dolor sit amet consectetur <br>adipisicing elit.
`

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
progressBar.style.width = '20%'
body.append(progressBar);

const calculatePercentageScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } =  event.target.documentElement;
    return ( scrollTop / (scrollHeight - clientHeight )) * 100 ;
}


//Streams 
const scroll$ = fromEvent<any>(document, 'scroll');

const progress$ = scroll$.pipe(
    // tap( event => console.log(event)),
    map( res => calculatePercentageScroll(res) ),
    tap( event => console.log(event)),

);

progress$.subscribe( percentage => {
    // console.log(percentage)
    progressBar.style.width = `${percentage}%`;
})