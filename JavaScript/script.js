//alert("Hello World");

/* Basic stuff
document.getElementById("button").onclick=function(){document. getElementById("confirm").innerHTML="Order place. Check email by for confirmation";
document.getElementById("button").style.display="none";
}
*/

/* Variables 
var username = prompt();
alert(username);
console.log(username);
var age  //declaration
age= 5;  //initilizatino
console.log(age);
var newAge = age;
var message = "newAge = " + newAge; // newAge = 50
console.log(message);
*/

/* Create Function 
(function(){
    // IIFF - immediately invoked function expression
    var age = 5;
})();
*/

/* Global Variable and Block variable 
// If you use var to create a variable, it will store as windown datatype (Golbal Variable)
// If you use let or const to create a variable, it will store as{}(block object)
{
    let x = 5;
    let b = "10"
    x = x + b;
    console.log(x)
}
-> it will output 510
*/

/* Whis is Object? 
// Object look like a dicionary in python, basically make wil key:value pair
let person ={
// the key sometimes call properties
    name:"Caleb",
    age: 93,
    favFood: "Pizza... Obviously -_-",

//  the function inside the  block sometimes call method
    fun: function() {
        console.log("Yay!");
    }
};
person.fun();
console.log(person.age);
*/

/* Ceate date: 
// Date object
let now = new Date();
let grades = [30,30,12,23]; // this array and also object prototype (javascript inheritance)
*/

/* Numeric datatype 
{
    //Floating point value
    let x = 5;
    x = 5.5;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    let over = 900719254740990091;
    console.log(Number.isSafeInteger(over));
}
*/

/* Infinity (If the number is too big, console will return infinity)
{
    let larNun = 2000101020202020;
    console.log(Math.pow(larNun,200));
}
*/

/* Negative Infinity 
{
    let netLarNum = 123129310942390502395;
    console.log(Math.pow(-netLarNum,2001));
}
*/

/* Not a Number 
{
    console.log(console.log()+2);
}
*/
/*
{
    console.log(1/0);
    console.log(0/1);
}
*/

/*  Arithmetic Operators, Precedence, Associativity
Operator: +, - * / %

{
    var slicesOfPizza = 10;
    console.log(slicesOfPizza % 3.25);

    var precedence1= 5+3*12-20/10; // = 5 + (3*12) - (20/10)
}
*/

/* Increment and decrement
{
    let sliceOfPizza = 10;
    ++sliceOfPizza;
    console.log(sliceOfPizza);
    --sliceOfPizza;
    console.log(sliceOfPizza);
    let myPizza = 3;
    myPizza *= 3;
    console.log(myPizza);
}
*/

/* Number method (2 way to call method.)
    1. Number. (static method) a constructor(function)
    2.  let x = 5;
        x.     (instant method) will also convert to Number Object
{
    let x = 5;
    let y = "10";
// If you console log x and y, it will return 510;
//    console.log(x+y);
//    let yInt = Number.parseInt(y); // or use let yInt = Number.(y)
    //console.log(x+yInt);

    //parseInt
    let aInt = Number.parseInt("10.1679");
    let bFloat = Number.parseFloat("10.1679");
    console.log(aInt)
    console.log(bFloat)
}   
{
    var input = prompt("Put in a number");
    console.log("Decimal    :", input);
    console.log("Binary    :", Number.parseInt(input,2)); 
    console.log("Octal  :", Number.parseInt(input,16));
    console.log("Hex    :",Number.parseInt(input,16)); 
    //radix is the base (基數), 2 is Binary
}

{
    // prompt will return a String
    var input = Number(prompt("Put a DECIMAL number"));
    console.log(input,"in decimal to decimal", input);
    console.log(input , "in decimal to binary", input.toString(2));
    console.log(input, "in decimal to Octoal", input.toString(8));
    console.log(input,"decimal to Hex", input.toString(16))
}
*/

/* Number Instance Methods & Math Object 
{
    let x = 45000;
    console.log(x.toString(2));
    console.log(x.toExponential(5)); // show 5 digit. 45000 = 4.5= 10^4
    console.log(x.toFixed(2)); // sort to 2 digit
    console.log("$" + x.toLocaleString()); // momey  style
    console.log(x.toPrecision(2)); //3 significant digit

    // value of is to convert Object to number type
    let y = new Number(123);
    console.log(typeof(y));
    console.log(typeof(y.valueOf()))
}
*/

/* Math 
{
    var  abs = Math.abs(-26); //26
    var goUp = Math.ceil(0.0000001); //1 (always round up)
    var goDown = Math.floor(.9999); //0 (always round down)
    var powerUp = Math.pow(3,2); //9
    var roundUp = Math.round(4.9); //5
    var roundDown = Math.round(5.1); //5
    var isPositive = Math.sign((-Infinity)); //false
    var getInt = Math.trunc(4.99999); //4 truncate*-**********************
}
*/

/* String DataType
{
    let myName = "JackChau"; //String type
    let yourNmae = new String("JackChau"); // Object type
    console.log(myName[2]) //grep 3rd character
    let stupidName = "missChoi";
    console.log(stupidName[1000]); // Will return undefinded
    let jackChau = "Jack\nChau";
    let path = "c:\\mnt\\drive"
    console.log(jackChau);
    console.log(path);
    // concatenation
    console.log("My name is " + myName + "!");
    // look like f'string
    console.log(`My name is ${myName}!`)
    let test = "This is a crazy long string\
inside the IDE, just display\
in one line.";
    console.log(test);
    console.log(test.length);
}
*/

/* String Methods (charAt, concat, includes, indesOf, lastindexOf)
{
    var favFood = "tacos"
    //console.log(favFood.charAt(2)); // like slicing
    //console.log(favFood.concat(" are totes lit"));
    
    // Search string inside a string

    let content = "Today we'll talking about string methods and how fun they are";
    let search1 = "string";
    let search2 = "I am not here";
    let search3 = "a";
    console.log(content.includes(search1)); // return ture because it found
    console.log(content.includes(search2));

    // return index

    console.log(content.indexOf(search1));
    console.log(content.indexOf(search2)); //-1 means not found
    console.log(content.lastIndexOf(search3)); //found the last index
}
*/

