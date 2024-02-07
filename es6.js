import { uppercaseString, lowercaseString } from "./math__functions.js";

/*
COMAPARE SCOPES OF VAR AND LET
*/

//when VAR is declared it's global or local if
//declared inside a funtion

//when LET is delcared it's limited to be inside that
//that block,statement or expression

//For Example

function containedVar_LetDiff() {
  var numArray = [];
  for (var i = 0; i < 3; i++) {
    numArray.push(i);
  }
  console.log(numArray);
  console.log(i);
}
// containedVar_LetDiff();

//function above will behave the same as the following:

function containedVar_LetDiff1() {
  var numArray = [];
  var i;
  for (i = 0; i < 3; i++) {
    numArray.push(i);
  }
  console.log(numArray);
  console.log(i);
}
// containedVar_LetDiff1();

// will cause problems if u create
// a function and store it for later use
//inside a for loop that uses the i variable.
//happens because the stored function will
//always refer to the value of the updated global i variable

function varProblem() {
  var printNumTwo;
  for (var i = 0; i < 3; i++) {
    if (i == 2) {
      printNumTwo = function () {
        // doesn't return 2 because
        //global i was returned
        return i;
      };
    }
  }
  console.log(printNumTwo());
}
// varProblem();

//printNumTwo() prints 3 and not 2
//because the value that was assigned to i,
//was updated and the printNumTwo() returns
//global i and not the value i had when
//the function was created in the for loop

function whyLetIsBetter() {
  let i = 0; // remove this to get the reference error
  let printNumTwo;
  for (let i = 0; i < 3; i++) {
    if (i === 2) {
      printNumTwo = function () {
        return i;
      };
    }
  }
  console.log(printNumTwo());
  console.log(i);
}
// whyLetIsBetter(); //will get reference error: i is not defined

//i not defined because it was not declared in the global scope.
//only decared in for loop statemnt.

/*
MUTATE AND ARRAY DELCARED WITH CONST
 */
function mutateArray() {
  const s = [5, 6, 7];
  //   s = [1, 2, 3];// comment out this line to remove error
  s[2] = 45;
  console.log(s);
}
// mutateArray();

/*
Arrow FUnctions to wirte concise Anonymous Functions
 */

//Often don't need to name our functions, especially when
//passing a function as an arugment.

//often we use this following syntax

function arrowFunctionContainer() {
  const myFunc = function () {
    const myVar = "value";
    return myVar;
  };
}

//ES6 lets us use this syntax

function arrowFunctionContainer1() {
  const myFunc = () => {
    const myVar = "value";
    return myVar;
  };
}

//can also be written like this

function arrowFunctionContainer2() {
  const myFunc = () => "value";
}

/*
Write Arrow Functions with Parameters
 */

//Just like a regular function, you can pass arguments into an arrow function

//possible to pass more than one arugment into an arrow function
function arrowFuncWithParam() {
  const doubler = (item) => item * 2;
  console.log(doubler(4));

  const multiplier = (item, multi) => item * multi;
  console.log(multiplier(69, 4));
}
// arrowFuncWithParam();

/*
Set Default Parameters for Your Functions
*/

function defaultParamaters() {
  const greeting = (name = "boy") => `Hello my ${name}`;

  console.log(greeting("son"));
  console.log(greeting());
}
// defaultParamaters();

/*
Using Rest Operator
*/

//Used when unsure about how many parameters are being ussed

function changeThisToRestFunc() {
  const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  };
  console.log(sum());
}

// instead of writing it like this, if I don't know before hand
// how many params are being passed, just use ...args when passing the paramters

const restFuncEx = () => {
  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  };
  console.log(sum());
};

/*
using spread operator
 */

const spreadFunc = () => {
  var arr = [1, 2, 3, 4, 69];
  var spreadIntoThis = [...arr];
  console.log(spreadIntoThis);
};
// spreadFunc();

/*
Destructing assignment to EXTRACT Val from Obj
*/

//neatly assigning values taken directly from an object

//es5 method
function destructingAssCon() {
  const user = {
    name: "JOhnny Boy",
    age: 149877,
  };
  const name = user.name;
  const age = user.age;
  console.log(name, age);
}
// destructingAssCon();

//With Destructing Assignment it'd look like this

const destructingAssCon1 = () => {
  const user = {
    name: "billy bou",
    age: -12,
  };
  const { name, age } = user;
  console.log(name, age);
};
// destructingAssCon1();

/**
 Use destructing assignment to assgn variables from objects 
 
 */

//destructing allows you to assign a new variable when extracting the value

const assigningWhenExtracting = () => {
  const user = {
    name: "john Doe",
    age: 34,
  };

  const { name: UserName, age: userAge } = user;

  console.log(UserName, userAge);
};
// assigningWhenExtracting();

/*
Use Destructing assignment to assign variables from Nested objects
*/

//You can use the same principles from the pervioustwo lessons to destructure values fro mnested objects

