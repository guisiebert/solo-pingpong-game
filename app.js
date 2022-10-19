const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let playerY = 200
let score = 0

// Create Map
function drawMap() {
    const wall1 = document.createElement('div')
    wall1.classList.add('wall')
    wall1.style.width = "5px"
    wall1.style.height = "590px"
    wall1.style.right = "5px"
    wall1.style.top = "5px"
    grid.appendChild(wall1)

    const wall2 = document.createElement('div')
    wall2.classList.add('wall')
    wall2.style.width = "790px"
    wall2.style.height = "5px"
    wall2.style.right = "5px"
    wall2.style.top = "5px"
    grid.appendChild(wall2)
    
    const wall3 = document.createElement('div')
    wall3.classList.add('wall')
    wall3.style.width = "790px"
    wall3.style.height = "5px"
    wall3.style.right = "5px"
    wall3.style.bottom = "5px"
    grid.appendChild(wall3)

} drawMap()

// Crate Player
const player = document.createElement('div')
player.classList.add('player')

// Draw Player
function drawPlayer() {
    player.style.top = playerY + "px"
    player.style.left = 
    
    grid.appendChild(player)
}
drawPlayer()

// Move Player
function moveUser(e) {
    switch(e.key) {
        case 'ArrowUp': 
            playerY -= 20
            drawPlayer()
            break

        case 'ArrowDown': 
            playerY += 20
            drawPlayer()
    }
}
document.addEventListener('keydown', moveUser)

// Move Player on Phone
function moveUp() {
    console.log("UP!")
    playerY -= 20
    drawPlayer()
}

function moveDown() {
    console.log("DOWN!")
    playerY += 20
    drawPlayer()
}


// Create Ball
const ball = document.createElement('div')
ball.classList.add('ball')

let posX = 250
let posY = 250
let speedY = 4
let speedX = 4

function drawBall() {

    ball.style.left = posX + "px"
    ball.style.top = posY + "px"

    grid.appendChild(ball)
}
// drawBall()

// Move ball
function moveBall() {
    posX += speedX
    posY += speedY
    // console.log(posY)
    drawBall()

    // Wall Collision Detection
    if (posX > 770) {speedX *= -1}
    if (posY > 570 || posY < 10) {speedY *= -1}

    // Player Collision
    // console.log(playerY)
    if (posX < 70 && posY > playerY && posY < playerY+180) {
        speedX *= -1.05
        speedY *= 1.05
        score += 1
        scoreDisplay.innerHTML = score
    }
    
    // Lose detection
    if (posX < 55) {
        
        scoreDisplay.innerHTML = "YOU LOST. Your score is " + score
        clearInterval(timerID)
    }
}

const timerID = setInterval(moveBall,16)



// Counting points



