/* 
#1. On line 6 create a variable called ourButton that stores the button element with the class ourButton.
#2. On line 7 create a variable called ourDiv that stores the div element with the class ourDiv
*/

var ourButton = document.querySelector('.ourButton');
var ourDiv= document.querySelector('.ourDiv');
var newClass= document.querySelector('.newClass');
var exampleDiv= document.querySelector('.exampleDiv');
var exampleDivNew=document.querySelector('.exampleDiv.newClass');

/*
For more information about functions or subroutines see the lecture with the same title at
https://www.udemy.com/javascript-essentials
Also read the documentation on MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
Also check the "cheat sheet" at
https://www.w3schools.com/js/js_functions.asp
*/


function toggleClassOnClick(elementNodeToBeClicked, elementNodeToHaveClassAdded, className) {
    /*
    Note: see #3 below first.
    #6.
    On line 36, create an if statement that will allow a developer to omit the final parameter from the function.
    Hint: if a final parameter is ommited, it will be assigned the value of null.
    Hint 2: Do not use [ if (className 'strictly equal to' null) ] as the condition.
    If the developer omits the final parameter, the function SHOULD automatically add the class "triggered".
    Hint: there are many ways to accomplish this. The easiest is to set the className argument to the value: "triggered".


    For more information on if statments see:
    https://www.udemy.com/javascript-essentials
    the MDN https://developer.mozilla.org
    and w3 shools https://www.w3schools.com. 
    Note: This is the last time I will point you to these three resources.
    */
if (!className) {
   className = 'triggered';
}


    elementNodeToBeClicked.addEventListener('click', function () {
        elementNodeToHaveClassAdded.classList.toggle(className);
    });
}


/*
#3.
One line 54, invoke the toggleClassOnClick function and pass the three correct parameters.
To find the correct "string" for third the parameter, see the style.css file.
#5.
Open the index.html in your browser. When you click on the button, the red box should toggle between, #f00 and #00f;
*/

//toggleClassOnClick(ourButton,ourDiv, 'blue-background');

toggleClassOnClick(ourButton,ourDiv);

/*
7 - a. Comment out the invoked function on line 54 and on line 55 invoke the function again passing only two parameters.
#7 - b. Return to the style.css and rewrite the css selector to make the toggle work with the new class name.
#7 – c. index.html:
Open the index.html in your browser. When you click on the button, the red box should toggle between, #f00 and #00f;



*************************

#8. (Client request - request from someone who doesn't know anything about web development)
Can you make it so, when I click on the box with the words (example divs), they also toggle between red and blue? Also, can you make it so, when I hover over the example div, the mouse thingy isn't an arrow. I'd like it to be a hand pointing thingy.

In a future lesson we will use for loops and if statements to omit the second parameter to streamline the function use even more.
*/

toggleClassOnClick(exampleDivNew,exampleDivNew);

toggleClassOnClick(exampleDiv,exampleDiv);
