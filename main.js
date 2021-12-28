console.log('linked')
const canvas = document.querySelector('#breakout')
const ctx = canvas.getContext('2d')
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 1
let dy = -1
let ballRadius = 5
const paddleHeight = 5
const paddleWidth = 60
let paddleX = (canvas.width - paddleWidth) / 2
let rightPressed = false
let leftPressed = false
document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)
//Create ball
function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.closePath()

}
//Create paddle to bounce the ball
function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.closePath()
}
function keyDownHandler(event) {
  if (event.key == 'Right' || event.key == 'ArrowRight') {
    rightPressed = true
  }
  else if (event.key == 'Left' || event.key == 'ArrowLeft') {
    leftPressed = true
  }
}
function keyUpHandler(event) {
  if (event.key == 'Right' || event.key == 'ArrowRight') {
    rightPressed = false
  }
  else if (event.key == 'Left' || event.key == 'ArrowLeft') {
    leftPressed = false
  }
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  if (rightPressed) {
    paddleX += 3;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }
  else if (leftPressed) {
    paddleX -= 3;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
  x += dx
  y += dy
}


setInterval(draw, 10)