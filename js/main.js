class Game {
    constructor() {
        this.width = 15
        this.height = 15

        this.parentElement = document.getElementById("gameboard")
        this.newBox = document.createElement("div")
    }
    createGreenBox() {
        this.newBox.classList.add("greenbox")
        this.newBox.classList.add("not-clicked")

        this.newBox.style.width = this.width + 'vw'
        this.newBox.style.height = this.height + 'vh'
        this.newBox.style.left = (Math.random() * (100 - this.width) + 1) + 'vw'
        this.newBox.style.bottom = (Math.random() * (100 - this.height) + 1) + 'vh'
        this.newBox.style.backgroundColor = 'limegreen' // change this when they pop up randomly

        this.parentElement.appendChild(this.newBox)
    }
    clickGreen() {
        const allGreenBoxes = document.querySelectorAll(".greenbox") // creates an array
        //const allNotClicked = document.querySelectorAll(".not-clicked")
        allGreenBoxes.forEach(function (box) {
            box.addEventListener("click", function () {
                box.style.display = "none"
                box.remove()
            })
        })
    }
    gameOverFunction() {
        const allNotClicked = document.querySelectorAll(".not-clicked")
        if (allNotClicked.length > 0) {
            location.href = "./gameover.html"
        }
    }
}

class Redbox {
    constructor() {
        this.width = 15
        this.height = 15

        this.parentElement = document.getElementById("gameboard")
        this.newBox = document.createElement("div")
    }
    createRedBox() {
        this.newBox.classList.add("redbox")

        this.newBox.style.width = this.width + 'vw'
        this.newBox.style.height = this.height + 'vh'
        this.newBox.style.left = (Math.random() * (100 - this.width) + 1) + 'vw'
        this.newBox.style.bottom = (Math.random() * (100 - this.height) + 1) + 'vh'
        this.newBox.style.backgroundColor = 'red' // change this when they pop up randomly

        this.parentElement.appendChild(this.newBox)
    }
    clickRed () {
        const allRedBoxes = document.querySelectorAll(".redbox") // creates an array
        allRedBoxes.forEach(function (box) {
            box.addEventListener("click", function () {
                //console.log('this is a click on a red box')
                location.href = "./gameover.html"
            })
        })
    }
}

const boxArray = [] // do I need this one?
const box1 = new Game()
// const box2 = new Game()
const redBox1 = new Redbox()
redBox1.createRedBox()
redBox1.clickRed()
//box1.createGreenBox()

setInterval(function(){
    const startGame = new Game()
    startGame.createGreenBox()
    startGame.clickGreen()
    setTimeout(function(){
        startGame.gameOverFunction()
    },2400)
}, 2500) 

// De interval moet gaan kiezen tussen rood of groen
// Wellicht random nummer kiezen, indien < 0,5 rood en indien > 0,5 groen
// Code verkorten: maak een game class, extend met groen en rood --> functie van een box aanmaken in de game, extend rood en extend groen met de specifieke functies