//array for all pets
let allPets = [];

//construct pet object

function CreatePet(theName, theEnergy, theHappines, theHunger){
    this.name = theName,
    this.energy = theEnergy,
    this.happiness = theHappines,
    this.hunger = theHunger,
    this.image = `images/${this.name}/idle.png`
    this.feed = function(){
        this.hunger = Math.max(this.hunger - 20, 0); //max will always give us the larger value
        this.energy = Math.max(this.energy - 10, 0); //max will always give us the larger value
        this.image = `images/${this.name}/eat.png`;
        updatePetInfo(this);
    }
    this.play = function () {
        this.hunger = Math.min(this.hunger + 10, 100); //min will always give us the smaller value
        this.energy = Math.max(this.energy - 20, 0); //max will always give us the larger value
        this.happiness = Math.min(this.happiness + 10, 100);
        this.image = `images/${this.name}/play.png`;
        updatePetInfo(this);
    }

    this.sleep = function () {
        this.hunger = Math.min(this.hunger + 20, 100); //min will always give us the smaller value
        this.energy = 100; //sleeping always restores full energy
        this.image = `images/${this.name}/sleep.png`;
        updatePetInfo(this);
    }

    allPets.push(this);
} //closes CreatePet



//Creating pets
const pet1 = new CreatePet("Fido", 50, 30, 30);
const pet2 = new CreatePet("Mopsy", 90, 90, 80);



let currentPet = pet2;

//initial update
updatePetInfo(currentPet);

function switchPet(petName){
    currentPet = petName === 'Fido' ? pet1 : pet2; //If Fido is passed in to switchPet, change current pet to pet1, else to pet2
    updatePetInfo(currentPet);
}

function updatePetInfo(pet){
    document.getElementById("petName").textContent = pet.name;
    document.getElementById("petEnergy").textContent = pet.energy;
    document.getElementById("petHappiness").textContent = pet.happiness;
    document.getElementById("petHunger").textContent = pet.hunger;
    document.getElementById("petImage").src = pet.image;
     
}

//event listeners for the buttons
document.getElementById("feedButton").addEventListener("click", function(){
    currentPet.feed();
})
document.getElementById("playButton").addEventListener("click", function () {
    currentPet.play();
})
document.getElementById("sleepButton").addEventListener("click", function () {
    currentPet.sleep();
})

function regularUpdate(){

    allPets.forEach(function(pet){
        pet.energy = Math.max(pet.energy-1, 0);
        pet.happiness = Math.max(pet.happiness - 1, 0);
        pet.hunger = Math.min(pet.hunger + 1, 100);
    })

    updatePetInfo(currentPet);

}

//every second, call the regular update function
setInterval(regularUpdate, 1000);

