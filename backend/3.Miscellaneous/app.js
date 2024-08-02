// function personMaker (name,age){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hey my name is  ${this.name}`);
            
//         }
//     }
//     return person;
// }

// constructor - doesent return any thing 
function Person(name,age){
    this.name=name;
    this.age=age;
  }
  Person.prototype.talk=function(){
    console.log(`Hi my name is ${this.name}`)
  };

  let p1= new Person("Ashutosh",25);
  let p2=new Person("Moni",21);