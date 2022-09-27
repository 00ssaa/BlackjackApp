let firstCard = getRandomCard() 
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerName = "Samuel"
let playerChips = 145
let playerEl = document.querySelector("#player-el")

playerEl.textContent = playerName + ": $" + playerChips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20) {
        message = "Do You Want To Draw Another Card?"
    }
    else if (sum === 21) {
        message = "You've Got Blackjack"
        hasBlackJack = true
    }
    else {
        message = "You're Out Of The Game"
        isAlive = false
    }
    
    console.log(message)

    messageEl.textContent = message

    sumEl.textContent = "Sum:" + " " + sum

    cardsEl.textContent = "Cards:" + " "

    for( i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing A New Card")
        let thirdCard = getRandomCard()
        sum += thirdCard 
        cards.push(getRandomCard())
        renderGame()
    }
    
    
}
















// // 2. Create the player object. Give it two keys, name and chips, and set their values
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// // 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

// // 4. Render the player's name and chips in playerEl

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()*13 ) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
    
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }


// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()        
//     }
// }