/* String Methods (substring,substr,slice,trim,repeat)
{
    let content = "\t\nToday we'll be talking about string methods and how fun they are\t\n";
    console.log(content.substring(6,11)); //found the index between 6-10
    console.log(content.substr(6,5)); //start from 6, length 5
    console.log(content.slice(6,11));

    // Modify the content
    console.log(content.toUpperCase());
    console.log(content.toLocaleLowerCase());
    console.log(content.trim()); // remove \t\n at both end
    console.log(content.trimLeft()); //remove \t\n at the left only
    console.log(content.trimStart()); //remove \t\n at the start
    console.log(content.trimRight()); //remove \t\n at the right only
    console.log(content.trimEnd()); //remove \t\n at the end

    //print multiple times
    let a = "I am On9\n";
    console.log(a.repeat(10));
    console.log(content.split(" ")); //delimiter
    console.log(content.replace()); //regular expressions such as * for tails
}
*/

/* Functions & Objects
// To create an Object using {}, inside {} call property
{
    let position = {
        x: 10,
        y: 20,
        
        // method:
        print: function(){
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },

        //Object inside object (Nested Object)
        myObject: {
            sweetProperty:"Hello I am sweetProperty",
            sweet:"Hello I am sweet",
        }


    }
    console.log(position);
    let newPosition = position; //Becareful, they both point to the same object, either one change will affect both
    console.log(newPosition);
    newPosition.x =11;

    // They both changed!!!
    console.log(newPosition);
    console.log(position);
    position.print();

    //to involve nested object
    console.log(position.myObject.sweet);
}
*/

/*Json is Javascript object notation, look like Object*/

/* If, Else, Else If
{
    var name = prompt();

// === is identity operator, strict equality (same value and same datatype)
    if(name === "Jack"){
        console.log("Welcome Jack!");
    }else if (name ==="JackChau"){
        console.log("Welcome Jack Chau!");
    }else {
        console.log("You are not welcome!");
    }
}
*/

/* Comparison Operators
{
    var name = prompt();

    if (name === "Jack"){
        console.log("Hi, Welcome Jack");
    }else if (name !== "Jack"){
        console.log("Who are you???");
    }
}

{
    var age = prompt();

    if (age>17){
        console.log("Welcome to Adult World *_< !");
    }else if(age <= 17){
        console.log("Get out, you are too young!");
    }else if(age ===NaN){
        console.log("FBI is watching you");
    }else {
        console.log("You are alien");
    }
}
*/

/* Logical Operators 
&& = and, || = OR, ! = NOT
{
    var age = prompt();
    if (age<18 || age >= 65 ){
        console.log("Don't recomment you to play this game");
    }else if(age >=18 && age <65 ){
        console.log("Welcome to play");
    }
}

{
    var age = prompt("What is your age?");
    var level = prompt("Please select your level!");
    
    if(age <18 && level >= 1){
        console.log("Come on kid, you have start at zero!");
    }else if (age <18 && level <1){
        console.log("Welcome to play, kid!");
    }else if (age>18 && age <65){
        console.log("Let's go, select your weapon");
    }
}

{
    var myName = prompt("Please enter your name");
    var age = prompt("Please enter your age");

    // age > 18, not Jack
    if (age > 18 && myName !== "Jack"){
        console.log("Please enter your name again");
    }else if(age >18 && myName ==="Jack"){
        console.log("Welcome Jack");
    }
}

{
    var age = prompt("please enter your age");
    var myName = prompt("Please enter your name");

    if (age < 18 || age > 65){
        if(myName === "Jack"){
            console.log("Come later when you grow up!");
        }
    }
    else if (age >18 && age < 65){
        if(myName!== "Jack"){
            console.log("Who are you?");
        }else if(myName === "Jack"){
            console.log("Jack, start the war");
        }
    }
    else {
        console.log("Get the Fuck out");
    }
}
*/

/* Switch Statement
{
    let name = prompt("What is your name?");

    switch(name){
        case "Jack":
            console.log("Welcome");
            break;

        case "Jak":
            console.log("Get out here");
            break;

        default:
            console.log("I guess your're welcome");
            break;
    }
}

{
    let favWeapon = prompt("What is your favourite weapon?");
    switch (favWeapon){
        case "AR-15":
            console.log("Me too, my favourite AR-15 is BCM Jack Carbine");
            break;

        case "AK47":
            console.log("Wow, too heavy!");
            break;

        case "MP5":
            console.log("The penetration is not enough");
            break;

        case "RPG":
        case "PPK":
            console.log("Come on, these only in game");
            break;

        default:
            console.log("No weapon is the best!");
    }
}
*/

/* Signal line if statement (Not recomments to use)
{
    let myName = prompt("What is your name");

    if (myName ==="Jack") {console.log("Hello")}; //You can remove the {} and it still work, but only read one line
}
*/

/* Ternary Operator 
{
    let myName = prompt("What is my name ?");
    // if ture, return point = 10, if false return point = 0
    let points = myName === "Jack" ? 10:0;
    console.log(points);
}

// Same as:

{
    let myName = prompt("What is your name?");
    if (myName === "Jack"){
        points = 10;

    }else{
        points = 0;
    }
    console.log(points);
}
*/


/* 
Loop 
    I --> Inituliation, here is where we set the variable 
    C --> Condition, to compare our original variable to some values
    U --> Update, for the changing

While Loop example (C++)

int i = 0;
while (i<10){
    //code
    i++;
}

For Loop:

for (int i = 0, i<10, i++){
    //code
}
*/

/*  While Loop 
{
    let i = 0; //initializtion
    while(i<11){ //condition
        //code
        console.log(i);
        i++; //update
    }
}
*/ 

/* Do While Loop
{
    // For the do while loop, those code will implement at least one time in do{}
    let i = 0;     //initialization
    do{
        console.log(i);     //Code
        i++;    //Update
    } while(i<11);      //Condition
}

Here is the differences

{
    let i = 1000;

    do {
        console.log(i);
        i++;
    }while(i<100);
}
No matter the condition is ture or false, the code inside do{} will at least run one times.
*/