//Using similar object from example above
const nestedDestruc = () => {
  const user = {
    johnDoe: { age: 34, email: "johndoe@ffc.com" },
  };

  //assigning an object properties' values to variables with different names
  //as well as extracting the values of the object property
  const {
    johnDoe: { age: userAge, email: userEmail },
  } = user;

  return [userAge, userEmail];
};
// console.log(nestedDestruc());

/*
Destructing an array example
 */

const destructingArr = () => {
  const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
  //the two commas after "b," represent the next two elements
  console.log(a, b, c);
  let x = 8,
    y = 6; //reassign using destructuring
  [x, y] = [y, x];
  console.log(x, y);
};
// destructingArr();

/*
Destructing via rest elements
 */

const destructingRestElements = () => {
  function removeFirstTwo(list) {
    const [a, b, ...spread] = list; // this is destructuring syntax
    console.log(spread);
    return spread;
  }

  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  /**the function call above returns the result of removeFirstTwo(source) */
};
// destructingRestElements();

/*
Use Destructuring Assignment to Pass an Object as a function's Parameters
 */

const desToPassObj = () => {
  const example1 = () => {
    const profileUpdate = (profileData) => {
      const { name, age, nationality, location } = profileData;
    };
  };
  //Code above effectively destructures the obj sent into the function.
  //This can also be done in-place with the example below
  const example2 = () => {
    const profileUpdate = ({ name, age, nationality, location }) => {};
  };
};
//no return

/*
Template literals and string interpolation
 */
/*
 -Use template literal syntax with backticks to create an array of list element
 strings.
 -each list element's text should be one of the arr elements from the failure prop
 on result obj
 -the makeList function should return the array of list item strings
 */

const stringIntEx = () => {
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
  };
  function makeList(arr) {
    const failureItems = [];
    //first step is write a for loop to iterate through the desired array
    for (let i = 0; i < arr.length; i++) {
      //makeList(arr) = makeList(result.failure) when funtion call happens near end
      //next step is to .push arr[i] into the failure items array
      //arr[i] turns into result.push[i] with that function call at the end
      failureItems.push(arr[i]); // wrap the arr[i] with ${} and can just add template literal in the push
    }

    return failureItems;
  }
  const failuresList = makeList(result.failure);
  /* function call that stores the output of the result.failure arr
  in the const failuresList */
  console.log(failuresList);
};
// stringIntEx();

/*
Write concise Object Literal Declarations using Object Property Shorthand
 */

const objPropShorthand = () => {
  const createPerson = (name, age, sex) => {
    return {
      name: name,
      age: age,
      sex: sex,
    };
  };
  //this is the es5 way
  const result = createPerson("Zodiac Hasbro", 56, "male");
  console.log(result);
  //createPerson function can be written in shorthand like this:
  const createPerson1 = (name, age, sex) => {
    return {
      name,
      age,
      sex,
    };
  };
  const result1 = createPerson1("Zodiac Hasbro", 56, "male");
  console.log(result1);
};
// objPropShorthand();

/*
Use Class Syntax to Define Constructor Function
*/

//es5, an object can be created by definining a constructor function and using the NEW keyword to instantiate the object
//es6, a class declaration has a constructor method that is invoked with the new keyword.
//If the consrtuctor method is not explicitly defined, then it is implicitly defined with no args

const constructorFuncEx = () => {
  //Explicit Constructor
  //consstructor() takes in a parameter (targetPlanet)
  //targetPlanet is stored in this.targetPlanet
  //takeOff() is a function that is also a method that is tacked onto the variable that we initialized with a new SpaceShuttle Class
  class SpaceShuttle {
    //class SpaceShuttle is defined. it has a constructor and a method
    //this class has a constructor func that takes in the parameter - targetPlanet
    //assigns it to the instance variable "this.targetPlanet"
    //takeOff() is the method of SpaceShuttle class
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + " !");
    }
  }

  //Implicit constructor
  class Rocket {
    launch() {
      console.log("To the Moon!");
    }
  }
  //An instance of the SpaceShuttle claass named zeus is created with "Jupiter" as it's argument
  const zeus = new SpaceShuttle("Jupiter");
  //prints to "To Jupiter !" in console
  zeus.takeOff();
  //the takeOff method is called and console logs the message "To Jupiter!"

  const atlas = new Rocket();
  //prints "To the moon!" in console
  atlas.launch();

  //FCC example with naming vegetable
  class Vegetable {
    constructor(targetVeg) {
      this.targetVeg = targetVeg;
    }
  }

  const carrot = new Vegetable("carrot");
  console.log(carrot.targetVeg);
};
// constructorFuncEx();

/*
Use getters and setters to Control Access to an Object 
*/

/* You can obtain values from an object and set the value of a property within an object.*/

/*
These are classiically called getters and setters 
*/

/*
Getter functions are meant to simply return (get) the value of an
object's private variable to the user wiithout the user directly accessing the private variable
*/

