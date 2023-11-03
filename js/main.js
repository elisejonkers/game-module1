let count = 0

class Object {
    constructor() {
        this.width = 13
        this.height = 19
    }
    createObject() {
        this.parentElement = document.getElementById("gameboard")
        this.newObject = document.createElement("div")

        this.newObject.style.width = this.width + 'vw'
        this.newObject.style.height = this.height + 'vh'
        this.newObject.style.left = (Math.random() * (100 - this.width) + 1) + 'vw'
        this.newObject.style.bottom = (Math.random() * (90 - this.height) + 1) + 'vh'

        this.parentElement.appendChild(this.newObject)
    }
}
class Banana extends Object {
    constructor() {
        super();
        this.height = 17
        this.width = 13
        this.alreadyClicked = false
    }
    makeBanana() {
        this.newObject.classList.add("banana")
        this.newObject.style.backgroundColor = 'transparant'
    }
    clickBanana() {
        let scoreBoard = document.getElementById("score")

        this.newObject.addEventListener("click", () => {
            count += 1
            this.newObject.remove()
            scoreBoard.innerHTML = `Score: ${count}`
            this.alreadyClicked = true
        })

    }
    gameOverBanana() {
        if (!this.newObject) {
            return
        }
        this.newObject.classList.add("not-clicked")
        const allNotClicked = document.querySelectorAll(".not-clicked")
        if (allNotClicked.length > 0) {
            location.href = "./gameover.html"
        }
    }
}


class Racoon extends Object {
    constructor() {
        super();
        this.height = 23
        this.width = 13
    }
    makeRacoon() {
        this.newObject.classList.add("racoon")
        this.newObject.style.backgroundColor = 'transparant'
    }
    clickRacoon() {
        const allRacoons = document.querySelectorAll(".racoon")
        allRacoons.forEach(function (object) {
            object.addEventListener("click", function () {
                location.href = "./gameover.html"
            })
        })
    }
    removeRacoon() {
        this.newObject.remove()
    }
}

let bananaArray = []
let intervalTime = 3000; // Initial interval time in milliseconds (5 seconds)
let timer;

function decreaseIntervalTime() {
    clearInterval(timer);

    if (intervalTime <= 1000) {
        intervalTime -= 100
    } else {
        intervalTime -= 1000;
    }

    console.log('Interval time:', intervalTime / 1000, 'seconds');

    timer = setInterval(createBanana, intervalTime);
}

function createBanana() {
    const newBanana = new Banana();
    newBanana.createObject();
    newBanana.makeBanana();
    newBanana.clickBanana();
    bananaArray.push(newBanana);

    setTimeout(() => {
        newBanana.gameOverBanana();
    }, 2000);
}
// Initial timer
timer = setInterval(createBanana, intervalTime);

// Decrease interval time every 10 seconds
setInterval(decreaseIntervalTime, 10000);



function getRandomSeconds(min, max) {
    return (Math.random() * (max - min + 1) + min)
}


function intervalRandomSeconds() {
    const randomSeconds = getRandomSeconds(1000, 15000)
    setTimeout(function () {
        const newRacoon = new Racoon()
        newRacoon.createObject()
        newRacoon.makeRacoon()
        newRacoon.clickRacoon()

        intervalRandomSeconds()
        setTimeout(function () {
            newRacoon.removeRacoon()
        }, 1500)
    }, randomSeconds)
}

intervalRandomSeconds()


const levelBoard = document.getElementById("level")
let level = 0

setInterval(function () {
    level++
    levelBoard.innerHTML = `Level: ${level}`
}, 10000)

//how can I store the final result of line 128 in a variable?





















