// Create a dog object that has four properties 
// and three methods

let dog = {}

dog.breed = 'schit szu'
dog.size = 'small'
dog.color = 'brown'
dog.name = 'Ginger'
dog.legs = 4

dog.bark = function () {
    console.log('Woof-Woof!')
}
dog.jump = function () {
    console.log('Jumping')
}
dog.howl = function () {
    console.log('Hoooowwwwwwling')
}

// Constructor

function dogMaker(dogBreed,dogName,dogColor,dogSize,dogLegs){

    this.breed = dogBreed
    this.name = dogName
    this.color = dogColor
    this.size = dogSize
    this.legs = dogLegs
    this.bark = function () {
        console.log('WOOF WOOF')
    }
    this.howl = function () {
        console.log('HOOOOOWOOOOO!!')
    }
    this.attack = function () {
        alert('Grrrrrrrrr%^$#@%$^^&%$rrrrrrrrrr')
    }
}
let Ginger = new dogMaker('schitz szu', 'Ginger', 'brown', 'small', 4)
let brownie = new dogMaker('german sheapard', 'brownie', 'brown and black', 'large',4)


// let dog = {}

// dog.breed = "pitbull"
// dog.color = "gray"
// dog.legs = 4
// dog.name = 'Ginger'
// dog.bark = function() {
//     console.log('WOOOF')
// }
// dog.jump = function() {
//     console.log('BLAST OFF')
// }
// dog.fetch = function() {
//     console.log('ZOOOOOM')
// }

