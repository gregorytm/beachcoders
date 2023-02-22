//SELECTING DOM OBJECTS
const img = document.getElementById("bear-photo");
console.dir(img);
const p = document.getElementById("main");
console.dir(p);

//in console
//they look like arrays but they are collections "html collection"
//an array like object that is not an array

document.getElementsByTagName("input");
document.getElementsByTagName("p");
document.getElementsByTagName("li");
document.getElementsByTagName("h3");

const inputs = document.getElementsByTagName("inputs");
inputs[0];
inputs[2];
inputs.length;
//these work, now try
inputs.pop();
//type inputs. and look at the auto fill
//a lightweight structure
for (let input of inputs) {
  console.log(input);
}
//we do get to use our spread operator though
const arr = [...inputs];
//now it is an actual array

//put values in the inputs on webpage
for (let input of inputs) {
  console.log(input.value);
}

let header = document.getElementsByClassName("header");

//try selecting an id from the dom
let test = document.getElementsByClassName("main");
//this does not thow an error but returns an empty array

//try adding a p tag in the html that also has the class of special
let test2 = document.getElementsByClassName("special");
//if i just want the elements with the class special that are inside the ul
let test3 = document.getElementsByTagName("special");
let ul = document.getElementsByTagName("ul")[0];
let nestedUl = ul.getElementsByClassName("special");

//enter document.queryselecter & document.querySelecterAll, query sleecter can be used similar to how all the oter above slecters are used

//these below will only select the first input they find
const test4 = document.querySelector("h1");
const test5 = document.querySelector("input");
const test6 = document.querySelector("#my-photo");
const main1 = document.querySelector("#main");
const main2 = documentl.getElementById("main");
const test7 = document.querySelector(".special");
const test8 = document.querySelector("li.special");

//create a ul and give one of the li's class of special
//try and just select the one specinal in the li
const test9 = document.querySelector("section li.special");

//try selecting the password input
const test10 = document.querySelector('input[type="password"]');

//we can use queryselector in place of all the new selectors we have learned

const test11 = document.querySelectorAll("input");
const test12 = document.querySelectorAll(".special");
const test13 = document.querySelectorAll("li");
const test14 = document.querySelectorAll("#main");

//notice when using querySelectorAll it puts the objects in a nodeList, not an HTMLCollection
//we dont need to go to deep in the differences just note nodeList have forEach in it where HTMLCollection does not
//one other thing to note that querySelector & querySelectorAll is not as "fast" as getElementbyId getElementByTagName but its very minimal for smaller projects

//STEP 2 MANIPULATE
//their are a lot of properties but we will be going over the most common

//inner text and text content
const h1 = document.querySelector("h1");
console.log(h1.innerText);

const ul1 = document.querySelector("ul");
console.log(ul1.innerText);
//we could also do
console.log(document.body.innerText);
//and get all txt on on webpage

//we can also change the innerText
h1.innerText = "Hello World"; //comment out when done
//  and updates it!  Eventually we will learn levent listeneres and how to change things based on what a user does
//keep in mind when we change text in the dom the original text is gone

ul1.innerText = "i am a ul"; //comment out when done
//all that previous text is now gone.

//textContent--simlar to inner text
console.log(h1.textContent);
h1.textContent = " I R HUNGRY"; //comment out when done

//now try putting a script tag in the bottem of the p tag, note its not good to normally do this
//also put spacing in the p tag
const par = document.querySelector("#main");
console.log(par.innerText);
//no script tag no spacing
console.log(par.textContent);

const form = document.querySelector("form");
console.log(form.innerHTML);

const newUl = document.querySelector("ul");
console.log(newUl.innerHTML);

// form.innerHTML = "HELLO WORLD";
//comment out after example
//innerText would be better but it works

form.innerHTML = "<b>i am a bold tag</b>";

h1.innerHTML += " is cool";
h1.innerHTML += "<b>!!!!!!!</b>";
h1.innerText += "<b>!!!!!</b>";

console.dir("inputs");
//in console scrole down and find the property value
//put some txt in the name value
// in console run inputs[0].value we see our txt
//same with password
//what about our checkbox?  inputs[0].value is the same if its on or off
//check boxes have a seprate value, checked inputs[2].checked

inputs[3].value;
//we see where the range is set to

inputs[1].placeholder = "test test";

const a = document.querySelector("a");

console.log(a.href);
a.href = "http://www.fontAwesome.com";

img.src = "new img url";

const range = document.querySelector("input[type=range]");
console.log(range.getAttribute("max"));
consosle.log(range.getAttribute("min"));
console.log(range.getAttribute("type"));
range.setAttribute("min", "3");

//Child and parent elements
const firstLi = document.querySelector("li");
console.dir(firstLi); //look for parentElement property

ul.children; //gives back all the children elements
firstLi.nextElementSibling; //we get the next sibling
//previous sibling

//dom & styles
console.dir(h1.style.color);
//this returns an empty string
//this it can only see styles u have set inline
//we dont want to do this
h1.style.color = "green";
p.style.color = "white";
//we must cammelCase things for inline stuff its js not css
// p.style.background-color="black"

const styles = getComputedStyle(li);
//in console type styles
