import fruits from "./foods";
import { choice, remove } from "./helpers";

let foods = choice(fruits);

console.log(`I'm hangry for a ${fruits} please`);
console.log(`here just for you: ${fruits}`);
let leftovers = remove(fruits, foods);
console.log(`sorry we ran out, we have ${leftovers.leng} other items left`);

// log a message "i'm hangry for a RETURNED FRUIT please"
// log the mesage "here you go"
// log the message "still hangry can I have another"
// remove the fruit from the list of arrays,
// log the message "sorry we ran out, we have num of fruits left
