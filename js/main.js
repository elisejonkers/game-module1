/*class Game {


}*/

class GreenBox {
    //position, size, functionalities
    constructor() {
        this.width = 15
        this.height = 15
        /*  this.positionX = 50
            this.positionY = 50 are these really necessary? */

        this.parentElement = document.getElementById("gameboard")
        this.newBox = document.createElement("div")
    }
    createBox() {
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
                box.classList.remove("not-clicked")
                
                //box.remove()

                // new class
                // when clickd, push into new array



                //box.classList.add("box-clicked") // check of dit nodig is!!!
                //console.log('click here')
            })
        })
    }
    disappearFromScreen() {
        // hier moet komen: als na 2,5 seconden de box not steeds not-clicked heeft --> naar array
        // als array.length>0, dan is het game over
        const allNotClicked = document.querySelectorAll(".not-clicked")
        if (allNotClicked.length > 0) {
            //console.log('game-over')
            location.href = "./gameover.html"
        }


        
        
        //this.newBox.remove() // deze aanpassen --> de box hoeft niet te worden verwijderd, het is game over na deze tijd
        //const classClickedArray = document.querySelectorAll("div")
        // //console.log("check")

        // if (classClickedArray.classList.contains("box-clicked")){
        //     console.log('check')
        // }
        
        
        
    }
}

const boxArray = [] // do I need this one?
// const box1 = new GreenBox()
// const box2 = new GreenBox()
// box1.createBox()
// box2.createBox()

setInterval(function(){
    const nextBox = new GreenBox()
    nextBox.createBox()
    nextBox.clickAndRemove()
    setTimeout(function(){
        nextBox.disappearFromScreen()
    },1800)
}, 2000) 



// BOX KRIJGT DISPLAY NONE, MAAR IS NOG NIET VERWIJDERD!!!




   
        
        






 
// let button = document.getElementById('add-item-button');
 
// button.onclick = function() {
//   console.log('adding an element to the list');
// };