/* For Loop 

    for(let i = 0; i < 15; i++){
        console.log(i);
    }
*/

/* Loop Example

{
    let password;   // The passward must defined outside the do while loop.
    // If we initialize the variable inside the do{}, the variable will not exist outside the do{};

    do{
        password = prompt("What is the password?");
    }while(password.toLocaleLowerCase() !== "jack123jack123"); //type lowercase can also work
}
*/

/* For Loop 


{
    for (let i = 1; i<10; i = i+2){
        console.log(i);
    }
}

{
    for (let i = 10; i>0; i--){
        console.log(i);
    }
}

*/

/*  Loop for array  
{
    let list = ["a","b","c","d","e","f","g","h","i","j","k"];
    for (let i = 0; i< list.length; i++){
        console.log(list[i]);
    }
}

{
    let myString = "Search this string baby";
    let charToSearch = "a";
    for (let i = 0; i<myString.length;i++){
        if (myString[i] === charToSearch){
            console.log(myString[i] + " in index " + i);
        }
    }

    console.log("\n");

    for (let i=0; i<myString.length;i++){
        console.log(myString[i]);
    }
}
*/

/* Continue & Break" */
// Searching keyword one by one
/*  
{
    let myString = "I have lots of aaaaa!!!";
  
    let keyString = "a";

    for (let i = 0; i<myString.length; i++){
        if (myString[i] === keyString){
            console.log(myString[i] + "was found in index" + i);
            break;
        };
}
*/
// Searching aeiou
/*
    let aeiou = ["a","e","i","o","u"];

    for (let myStringIdx = 0; myStringIdx<myString.length; myStringIdx++){
        for (let aeiouIdx = 0; aeiouIdx< aeiou.length; aeiouIdx++){
            if (myString[myStringIdx] === aeiou[aeiouIdx]){
                console.log(myString[myStringIdx] + " was found in index " + myStringIdx);
            }

        }
    }

// Don't show aeiou (will be continue)
    let sameIndex = [];
    for (let myStringIdx=0; myStringIdx< myString.length; myStringIdx++){
        for (let aeiouIdx=0; aeiouIdx<aeiou.length; aeiouIdx++){
            if (aeiou[aeiouIdx] === myString[myStringIdx]){
                sameIndex.push(myStringIdx);
            }
        }
    }
}
*/

/* Nested Loops */
/* 
{
    for(let i=0; i<10; i++){
        for(k=0;k<10;k++){
            console.log(i,k)
        } 
    }
}

{
    for(let i=0;i<10;i++){
        for(k=i;k<10;k++){
            console.log(i,k);
        }
    }
}

{
    let d = document.getElementById("destination");
    for(let i=0;i<10;i++){
        for(let k=i;k>=0;k--){
            d.append(k + " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }
}
*/

/* Multidimensional Arrays 
    you can put multiple items inside an array

example:
    let stuff = [12,"string",functino(){},[1,2,3]];
*/
/*
{
//instead of:

    let jackGrade = [11,12,33];
    let kellyGrade = [80,60,77];
    let tomGrade = [66,88,99]

// Multiple Array
    let Grades =[
        [11,12,33],
        [80,60,77],
        [66,88,99],
    ];

    console.log(Grades[1]);
    console.log(Grades[1][2])
}
*/

/*  Using Array 
{
    // {} is an object
    let grades = [12,"c",{},function(){console.log("Hello")}];
    console.log(grades[1]);

    grades[3](); 

    let assignGrades = [];

    assignGrades[0] = 12;
    assignGrades[1] = 24;
    assignGrades[2] = 36;
    assignGrades[3] = 48;
    assignGrades[4] = 60;
    // The lenths always at least 1 higher than the highest index
    console.log("assignGrades's length is " + assignGrades.length);
    assignGrades[30] = 1000
    console.log(assignGrades);

    assignGrades.length=5

    for(let i=0; i<assignGrades.length;i++){
        console.log(assignGrades[i]);
    }
}
*/

/* Iterate (loop) Through Array*/
/*
{
    let grades = [15,4,4,66,7,9,33,4,6,43,43,43];
    grades.length = 100;
    grades[50] = 99;

    let found = false;
    let search = 43;

    for(let i=0;i<grades.length;i++){
        if(grades[i]=== search){
            //legit
            found=true;
            console.log(found);
            console.log(grades[i] + " at index " + i);
            break;
        };
    };

    if (found=true){
        console.log("I found!!!");
    };
}
*/

/*  Found the biggest value in an array 
{
    let grades = [10,20,30,40,50,60,70,80,99];
    
    let largest = grades[0];
    
    for (let i=0; i<grades.length;i++)
    {
        if(largest < grades[i]){
            largest = grades[i];
        };
    }
    console.log(largest);
}
*/

/*  Found the index that has the biggest value in an array */
/*
{
    let grades = [10,20,30,40,50,60,70,80,99];
    let largestIdx = 0;
    let largestGrades = grades[0];
    for (let i=0;i<grades.length;i++){
        if(largestGrades<grades[i]){
            largestGrades=grades[i];
            largestIdx = i;
        };
    };
    console.log("The greatest index in an array is " + largestGrades + " at index " + largestIdx);
}
*/

/*  Average of Array Values */

/*
{
    let grades = [15,4,4,66,7,9,33,4,6,43,43,43];
    grades.length = 30; // There have some undefined value
    grades[34] = 40;
// To find the average of the array, we have to remove all undefined value

    let count = 0;
    let totalSum = 0;

    for(let i=0; i<grades.length;i++){
        if(grades[i]!== undefined){
            //legit value
            count++;
            totalSum += grades[i];
        };
    };

    let average = totalSum/count;
    console.log(average);
}
*/ 

/*  Fill Array from User Input by Indefinite Loop and Sentinel Value */

/*
{
    let grades = [];
    
    while(true){
        let input = prompt("Add a grade"); // prompt only input string

        if(input === "q" || input === null){ // null for cancel
            break;
        }

        grades.push(Number(input));
    };
    console.log(grades);
}
*/

