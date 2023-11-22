//construct pet object

function createPet(theName, theEnergy, theHappines, theHunger, theImage){
    this.name = theName,
    this.energy = theEnergy,
    this.happiness = theHappines,
    this.hunger = theHunger,
    this.image = theImage
    this.feed = function(){
        this.hunger = Math.max(this.hunger - 20, 0); //max will always give us the larger value
        this.hunger = Math.max(this.energy - 10, 0); //max will always give us the larger value
        this.image = `images/${this.name}/eat.png`;
        updatePetInfo(this);
    }

}