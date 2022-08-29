const person = {
  name: {
    common: "John",
    fullName: ["John", "Doe"]
  },
  age: 32,
  isMale: false,
  address: {
    street: "13/A St Joseph",
    house: 10,
  },
};

// John,Doe
const stringifiedJson = JSON.stringify(person);
// {"name":{"common":"John","fullName":["John","Doe"]},"age":32,"isMale":false,"address":{"street":"13/A St Joseph","house":10}}
// console.log(stringifiedJson);
const parsedJson = JSON.parse(stringifiedJson);
// console.log(parsedJson);

// Destructure objects
const {name, age, isMale, address} =parsedJson;
// console.log(name)
const {common , fullName} = name;

// Select the container
const personContainer = document.getElementById("person-container");
// Insert HTML
personContainer.innerHTML=`
  <h2>Common Name:${common} </h2>
  <h3>Full name: ${fullName[0]} ${fullName[1]}</h3>
  <h3>Full name: ${fullName.join(" ")}</h3>
  <p>Age : ${age}</p>
  <p>Gender: ${isMale===true ? "Male" : "Female"}</p>
`


