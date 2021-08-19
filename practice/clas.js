


module.exports = class Person
{



get location()
{
    return "Canada"
}

//constructor is a method which executes by default when you create object of the classs


constructor(firstName, lastName, age)
{

    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}
//methods
fullName()
{
    console.log(this.firstName + this.lastName + this.age)
}


}

/*let person = new Person("Tim", "Doe", 34);
let person1 = new Person("Inga", "Bilyk",32);
//console.log(person.age, person.location, person.fullName())
console.log(person1.fullName()) */
