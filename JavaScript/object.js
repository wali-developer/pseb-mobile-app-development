const user = {
  name: "Wali",
  age: 25,
  address: "Peshawar",
  profession: "Software engineer",
  interests: ["Reading", "Programming", "Travelling"],
  childs: [
    {
      name: "Child A",
      age: 2,
    },
    {
      name: "Child B",
      age: 4,
    },
  ],
  reading: function () {
    console.log("Wali is Reading...");
  },
};

// console.log("name: ", user["profession"]);

delete user.profession;

user.name = "John";
(user.age = 50), (user.address = "USA");

// console.log("User: ", user);

const userEntries = Object.entries(user);
const userKeys = Object.keys(user);
const userValues = Object.values(user);

// console.log(keys);

for (let value of userEntries) {
  //   console.log("Value", value);
}

for (let key in userEntries) {
  //   console.log("Keys: ", userEntries[key]);
}

// console.log(userValues);

for (let value of userValues) {
  //   console.log("Value: ", value);
}

// Object Destructering
const { name, address, childs } = user;

console.log(name, address, childs);
