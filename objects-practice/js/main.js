// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


//more practice using classes and OOP fundamentals
//OOP: Encapsulation, Abstraction, Inheritance, Polymorphism


//more practice using classes and OOP fundamentals
//OOP: Encapsulation, Abstraction, Inheritance, Polymorphism

class Contractor{
    constructor(name,role,hardware){
      this._name = name
      this._role = role
      this._hardware = hardware
    }
    get name(){
      return this._name
    }
    get role(){
      return this._role
    }
    get hardware(){
        return this._hardware
    }

    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!. `);
    }
    sayBye(){
        console.log(`It has been a pleasure working with you`);
        
    }
  }

  class Front extends Contractor {
        constructor(name,role,tech,hardware){
        super(name,role,hardware)
        this._tech = tech
        }
        get tech(){
            return this._tech
        }
        sayHello(){
            console.log(`Hello, I am ${this._name} and I work on the ${this._role} using ${this._tech}. I am using a ${this._hardware} `);            
        }
  }

  class Back extends Contractor {
    constructor(name,role,tech,hardware){
    super(name,role,hardware)
    this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the ${this._role} using ${this._tech}. I am using a ${this._hardware}`)
    }
}

  let machi = new Front ("The Machine", "Front-end", "React","Surface Laptop")
  let simba = new Back("Neo", "Back-end", "Node","MacBook Air")
  

  let agencyList = [machi,simba]


  //below is an example of polymorphism
  //Polymorphism makes it so that we write some code and it works for all of our objects
  //**this for loop is a new version of looping */
  for(person of agencyList){
    person.sayHello()
  }
//This method only exist in the parent class, however all child classes are able to use it. 
  for(person of agencyList){
    person.sayBye()
  }


/******more class practice******/

class Car{
    constructor(year, make){
    this._year = year
    this._make = make
    this.speed = 0;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this._make} takes off with speed of ${this.speed} mph`);
        
    }
    stop(){
        this.speed = 0
        console.log(`${this._make} comes to a stop`);
        
    }
}

class ModelS extends Car{
    constructor(year,make,name){
    super(year)
    super(make)
    this._name = name
    }
    sentient(){
        console.log(`${this._name} goes into Sentient Mode`);
    }

    stop(){
        super.stop()
        this.sentient()
    }
}

let mycar = new Car(2024,"Tesla","Model S")

mycar.run(5)
mycar.stop()


/**classes calling a method that in turn calls another method **/
class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

  