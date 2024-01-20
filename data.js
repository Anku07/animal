class Animal{
    constructor(species,sound){
        this.animalSpecies = species,
        this.animalSound = sound
    }
    MakeSound(){
        return{
            Name : this.animalSpecies,
            sound : this.sound
        }
    }
}
class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound)
        this.animalColor = color
    }
    MakeSound(){
        return{
            Name: this.animalSpecies,
            Sound : this.animalSound,
            Color: this.animalColor
        }
    }
}
export {Animal, Dog}