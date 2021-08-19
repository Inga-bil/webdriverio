const Person = require('./clas')
class Pet extends Person 
{

    get location( )
    {
        return "BlueCross"
    }

constructor(firstName, lastName)
{
    super(firstName, lastName)
}



}

let pet = new Pet("Richik", "Bilyk")
//pet.fullName();
console.log(pet.location)