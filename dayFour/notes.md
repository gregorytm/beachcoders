STRING TEMPLATE LITERALS
`I found ${18 + 2} gold coins`;

let character = "wizard";
let treasure = "gems";
concadination
"The " + character + " found" + treasure
interpalation
`The ${character} found ${treasure}`
add a ! to each, waht is easier?\
treasure.toUpperCase()

let item = "carrots"
let price = 3.50;
let quantity = 12;

`item purchased ${quantity} ${item}, your total price is: $${price*quantity}`

let currentFunds = 200
let minFunds = 600
`you currently have ${currentFunds} you can play in the casino when you have ${minFunds-CurrentFunds}

${} acts as if ur not inside a string but just reads it a it would be javaScript

NULL AND UNDEFINED
Null is the intentional absence of any value.  Intetinally empty
must be assigned

undefined variables that do not have an assigned value are undefined.  Something went wrong and computer does not know.

let loggedInUser = null;  //value is explicity nothing
loggedInUser = "Greg Marsh"
user logged out
loggedInUser=null;

let currentUser;
undefined is usually returned from a function or something

null not common but around, undefined very common

THE MATH OBJECT & OTHERS
properties and methods for math constant and functions

Math.PI, Math.round(4.54), Math.abs(-432), Math.pow(2,5)//32, MATH.floor(3.324324)

Random numbers
Math.random() gives us a random decimal between 0 and 1 (non-inclusive)

Random Int step by step breakdown.
const step1 = Math.random();
const step2 = step1 * 10 //what is the highest number this can be? 9.99999
const step3 = Math.floor(step2);
const step4 = step3 + 1;

Math.floor(Math.random() * 10) + 1
typeof `hello`
typeof 2
typeof true;
typeof undefined
typeof null

parseInt
parseInt('24');

parseFloat('21.99')
parseFloat('7')
parseFloat('hangry')

Decision MAKING AND BRAINZZZ
examples of gmail logic on the web

>, <, >=, <= +4
.1 <= .5
"ajfkasf".length >= "hello!".length
'a' < 'A'
"B" < 'a'

unicode

==, !=, === ,!==
== tries to make it equal, coherase
2==2
4==4
'a'=='a'
false == false
false = false
false == 0
0 =='s'
0 ==''
0 == false
null == undefined

=== strict non equality
2 === '2'
2 ===2
0 === false
undefined === null
alwayse use === some say never use ==

!= !==

1 != '1'

SWITCHING to VS CODE
REPL
read, evaluate, print loop

create a new hml, css and javaScript file using one line in the terminal
Create a basic bolier plate and link the css to the hml app, 
create an h1, add color and a pic.  

<script src=app.js>
in app.js create alert("jS linked")
console.log
console.error("ERROR)
console.log(3 +4, "hello", var)
if, else if, else
if( 1 !==1) {
  console.log("True")
}
switch up the numbers and < to > try ===
const bankBalabnce =2
ELSE IF
bank account example
try with multiple else if statments
if alwasy needs to come first
uber rating example

ELSE
video game example with one else if statement

NESTING 
we can nest conditionals inside conditionals
let password = "super dude";
if(password.length >= 6) {
  if(password.indexOf(' ') !== -1) {
    console.log("no spaces in password")
  }
  else {
    console.log("password accepted")
  }
}
else {
  console.log("password needs to be longer")
}

TRUTHY and FALSY VALUES
let mysteryNum =1;

if(mysteryBox) {
  console.log('truthy');
}
 else {
  console.log('falsy')
 }
 try other numbers in mysteryNum, try 0, NaN, null, undefined, ""
 stratigy used in if else
 loggedInUser example

 LOGICAL OPERATORS
 and or not u use them all the time
 $$ || !
in the console
true && true
true && false
false && false
1 <= 15 && 'abc' === 'abc'

let password = "super dude";
if(password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("Valid Password!");
}
else {
  console.log("invalid")
  }

let num = 6;
if(num >= 1 && num <= 10) {
  console.log('Number is between 1 and 10');
}
else {
  console.log('Please guess a number between 1 and 10');
};