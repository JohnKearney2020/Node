let pattern = /Bat(wo)?man/;
//the wo is optional. Batman or batwoman will match
let str = 'This is batman';

let result = str.match(pattern);
