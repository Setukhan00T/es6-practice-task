// ** using for of loop :
const peoples = [
  {
    name: "Meena",
    age: 20,
  },
  {
    name: "Rina",
    age: 15,
  },
  {
    name: "Suchorita",
    age: 22,
  },
  
];
let total=0;
for(const people of peoples){
     total +=people.age;
}
console.log(total)


//**  using reduce :

const result =peoples.reduce((sum,people)=>sum+=people.age,0);
console.log(result);