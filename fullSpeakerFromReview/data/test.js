// {
//     speakers: [{}, {}, {}]
// }

// speaker: [1, 2, 3, 4, 5]

let data = require('./data.json');

// console.log(data.speakers);

let photoDeck = [];

data.speakers.forEach((speakerObj) => {
	photoDeck = photoDeck.concat(speakerObj.artwork);
});

console.log(photoDeck);

if (photoDeck.length > 0) {
	for (let i = 0; i < photoDeck.length; i++) {
		photoDeck[i];
	}
}

let a = [ 1, 2 ];

let b = [ 3, 4 ];

let c = [];

c.push(a);

c.push('st');
