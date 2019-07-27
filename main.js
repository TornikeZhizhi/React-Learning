class Human {

    consturctor(){

       this.gender = 'male' 
    }

    printGender(){

        console.log(this.gender)
    }

}




class Person extends Human {

    consturctor(){

       this.name = 'max' 
    }

    printMyname(){

        console.log(this.name)
    }

}


const person = new Person()
person.printMyname()
person.printGender()