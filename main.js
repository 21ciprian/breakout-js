console.log('linked')
const canvas = document.querySelector('#breakout')
const ctx = canvas.getContext('2d')
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 1
let dy = -1
let ballRadius = 5
function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.closePath()

}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  x += dx
  y += dy
}


setInterval(draw, 10)