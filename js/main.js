let count = 0


class Box {
    constructor() {
        this.width = 15
        this.height = 15
    }
    createBox() {
        this.parentElement = document.getElementById("gameboard")
        this.newBox = document.createElement("div")

        this.newBox.style.width = this.width + 'vw'
        this.newBox.style.height = this.height + 'vh'
        this.newBox.style.left = (Math.random() * (100 - this.width) + 1) + 'vw'
        this.newBox.style.bottom = (Math.random() * (90 - this.height) + 1) + 'vh'

        this.parentElement.appendChild(this.newBox)
    }
}


class Green extends Box {
    makeBoxGreen() {
        this.newBox.classList.add("greenbox")
        this.newBox.classList.add("not-clicked")
        this.newBox.style.backgroundColor = 'limegreen'
    }
    clickGreen() {
        const allGreenBoxes = document.querySelectorAll(".greenbox")
        let scoreBoard = document.getElementById("score")

        allGreenBoxes.forEach((box) => {
            box.addEventListener("click", () => {
                count += 1
                box.remove()
                scoreBoard.innerHTML = `Score: ${count}`
            })

        })
    }
    gameOverGreen() {
        const allNotClicked = document.querySelectorAll(".not-clicked")
        if (allNotClicked.length > 0) {
            location.href = "./gameover.html"
        }
    }
}


class Red extends Box {
    makeBoxRed() {
        this.newBox.classList.add("redbox")
        this.newBox.style.backgroundColor = 'red'
    }
    clickRed() {
        const allRedBoxes = document.querySelectorAll(".redbox")
        allRedBoxes.forEach(function (box) {
            box.addEventListener("click", function () {
                location.href = "./gameover.html"
            })
        })
    }
    removeRed() {
        this.newBox.remove()
    }
}

const greenbox1 = new Green()
const redbox1 = new Red()
greenbox1.createBox()
greenbox1.makeBoxGreen()
redbox1.createBox()
redbox1.makeBoxRed()


// let secondsDelay = 2400

// function decreaseDelaySeconds() {
//     setInterval(function () {
//         return secondsDelay -= 200
//     }, 10000)
// }


// setInterval(function () {
//     const startGameGreen = new Green()
//     startGameGreen.createBox()
//     startGameGreen.makeBoxGreen()
//     startGameGreen.clickGreen()

//     setTimeout(function () {
//         startGameGreen.gameOverGreen()
//     }, secondsDelay)
// }, 2500)


// function getRandomSeconds(min, max) {
//     return (Math.random() * (max - min + 1) + min)
// }


// function intervalRandomSeconds() {
//     const randomSeconds = getRandomSeconds(1000, 15000)
//     setTimeout(function () {
//         const startGameRed = new Red()
//         startGameRed.createBox()
//         startGameRed.makeBoxRed()
//         startGameRed.clickRed()

//         intervalRandomSeconds()
//         setTimeout(function () {
//             startGameRed.removeRed()
//         }, 2000)
//     }, randomSeconds)
// }


// intervalRandomSeconds()
// decreaseDelaySeconds()


// const levelBoard = document.getElementById("level")
// let level = 0

// setInterval(function () {
//     level++
//     levelBoard.innerHTML = `Level: ${level}`
// }, 10000)










