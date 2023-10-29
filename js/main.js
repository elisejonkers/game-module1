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
    clickAndRemove() {
        const allGreenBoxes = document.querySelectorAll(".greenbox") // creates an array
        const allNotClicked = document.querySelectorAll(".not-clicked")
        console.log(allNotClicked)
        allGreenBoxes.forEach(function (box) {
            box.addEventListener("click", function () {
                box.style.display = "none"
                box.remove()
            })
        })
    }
    disappearFromScreen() {
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
}

const boxArray = [] // do I need this one?
const box1 = new Game()
// const box2 = new Game()
const redBox1 = new Redbox()
redBox1.createRedBox()
box1.createGreenBox()

setInterval(function(){
    const nextBox = new Game()
    nextBox.createGreenBox()
    nextBox.clickAndRemove()
    setTimeout(function(){
        nextBox.disappearFromScreen()
    },2400)
}, 2500) 






   
        
        






 
// let button = document.getElementById('add-item-button');
 
// button.onclick = function() {
//   console.log('adding an element to the list');
// };

