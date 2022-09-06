How is javaScript different from things like python, python3

what is javaScript, who owns javaScript?

https://www.ecma-international.org/

values and variables

primative types
-numbers
test numbers in console 1.00000~
clear()
mathmatical operatiors + - * / %(modulo)
10/3 = non infinate number
25 % 5 goes in clean 25 % 3 not clean 14%4 remander 2 
exponential operatior **
order of operations is present in jS (pemdas)
NaN, 0/0, Nan, + 5, 1/0, -1/0, 0, -1

vars
LET
let and const. A jar to store our data.
let oneScore = 5;
let twoScore = 3;
oneScore + twoScore =?

oneScore + 1 does not change val of oneScore

reserved words
let let = 10
document

give var names that make sence no x or y
redeclaring a var
one name per js scope
let score = 0;
let score = score + 10
score = 10
score += 10
score -= 7.9
score = 150
let bonusMult = 3;
score += bonusMult;

uniarary operrator(one side)
let counter = 0;
counter ++;
counter --;
counter -3;

CONST
const age = 17;
age +=1;
age=21;
WHY CONST:
math problems that use pi, daysInWeek, const minAgeDrink, const minDraftAllowed
once we cover arrays and objs we will see why const is better then let

VAR
used before let and const were a thing
not used anymore but still seen in older code bases
google javaScript variable w3
its the old way, you really shouldent be using it
mdn let and scrool to bottem 
should never use var
https://caniuse.com/

let movieReview = 42;
movieReview + 2;
what is movieReview?
42

const currentInvestment 5.5;
currentInvestment = 8;
error

let max_funds = 100;
max_funds += 5;
max_funds--;

-boolean
True or False, yes or no, 1 or 0 very efficient use of space
 true, false, let isLoggedIn = true;, is gameOver = false; const isSkyBlue = true;
 variable types can change types, not so much in other languages
let finance = 12, finance = false, finance = 1234 not common but possible 

-strings
strings are everywhere text or strings of characters 
can use "" or '' and eventually ``
typeof "87" typeof 87
'he said, "hahah"'
"she said "omg" "
let firstName = "greg"
let lastName = "dog"
firstName + lastName
concadanation
firstName + " " + lastName
"hi" + 1
"hi" - "h"

-more on strings:
each character has a corresponding index only positives, starting at 0
"hello".length
let favoriteRestraunt = "Fat Sals"
favoriteRestraunt.length
NEW SYNTAX
favoriteRestraunt[0] -> "F"
index starts at 0 length does not
lenght is always 1 more then last index
not the only thing indexed by position
let gibberish = "asdfadsfasdfdasfasdfasdfasdfasdf"
gibberish[gibberish.length -1]
favoriteRestraunt[0] = "D"
wont work strings are immutable in jS, not in other languages

STRING METHODS
strings come with a set of built-in methods, which are actions that can be preforemed on or with that particular string
extamples of methods search, Replacing parts of a string, go from uppercase to lower case.
all methods follow one format thing.method()
there are other methods for numbers but not as many or as useful
talk about ()
msg.toUpperCase()
msg = msg.toUpperCase()
"      purple    " .trim().toUpperCase()
do other examples
thing.method()

ARGS
thing.method(arg)
thing.replace, thing.search 
let restraunt = "applebees"
restraunt.indexOf('apple'); //0
restraunt.indexOf('bees'); //3
restraunt.indexOf('z'); //-1
"baseball".indexOf('b')
let str = "twinkletwinkle"
str.slice(0,6); // twinkle
"baseball".slice(4) //4 strings are immutable so slirce returns a new string 
"baseball".slice(0,5) //the second cut is not inclusive
look at mdn on slice
'$100'.slice(1)
.replace(arg1, arg2)

TEST
const age = "5" + "4";  //54

"pecan pie"[7] //i

"PUP"[3] //-1

//what is song after code runs
let song = "london calling";
song.toUpperCase(); // all upper case

//what is cleanedInput
let userInput = "  GREG@gmail.com";
let cleanedInput = userInput.trim().toLowerCase() //all lower case


let park = "Yellowstone";
const index = park.indexOf('Stone') //-1

let yell = "GO AWAY!!";
let index = yell.indexOf('!');

'GARBAGE!'.skuce(2).replace("B", ''); //RAGE

STRING ESCAPE/ESCAPE CHARS
\n -newLine
\' - single quiote
\" - double quote
\\ - backslash

-null
-undefined

-symbol and bigInt
