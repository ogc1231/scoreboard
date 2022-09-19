let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function add1PointHome() {
    console.log("click")
    homeCount += 1
    homeScore.innerText = homeCount
}

function add2PointHome() {
    console.log("click")
    homeCount += 2
    homeScore.innerText = homeCount
}

function add3PointHome() {
    console.log("click")
    homeCount += 3
    homeScore.innerText = homeCount
}

function add1PointGuest() {
    console.log("click")
    guestCount += 1
    guestScore.innerText = guestCount
}

function add2PointGuest() {
    console.log("click")
    guestCount += 2
    guestScore.innerText = guestCount
}

function add3PointGuest() {
    console.log("click")
    guestCount += 3
    guestScore.innerText = guestCount
}
