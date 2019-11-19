let val;

const today = new Date();
let birthday = new Date('3-25-1928');
birthday = new Date('March 2 1972 12:34:13');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

val = birthday;

document.body.innerHTML = val;