/* 
    // Array Methods Part 1
{
    let grades = [1,2,3,4];
    // push method:
    grades.push(5,6,7);

    // pop method:
    //grades.pop() //pop off the last element
    let popedValue = grades.pop();
    console.log(popedValue);
    console.log(grades);

    grades.pop()
    console.log(grades);

    grades.pop()
    console.log(grades);

    // unshift (just like push, but it add element from the begining)
    grades.unshift(40);
    console.log(grades);

    // shift (Just like pop, but remove element from the begining)
    grades.shift();
    console.log(grades);
}
*/

/* Array method *splice */
/*
{
    /*
    let grades = [1,2,3,40,20,10,40];
    console.log(grades);

    grades[3] = 4000;
    console.log(grades); // 1,2,3,4000,20,10,40

    // splice (start, delete items count)
    grades.splice(2,3); // 3,4000,20 will be deleted
    console.log(grades);
    
   
    let grades = [1,2,3,4,5];
    console.log(grades);

    // start from index 2, delete 0 items, changes to items 
    grades.splice(2,0,6,7,8,9);
    console.log(grades);

    // grades = [1,2,6,7,8,9,3,4,5];
    // How about I want 6,7,8,9 to 0 ??
    // delete those values first and then add those value again v_v
    grades.splice(2,4,0,0,0,0);
    console.log(grades);
}
*/

/* Array method part 3*/
/*
{
    // sort function:
    let grades = [10,2,3,6,9,1,0,0,0,0,5];
    grades.sort();
    console.log(grades);
    
    grades.push(15,11,17,15,22,23,66,88);

    grades.sort(); // It will sort by alphabetically
    console.log(grades);

    // This is a callback function which passed as an argument and then invoked inside
    // Discuss callback later on
    grades.sort(function(a,b){return a-b});
    console.log(grades);

    // reverse order
    grades.reverse();
    console.log(grades);

    // Fill
    grades.fill(-1,0,grades.length)
    console.log(grades);
}
*/

/* Array function .copyWithin */
/*
{
    let myArray = ["q","w","e","r","t","y"];
    console.log(myArray);

    // .copyWithin function allow you to copy a certain number of elements
    // from an exisiting array into the same array with differetn position

    // copy element 3 to the end, to target index 0   
    // myArray.copyWithin(0,3);
    // console.log(myArray);
    // grades = ["r","t","y","r","t","y"];

    // myArray.copyWithin(1,4);
    // console.log(myArray);

    // myArray.copyWithin(0,5);
    // console.log(myArray);

    // copy element start at index 3 (inclusive) to index 5 (exclusive), at target index 0
    // myArray.copyWithin(0,3,5);
    // console.log(myArray); // myArray = ["r","t","e","r","t","y"];

    // myArray.copyWithin(-1,3,4);
    // console.log(myArray) // myArray=["q","w","e","r","t","r"]

    //*** Becareful, copyWithin method will change the array automatically

    //let returnedArray = myArray.copyWithin(0,4,5);
    //console.log(returnedArray===myArray);
}
*/

/* Array method part3*/
/*
{

    let grades = [1,2,3];
    let gradesB = [44,55,66,77,88];

    // *** Becareful, concat doesn't change the original array, but push does!!!
    let finalGrades = grades.concat(gradesB);
    console.log(finalGrades);

    // There will be two array, [1,2,3,[44,55,66,77,88]]
    grades.push(gradesB);
    console.log(grades); 

    //If just add them together, it will be a atring 
    let plusGrades = grades + gradesB;
    console.log(plusGrades);
}
*/

/*  String Method Continue */
/*
{
    // include
    grades = [20,22,39];
    console.log(grades.includes(22)); // true
    console.log(grades.includes(220)); // false

    // inexOf
    console.log(grades.indexOf(20)); // 0
    console.log(grades.indexOf(220)); //-1

    // join (delimitator) #add everything together and form a string
    console.log(grades.join());
    console.log(grades.join(":"));

    // slice (start:end)
    newGrades = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    console.log(newGrades.slice(3,5));
    console.log(newGrades.slice(3));
}
*/

/* For each method */
/*
{
    let grades = [1,2,3,4,5,6,7];
    grades.length = 30;
    
    for(let i=0; i<grades.length;i++){

        if(grades[i] !== undefined){
            console.log(grades[i]);
        };
    };
    

    // *** for each function to filter undefined elements
    grades.forEach(function(element, index_i, array){
        console.log(element, index_i,array);
    });
}
*/

/* Iterate Multidimensional Array with for and forEach */
/*
{
    
    let grades = [
        [12,13,32,43,42,23],
        [12,13,32,43,42,23,22,33,33,44],
        [12,13],
    ];

    for (let i=0; i<grades.length; i++){
        for(let k=0; k<grades[i].length;k++){
            console.log(grades[i][k]);
        }
        console.log("\n");
    }

    grades.forEach(function(row){
            row.forEach(function(column){
                console.log(column);
            });
            console.log("\n");
        });
}

// Exercise: forEach Loop in multiple array
{
    let multiArray = [
        [1,2,3,4,5],
        [11,22,33,44,55,66,77],
        [111,222]
    ];

    multiArray.forEach(function(row){
        row.forEach(function(column){
            console.log(column);
        });
        console.log("\n");
    });
}
*/

/* Label & continue */ 
/*
{
    multiArray = [
        [1,2,3,4,5],
        [11,22,33,44,55,66,77,88,99,100],
        [77,88],
    ];

    for(let i=0; i<multiArray.length; i++){
        for(let k=0; k<multiArray[i].length;k++){
            console.log(multiArray[i][k]);
            if(multiArray[i][k] === 33){
                console.log("You found 33");
                break; // break out the second for loop (stop at 33, second row)
            };
        };
        console.log("\n");
    };

    for(let i=0; i<multiArray.length;i++){
        for(let k=0; k<multiArray[i].length; k++){
            console.log(multiArray[i][k]);
            if(multiArray[i][k] === 33){
                console.log("You found the value");
                continue;
            }else{
                console.log("Founing");
            }
        };
    };

// Label
   
    outerLoop: for(let i=0; i<multiArray.length; i++){
        for(let k=0; k<multiArray[i].length;k++){
            console.log(multiArray[i][k]);
            if(multiArray[i][k] === 33){
                console.log("you found the vale");
                continue outerLoop;
            }
        };
        console.log("\n"); //this code is ignored with continue outerLoop;
        // this code is not ignored with break;
    };
}
*/