/*
Setter functions are meant to modiify (set) the value of an object's private variable
based on the value passed into the setter function.
This change could involve calculations, or even overwriting the previous value completley. 
*/

const getAndSetFunc = () => {
  class Book {
    constructor(author) {
      this._author = author; //underscore means private property or object
    }
    //getter
    get writer() {
      return this._author;
    }
    //setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book("anonymous");
  console.log(novel.writer); //this is the get
  novel.writer = "newAuthor";
  console.log(novel.writer); //this is the set
};
// getAndSetFunc();

/*
Temp converter rules */

/*
Use the CLASS keyword to create a thermostat class. 
The CONSTRUCTOR accepts a Fahrenheit temperature.

In the class, create a GETTER to obtain the temperature in Celsius
and a SETTER to obtain the temperature also in Celsius.


C = 5/9 * (F - 32)
F = C * 9.0/ 5 + 32


This is the power of the getter & setter
Creating an API for another use, who can get the correct result regardless of which one you track.

Abstracting implementation details from the user*/

const tempConvereter = () => {
  class Thermostat {
    constructor(temp) {
      this._temperature = temp; //temp is the arg being past through constructor func
      // _temperature is the private property with the stored value or arg of temp when we pass something in it later
    }
    get temperature() {
      return (5 / 9) * (this._temperature - 32);
      // the get temperature() method will return the formula C = 5/9 * (F - 32)
      // where F is the stored this._temperature as the arg (temp)
    }
    set temperature(newTemp) {
      this._temperature = (newTemp * 9.0) / 5 + 32;
      //using the sest temperature method, this is converting from C to F
    }
  }

  const thermos = new Thermostat(76); // Setting in Fahrenheit scale

  let temp = thermos.temperature; // 24.44 in Celsius

  thermos.temperature = 26;
  temp = thermos.temperature; //26 in celsius
  console.log(temp);
};
// tempConvereter();

/*
Export to share a code block
 */

// const exportExample = () => {
//   const uppercaseString = (string) => {
//     return string.toUpperCase();
//   };

//   const lowercaseString = (string) => {
//     return string.toLowerCase();
//   };

//   // export { uppercaseString, lowercaseString }; // will throw an error because export can only
//   //be used at the top level of a module
// };
// export { uppercaseString, lowercaseString } <----- this here would work because it's outside of function

/*
Reuse Javascript Code Using Import 
*/

const importExample = () => {
  // import { uppercaseString, lowercaseString } from "./string_functiions.js"; //throwing an error because it's not top level func

  const turnIntoUppercase = uppercaseString("hello");
  const turnIntoLowercase = lowercaseString("WORLD!");

  const output = { turnIntoLowercase, turnIntoUppercase };
  console.log(output);
};
// importExample();

/*
Use * to Import Everyting from a File 
*/

const importEverything = () => {
  //code below this line would be at top level module
  // import * as stringFunctions from "./string_functions.js";
  //throwing error because import only works at the top level of module

  stringFunctions.uppercaseString("hello");
  stringFunctions.lowercaseString("WORLD!");
};

/*
Create an Export Fallback with export default
 */

// export default is generally only used when exporting one function from a file

//Below are examples of export default

const exportDefaultEx = () => {
  // export default function add(x, y) {
  //   return x + y;
  // }
  // export default function (x, y) {
  //   return x + y;;
  // }
};

//first functino is a named function and the second is an anonymous func

/*
Import a Default Export
 */

/*
import subtract from "./math_functions.js"  

subtract(7,4); */

/*
create javascript promises
 */

//usually make a promise to do something asynchronously, not immediately
//example of a promise is an api request. promise to fetch data and return it or it can fail and throw server error
//Promise is a constructor function
//Need to use new keyword to create one
//Passes in 2 params that are methods; (resolve, reject)
//METHODS - are actions are performed on a javascript object

const promiseEx = () => {
  const makeServerRequest = new Promise((resolve, reject) => {});
};

/*
Complete a Promise with resolve and reject
 */
function container() {
  const myPromise = new Promise((resolve, reject) => {
    //switch out the condition to either get resolve or reject
    if (2 + 2 === 4) {
      resolve("yeah");
    } else {
      reject("nah");
    }
  });

  console.log(myPromise);
}
// container();

//Handle a Fufilled Promise with then

/*
myPromise.then(result => {

})
*/

//result is abittrary, can be anything

function promiseFufilledPromiseThen() {
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to otrue to represent a successful
    // response from a server

    let responseFromServer = true;

    if (responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not recieved");
    }
  });
  makeServerRequest.then((can_be_anything) => {
    console.log(can_be_anything);
  });
}
promiseFufilledPromiseThen();

function promiseRejectedCatch() {
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server

    let responseFromServer = false;

    if (responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not receieved");
    }
  });

  makeServerRequest.catch((error) => {
    console.log(error);
  });
}
promiseRejectedCatch();
