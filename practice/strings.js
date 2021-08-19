let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    fullName: function()
    {
        console.log(this.firstName+ " " +this.lastName)
    }

}
console.log(person.fullName())
console.log(person.firstName)

console.log('gender' in person)
//print all the values of the JS object
for(let key in person)
{
    console.log(person[key])
}