/*  JavaScript Date Object */
/*
{
    var valentine = new Date(); // Date() is a constructor, special function to return an instance of something
    // if you don't put anything inside the (), it means right now
    console.log(valentine);
    // GMT is a standard timezone

    // month is start from zero base, but day is not zero base
    var datetime = new Date(1998,11,31);
    console.log(datetime);

    // Unix Epoch --> from Jan 1 1970
    var currentTime = new Date(0);
    console.log(currentTime);
}
*/

/*
{
    let myDate = new Date();
    console.log(myDate);

    let newDate = new Date(2022,11); //month is 0 base
    console.log(newDate);

    let newDate2 = new Date(2022,12);
    console.log(newDate2); // 2020 + 13 month because month is zero base

    // not excetly the unix date, because we are in the GMT timezone
    let unixDate = new Date(0);
    console.log(unixDate);

    let dayNow = new Date(Date.now());
    console.log(dayNow);

    // you can just console.log(new Date())
    console.log(new Date());

    // print the minisecond from Unix eport
    let time = Date.now();
    console.log(time);
}
*/


// we can count the program using Date.now();
/*
{
    let start = Date.now();
    let x = 0;
    for (let i=0; i<100000000; i++){
        x = x+i;
    };
    let end = Date.now();

    let total = end - start;
    console.log("Time took: "+total);
    console.log(x);
}
*/

/*
{
    let start = Date.now()
    let x = 0;
    for (let i=0; i<10000000; i++){
        x += i;
    };
    let endTime = Date.now()

    let timeTaken = endTime - start;
    console.log("The time taken is " + timeTaken);
    console.log(x);

}
*/

/*
{
    let before = new Date(2020,10,15);
    let after =  new Date(2020,10,20);

    let days = after - before;
    console.log(days);
    let oneDay = 1000 * 60 * 60 * 24;
    console.log(oneDay);

    let fiveDay = oneDay * 5;
    console.log(fiveDay);
}
*/

/* Date Math */
/*
{
    //Day object (Using string to create date)
    let myDate = new Date('12 Jan 1995 00:15:54 GMT');
    console.log(myDate); 

    let myDate2 = new Date('1998-11-14');
    console.log(myDate2);

    // if we press number, it will convert to GMT,(year,month,date,hours,minute,seconds)
    let myDate3 = new Date(2012,11,15,10,10,10);
    console.log(myDate3);

    let utcTime = new Date(Date.UTC(2022,11,15,10,10,10));
    console.log(utcTime);

    let myDate4 = new Date(2022,06,12);
    console.log(myDate4.getFullYear());
    console.log(myDate4.getMonth());
    console.log(myDate4.getDate());

    let myDate5 = new Date(1998,03,03);
    console.log(myDate5);
    console.log(myDate5.getTimezoneOffset() / 60); //GMT time for HK
    console.log(myDate5);
}
*/

/* Function */
// Function is you define a secino of code it can be call or invoke
/*
{
    function square (x){
        return x*x;
    };
    console.log(square(5));
}

{
    function square(x){
        return x*x;
    };

    let x = 5;
    // x will be copy to the function
    console.log(square(x));
    // x is not affected
    console.log(x);  
}
*/
/*
{
    function func(x){
        x.name = "Sally";
    };
    let me = {name:"Jack"};
    // if the arrgument is an object, it will change the variable
    func(me);
    console.log(me.name);
}
*/

/*
{
    function func(me){
        me = {}; // assign to another object
        me.name = {name:"newName"}; // this will change an other object call me, not out input object
        // noting related to our input
    };

    let me = {name:"Jack"};
    func(me);
    console.log(me.name)
}
*/

/* Callback function */
/*
{
    // callback function (a function call another function)
    function callbackFunction(x){
        return x;
    };
    function myFunction(x){
        x = x*x;
        console.log(x);
    };
    callbackFunction(myFunction(5 ));
}
*/

/* "a synchronous" callback function */
// When you have an "a synchronous" function, the function will be call at some time at the future
/*
{
    let doSomething = function(){
        console.log("Done");
    };
    // set Timeout is a higher order function,
    // what it means is after 3000ms, run the first argumnet function
    setTimeout(doSomething,3000);
}
*/

/* Recursive Function */
/*
// a function which call itself
{
    function recursiveFunction (x){
        if(x%2 ===0){
            return console.log(x/2);
        }else{
            recursiveFunction(x-1);
        };
    };
    recursiveFunction(6)
    recursiveFunction(7);
}
*/

/* Function Declarations and Expressions */
/* 
{
    // Function declaration, you directly assign a name to a function 
    function pow(x,y){
        let total = 1;
        for(let i=0; i<y; i++){
            total *= x;
        };
        return total;
    };

    console.log(pow(3,3));

    // Function Expression, assign a variable to a function
{
    let myFunc = function (x,y){
        let total =1;
        for(let i=0; i<y; i++){
            total *=x ;
        };
    
        return total;
    };
    console.log(myFunc(5,2));
}
}
*/

/* Hosting 
// JavaScript will scan all the code two times,
// first time for variable declaration,
// second time to execuite the code
{
// if it is function declaration, all the function will be scaned at the first time
    declarFun(5); // you found that the function can be execuited before the declaration
    function declarFun (x){
        console.log("I found " + x);
    };

    aSyncFunc(2); // cannot be execuited

    var aSyncFunc = function (x){
        console.log("I found " + x);
    };

    aSyncFunc(2);
}
*/

/* Hosting in Practice */
/*
{
    // Expressions
    //conesole.log(x); // console is not defined

    //console.log(y); // That will be undefined
    // because y has been exeuited before it identified.
    //var y = 10;
    //same thing:
    // var x;
    // console.log(x);
    // x =10;

    // Function declaration 

    doSomething();  
    // the function works because JavaScript itentified the function first when the code ran first time.
    function doSomething(){
        console.log("Hello World");
    };

    // function expression
    doStuff(); // did not work
    var doStuff = function (){
        console.log("I am function declaration");
    };
}
*/

