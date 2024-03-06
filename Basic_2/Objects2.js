// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sohaibazmi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(typeof tinderUser);

const regularUser = {
    email: "user2mail.com",
    fulName: {
        userFullName: {
            firstName: "Mohd",
            lastName: "Sohaib"
        }
    }
}

// console.log(regularUser.fulName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        1: "Sohaob",
        2: "Azmi"
    },

    {
        1:"Azamgarh"
    }
];

// console.log(user);
// console.log("This is Fresh");
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// De-Structuring Object

const course = {
    c_name: "JavaScript Basic",
    price: "999",
    t_name: "Azmagarh"
}

const {t_name: name, price: p} = course;

console.log(name);
console.log(p);