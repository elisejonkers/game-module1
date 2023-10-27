class Game {


}

class GreenBox {
    //position, size, functionalities
    constructor() {
        this.width = 15
        this.height = 15
        this.positionX = 50
        this.positionY = 50

        this.parentElement = document.getElementById("gameboard")
        this.newBox = document.createElement("div")
    }
    createBox() {
        this.newBox.classList.add("greenbox")

        this.newBox.style.width = this.width + 'vw'
        this.newBox.style.height = this.height + 'vh'
        this.newBox.style.left = (Math.random() * (100 - this.width) + 1) + 'vw'
        this.newBox.style.bottom = (Math.random() * (100 - this.height) + 1) + 'vh'+
        this.newBox.style.backgroundColor = 'limegreen' // change this when they pop up randomly

        this.parentElement.appendChild(this.newBox)

    //console.log('check creating a abox')
    }
    clickAndRemove() {
        
    }
    
    appearOnScreen() {
        // Even necessary ???

    }
    disappearFromScreen() {
        this.newBox.remove()
    }
}

const box1 = new GreenBox()
box1.createBox()


//box1.disappearFromScreen()


const clickBox = document.querySelector('.greenbox')

clickBox.addEventListener("click", e => {
    clickBox.remove()
})





   
        
        






 
// let button = document.getElementById('add-item-button');
 
// button.onclick = function() {
//   console.log('adding an element to the list');
// };