/* Function as First Class Citizens (Objects) */
/*
{
    function pow (x,y){
        total = 1;
        for(let i=0;i<y;i++){
            total *= x;
        };
        return total;
    };

    //console.log(pow(2,2));

    // assign a function into a variable
    let coolFunctions = [pow]; //make an array start at pow function
    console.log(coolFunctions[0](3,3));

    // Method
    let mathFunction = {
        power:pow // properties
    };

    console.log(mathFunction.power(3,3))

    // Add properties in a function
    pow.description = "Will raise number to a power"

    console.log(pow.description);

    function callbackFunc (callback){
        return callback(3,5);
    };

    console.log(callbackFunc(pow));

    function callAFunction (func){
        return pow;
    };

    console.log(callAFunction()(3,3));
}
*/

/* Memoization and Algorithm Optomizationo  */

/*
// attach a properties to a function  
{
    pow.calculated = []; // [] is an array
    function pow(x,y){
        let total =1;
        for (let i=0; i<y; i++){
            total *=x;
        } 
        pow.calculated.push(total);
        console.log(pow.calculated);
        return total;
    };
  
    pow(3,2);
    pow(2,2);
    pow(3,3);
    pow(3,10);
}
*/

/* Memoization and Algorithm Optomizationo  */
// Key Value pair
/*
{
    pow.calculated = {}; //must be an object
    function pow (x,y){
        
        let stringVersion = x + "^" + y;
        console.log("string version: " + stringVersion);

        if (stringVersion in pow.calculated){
            console.log("found!");
            return pow.calculated[stringVersion];
        }else{
            console.log("Calculating");
        }

        total = 1;
        for(let i=0; i<y; i++){
            total *=x;
        }
        pow.calculated[stringVersion] = total;
        console.log(pow.calculated)
        return total;
    };

    pow(3,3)
    pow(3,3)
    pow(3,2)
    pow(3,2)
}
*/

/* Exercise */
/*
{
    // attach properties in function
    pow.calcuated = [];
    pow.description = "raise number to power"
    function pow (x,y){
        total =1;
        for(let i=0; i<y; i++){
            total *= x;
        };
        pow.calcuated.push(total);
        console.log(pow.calcuated);
    };
    pow(2,2);
    pow(2,3);
    pow(3,3);
    pow(3,3);
}

{
    // key value pair
    pow.description = "raise number to power";
    pow.calculated = {};
    function pow (x,y){
        
        let calculatedValue = x + "^" + y;
        let total =1;
        
        if(calculatedValue in pow.calculated){
            console.log("Found!!");
            return pow.calculated;
        }else{
            console.log("Calculating");
        }

        for(let i=0; i<y; i++){
            total *= x;
        };
        
        pow.calculated[calculatedValue] = total;
        console.log(pow.calculated);
        return total;
    };

    pow(3,3);
    pow(3,3);
    pow(2,2);
}

// default parameter
{
    function pow(x,y,...extra){
        // if(y === undefined){y=2}; // assign y to undefined

        // is y equal to y? is ture, return 2 else return y
        // y = typeof y === "undefined" ? 2:y;
        
        console.log(extra);
        let total=1;
        for(let i=0; i<y; i++){
            total *= x;
        };
        console.log(total);
        return total;
    };
    pow(3);
    pow(2,1,2,3,4,5)

    // How to use extra??
    function largest(x,...extra){
        let largest = x;
        for (let i=0; i<extra.length; i++){
            if(largest < extra[i]){
                largest = extra[i];
                console.log("The largest data was updatedto " + largest);
            };
        };
        console.log(this);
        console.log(arguments);
        return largest;

        
    }; 

    largest(11,22,33,44,1,2,33,100);
}
*/

/*  This (the function context) */
/*
// if you have function, you invoke function
// imagine x(nArrguments,this)
{

    let me = {
        name: "Jack",
        callMe: callMe,
        strictFunc: strictFunc,
        outputMe: function(){
            console.log(this);
            console.log(this.name);
        }
    };

    function callMe(){
        console.log(this);
    };
    
    function strictFunc(){
        'use strict';
        console.log(this);
    };
    
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThree

// In a container, we shall use the "Pascal Notation"
    function Person (){
        console.log(this);
        this.name = "Jack";
    };


    me.callMe(); //Method
    callMe(); // function
    me.strictFunc(); // call it in "Method mode", it work!!!
    strictFunc(); // call it in strict mode, it will become undefined

    let personA = new Person(); // a constructor
}
*/

/* Constructor
// a constructor is to return a new object by pass the word new
{
    // using pascal by convention
    function LetMe (job) {
        this.name = "Jack";
        this.age = 24;
        this.job = job;
        this.myJob = function myJob (){
            console.log("What is my job?? \n");
            console.log("My job is " + this.job + "\n");
        };
    };

    let jack = new LetMe("Trainee");
    console.log(jack.name);
    console.log(jack.age);
    console.log(jack.job);
    console.log(jack.myJob())
}
*/

/* Call and Apply */
/* 
{
    // call is to change "this"
    function doStuff(input,input2){
        console.log(input,input2);
        console.log(this);
    };

    //console.log(doStuff(5));

    // We have to change the value *This*
    // The first arrgument is *this
    doStuff.call("Hello World", 5,10);
    doStuff.apply("hello",[5,10]); // you have to assign the parameter inside an array
    let args = [5,10];
    doStuff.apply("Hello World",args);
}
*/

/* Bind */
/*
// bind is another method to change *this
// but you have to assign another function to it
{
    function doStuff(input,input2){
        console.log(input,input2);
        console.log(this);
    };

    let me = {name: "Jack"};
    let newFunction = doStuff.bind(me,5,10);
    newFunction();
}
*/

/*  Arrow Function */
/*
// () => expression
{
    function cube(x){
        return x*x*x;
    }
    console.log(cube(2));

    let cubeArrow = x => x*x*x;
    console.log(cubeArrow(3));

    let cubeArrow2 = x => {
        console.log("calculating...");
        return x*x*x
    }; // if using {}, you need to + return

    console.log(cubeArrow2(4));
}
*/

