//  Object literals

const sym = Symbol("MyKey");

const JsUser = {
    name: "Sohaib",
    age: 22,
    [sym]: "Sohaibazmi",
    locations: "Azmagarh",
    email: "Sohaibazmi101@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday"]
};

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser[sym]);

JsUser.email = "sohaibazmi101@yahoo.com";

console.log(JsUser.email);

// Object.freeze(JsUser);

JsUser.email = "sohaibazmi101@microsoft.com";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

// console.log(JsUser.greeting());
JsUser.greeting();
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js User "${this.name}" Your email id is "${this.email}"`)
}
JsUser.greetingTwo();