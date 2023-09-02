// console.log("hello world");
// let a=8;
// let b=2;
// let c=a+b;
// console.log("the of two number is ",c);

// Globals -no window
//__dirname --path to current directory
// __filename -- function to use modules (common js)
// requir --function to use modules (file)
// process --info about enviroment where the progarm is being executed

// common js ,every fileis modue (by default)
// Modules - Encapsulated code (only shere minimum)


//modules
// const secret="super secret";
// const jhon ="jhon"
// const Akash="Akash"

// const sayhi =(name)=>{
//     console.log(` the name of the person  is : ${name}`)
// }

const names=require("./names.js");
const sayhi=require("./function.js");
require("./mind_grenade.js");   //we can call the global function and variable like this also
// console.log(names)

sayhi("Rohan");
// sayhi("jim");  //we can give directally as argument 
sayhi(names.Akash); // we can ge by object names by like
// sayhi("ram"); 
sayhi(names.jhon); 