/*  this with Arrow Functions  */
/*
{
    let arrowFunc = () => this; // this will be windows object
    
    function normal(){
        return this;
    };

    //console.log(arrowFunc());
    //console.log(normal());

    let functions = {
        arrow: arrowFunc,
        normal: normal // this will be function object
    };

    console.log(functions.arrow());
    console.log(functions.normal());
}
*/

/* this with arrow methods and object literals */
/*
{
    let arrow = () => this;

    function normal(){
        return this;
    };

    let functions ={
        arrow: arrow, //window object
        normal: normal, //functions object
        arrowThis: () => this, //window object
    }

    console.log(functions.arrow());
    console.log(functions.normal());
    console.log(functions.arrowThis());
}
*/

/* bind with arrow function */
// bind to to change the value of *this
/*
{
    // you can't change if you using arrow function
    let arrow = () => this;
    console.log(arrow());
    let newFunc = arrow.bind("hello");
    console.log(newFunc());

    // we can use bind to change the normal function

    function normal (){
        return this;
    };

    console.log(normal.bind("can change this"));
}
*/
/* debugging */
// go to browser, F12, sources and select a breakpoint
/*
{
    // factorial function
    function factorial(x){
        let total =x;
        for (let i=x-1; i>1; i--){
            total *= i;
        }
        return total;
    };

    console.log(factorial(5));
}
*/
/*
{
    
    document.getElementById("button")
    .onclick = () => {console.log("confirmed")};

    document.getElementById("hello")
    .onmouseover = () => {console.log("mouseOver")}; 
}
*/

/*
{

    try{
    doesntexist;
    }catch (e){
        console.log(e);
    }
    finally{
        console.log("test");
    }

    // If we set finally there, the follow step will not execuited
    console.log("after");


    function doSomething(){
        throw {error: "This broke", code: -1} // is an object
        console.log("Fuck You");
    };

    try{
        doSomething();
    } catch(e){
        console.log(e);
        console.log("Error");
    }finally{
        console.log("Wrapping things up...");
    }

    throw new Error();  // special character that create an error for us

}
*/

/* Object Oriended Programming */
/* An object is to define some entities such as car, request......*/


/* Creating a Constructor Function */
/*
{
    function User() {
        console.log(this); // before assign a properties
        this.name = "jack"; 
        console.log(this); // after assign a properties
    }
    
    let me = new User(); // assign an new object call me by using a constructor

    console.log(me);
}
*/

/*
{
    function User(name,age,sex,interests){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.interests = interests
    }

    let Jack = new User("Jack",23,"Male",["War game","Badminton","Football","Coding"]);
    //console.log("Name: " + Jack.name,"\n","Age: " + Jack.age, "\n","Sex: " + Jack.sex);
    Jack.membership = "Gole";
    console.log(Jack);

    let Peter = new User ("Peter",25,"Male");
    //console.log("Name: " + Peter.name,"\n","Age: " + Peter.age, "\n","Sex: " + Peter    .sex);
}
*/

/* Creating a Factory Function */
/*
{
    function newUser(name,interest){
        let person = {  //create an object
            name: name,
            interest: interest,
        };

        return person;
    }
    let me = newUser("Jack",["eating","sleeping","playing"]);
    let you = newUser("Nicole",["Reading","Writing","Studing"]);
    console.log(me,you)
}
*/

/*  Creating Prototype Methods for Constructor Functions  */
/*
{
    function User(name, interests){
        this.name = name
        this.interests = interests
        this.outputStuff = function (){ // Create a method in function
            console.log(this.name , this.interests);
        }
    }

    // Create a method by using prototype (can save memory)
    User.prototype.greet = function(){
        console.log("How are you");
    };

    let me = new User("Jack",["Football","Badminton","War game"]);
    me.outputStuff();
    me.greet();
}
*/

/* Prototype Inheritance */
// One Object take part of another object and inheritance of his own
// prototype is just an object that another object can inheritance from

/* Setting an Object Prototype Using Object.setPrototypeOf */
/*
{
    let user = {
        active: true,
    };

    let teacher = {
        teaching: ["math","science"],
    };
    // inheritance , teacher inherit user
    Object.setPrototypeOf(teacher,user);
    console.log(teacher.active);
}
*/

/* Override in Prototypical Inheritance */
/*
{
    let user = {
        active: true,
    };

    let teacher = {
        teaching: ["english","chinese","program"],
    };

    let student = {
        major: "English",
    };

    Object.setPrototypeOf(student,user);
    Object.setPrototypeOf(teacher, user);

    console.log(teacher.active);
    console.log(student.active);

    student.active = false; //Only change student (directy on the object instead of the prototype)
    console.log("Student active: "+student.active)
    console.log("Teacher active: " + teacher.active)
}
*/

/* Instance Properties vs Prototype Properties */
/*
// Prototype properties is inside object itself
{
    // Prototype Properties
    let user = {
        active: false,
        sayHello: function (){
        return console.log(this.name + " says hello!");
        }
    };

    // Instance Properties
    let teacher = {
        name: "Jack",
        teaching: ["JavaScript","Python","C","C++"],
    };
    
    let student = {
        name: "Oscar",
        major: "Computer Science"
    };

    Object.setPrototypeOf(teacher, user);
    Object.setPrototypeOf(student, user);

    teacher.active = true;

    teacher.sayHello();
    student.sayHello();
}
*/

/* Polmorphism */
/*
{
    let User = {
        active: false,
        sayHello: function (){
            return this.name + " says, hi !"
        },
    };

    let student = {
        name: "Jack",
        major: "Environmental Science",
    }

    let teacher = {
        name: "Tony",
        teaching: ["Program","Math","Science"],
        sayHello: function(){
            let message = this.name + " teaches ";
            this.teaching.forEach(function(element){
                message += element + " ";
            });
            return message;
        }
    }

    Object.setPrototypeOf(student,User);
    Object.setPrototypeOf(teacher,User);

    //console.log(student.sayHello());
    //console.log(teacher.sayHello());

    let classMember = [teacher,student];
    
    classMember.forEach(function(element){
        console.log(element.sayHello());
    })
}
*/

