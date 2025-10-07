import {sum, sub} from "./module1.js"


/*import multiply from "./module2.js" 

console.log(multiply(5,2));*/


// Through default exports we can change the name

import products from "./module2.js" 

console.log(products(5,2));

// console.log(sum(9, 2));
// console.log(sub(9, 2));