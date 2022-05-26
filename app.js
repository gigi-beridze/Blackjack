let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber;
    }
}
function startgame(){
    if(isAlive === false){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        sum = firstCard + secondCard
        isAlive = true;
        renderGame();
    }
}
function renderGame(){
    document.getElementById("cards-el").textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        document.getElementById("cards-el").textContent += cards[i] + " "
    }
    document.getElementById("sum-el").textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }else if (sum===21){
        message = "Wohoo! You've got Blackjack  !"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("massage-el").textContent = message;
}
function newcard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card  
        cards.push(card)
        renderGame();
    }
}