/*
{
    let User = {
        active: false,
        sayHello: function (){
            return this.name + " says Hello ";
        }
    };

    let student = {
        name: "Jack",
        major: "Environmental Science",
    };

    let teacher = {
        name: "Tony",
        teaching: ["Programming","Math","Other"],

        sayHello: function(){
            let message = this.name + " teaches ";
            this.teaching.forEach(function(element){
                message += element + " ";
            })
            return message;
        }
    };

    Object.setPrototypeOf(student,User);
    Object.setPrototypeOf(teacher,User);

    let allMember = [student,teacher];

    allMember.forEach(function(element){
        console.log(element.sayHello());
    });
}
*/

/*
{
    function doSomething(){
        return 1+1;
    }
// doSomething() (point to -->) object.constructor --> doSomething()
// 1. doSomething function has a prototype which inherite from an object
}

let test = new doSomething(); // no return there
// they have smae prototype
if (doSomething.prototype === Object.getPrototypeOf(test)){
    console.log("match");
};
*/

/*
{
    // Taco's prototype 1
    function Taco(){
        this.toppings = ["cheese"];
    };

    // Taco prototype 2
    Taco.prototype.make = function (){
        console.log("Make a taco...");
    };
}
    // container will have only one prototype include (prototype 1 + prototype 2)
    // newTaco and myTaco have same prototype object, so it save memory
    let newTaco = new Taco();
    let myTaco = new Taco();
*/

/* Creck an Object for a property Ising in */
/*
{
    let User = {
        active: true,
        favourite: function (){
            return this.name + " like Computer Games ";
        }
    };

    let student = {
        name: "Jack",
        major: "Environmental Science",
        favourite: ["Programming","badminton","Joking"],
        saySomething: function(){
            message = this.name + " like ";
            this.favourite.forEach(function(element){
                message += element + " ";
            });
            return message
        },
    };

    let teacher = {
        name: "Tony",
        favourite: ["Math","Statistic","Money","Award"],
        saySomething: function(){
            message = this.name + " ";
            this.favourite.forEach(function(element){
                message += element + " ";
            })
        return message;
        }
    }

    Object.getPrototypeOf(student,User);
    Object.getPrototypeOf(teacher,User);

    //student.active = false;
    //teacher.active = true;
    
    let classMember = [student,teacher];
    
    classMember.forEach(function(element){
        console.log(element.saySomething());
    })
    
    // in
    // check whether
    console.log("Name in teacher? ", "name" in teacher);
    // similar way to do this
    console.log("Name in teacher? ",teacher.name !== undefined);
    console.log("Name in teacher? ",teacher.name === undefined);
    //hasOwnProperty Methd
    console.log("Name in teacher? ", teacher.hasOwnProperty("name")); //Only check in the object, doesn't check in prototype
    
    // Example
    console.log("hasOwnProperty only check in object", teacher.hasOwnProperty("active"));
    console.log("Only check in object ", "active" in teacher);
    console.log("check properties in prototype", teacher.active !== "undefine");

    //I don't understand
    console.log("active" in teacher);
    teacher.active = true;
    console.log("active" in teacher);
}
*/

/* How to Gen an Array of Property Names from an Object */
/*
    let User = {
        active: false,
        favourite: function (){
            return this.name + " like Computer Games ";
        }
    };

    let student = {
        name: "Jack",
        major: "Environmental Science",
        favourite: ["Programming","badminton","Joking"],
        saySomething: function(){
            message = this.name + " like ";
            this.favourite.forEach(function(element){
                message += element + " ";
            });
            return message
        },
    };

    let teacher = {
        name: "Tony",
        favourite: ["Math","Statistic","Money","Award"],
        saySomething: function(){
            message = this.name + " ";
            this.favourite.forEach(function(element){
                message += element + " ";
            })
        return message;
        }
    }

    Object.getPrototypeOf(student,User);
    Object.getPrototypeOf(teacher,User);

    let classMember = [student,teacher];
    
    classMember.forEach(function(element){
        console.log(element.saySomething());
    })

    //teacher.active = true;
    //student.active = true;

    let teacOwnProp = [];
    let teacProp = [];

    for (let prop in teacher){
        teacProp.push(prop);
        if(teacher.hasOwnProperty(prop)){
            teacOwnProp.push(prop);
        };
    };
    //console.log(teacProp);
    //console.log(teacOwnProp);
*/


/* Converting Object Literals to Constructors */
// When we use let object, this is Object literals
// When we use let object = new object this is constructor
/*
    function User(){
        this.active = false;

    };

    User.prototype.saySomething = function(){
        return this.name + " Like Computer Games ";
    };

    function Student (name,major,activities){
        this.name = name;
        this.major = major;
        this.activities = activities;
    };
    
    function Teacher (name,teaching) {
        this.name = name;
        this.teaching = teaching;
    }

    let student = new Student("Person student","Computer Science",["Programming","Badminton","Joking"]);
    let teacher = new Teacher("Jack",["Computer Science","Math"]);

    console.log(student, teacher);
*/

/* Setting Prototype with Constructor */

{
    function User (){
        active = false;
    };

    function Student(name,major,activities){
        this.name = name;
        this.major = major;
        this.activities = activities;
    }
    Student.prototype = new User(); // Inheritance

    function Teacher(name,teaching){
        this.name = name;
        this.teaching = teaching;
    };
    Teacher.prototype = new User(); // Inheritance
    Teacher.prototype.sayHello = function (){
        return this.name + " says Hello!"
    };

    let student = new Student("Jack",["Environmental Science","Mechanical Automation"]
    ,["Badminton","War Game","Lisenting Music"]);

    let teacher = new Teacher("Tony",["Math","Science"],["Math Competition","Reading"]);

    console.log(student,teacher);
    console.log(teacher.sayHello());

    // instanceof
    console.log(teacher instanceof Teacher); // true (same datatype)
    console.log(teacher instanceof User); // true (inheried)

    if(teacher instanceof Student){
        console.log("Yep");
    }else{
        console.log("nope");
    }

    function doSomething(user){
        if (user instanceof User){
            return 5;
        }else{
            return -1;
        }
    }
    console.log(doSomething("student"))
}














































