window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
const myObstacles = [];

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const roadImg = new Image();
roadImg.src = "images/road.png";

const carImg = new Image();
carImg.src = "images/car.png";

let posX = 220;
let posY = 450;

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, 220, 450, 60, 120);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, posX, posY, 60, 120);
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      posX -= 10;
      break;
    case "ArrowRight":
      posX += 10;
      console.log(posX + carImg.width);
      break;
  }
  if (posX < 0) {
    posX = 0;
  } else if (posX > 598 - carImg.width) {
    posX = 598 - carImg.width;
  }
  update();
});

// window.onload = () => {
//   document.getElementById("start-button").onclick = () => {
//     startGame();
//     updateObstacles();
//     randomSize();
//   };

//   const myObstacles = [];
//   const canvas = document.querySelector("#canvas");
//   const ctx = canvas.getContext("2d");
//   let posX = 220;
//   let posY = 450;

//   function startGame() {
//     const roadImg = new Image();
//     roadImg.src = "images/road.png";
//     const carImg = new Image();
//     carImg.src = "images/car.png";

//     roadImg.onload = function () {
//       ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
//       ctx.drawImage(carImg, posX, posY, 60, 120);
//     };

//     document.addEventListener("keydown", (e) => {
//       switch (e.key) {
//         case "ArrowLeft":
//           posX -= 10;

//           break;
//         case "ArrowRight":
//           posX += 10;
//           console.log(posX + carImg.width);
//           break;
//       }
//       if (posX < 0) {
//         posX = 0;
//       } else if (posX > 598 - carImg.width) {
//         posX = 598 - carImg.width;
//       }
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
//       ctx.drawImage(carImg, posX, posY, 60, 120);
//     });
//   }

//   function updateObstacles() {
//     randomSize();
//     ctx.fillStyle = "red";
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   function randomSize() {
//     random = {
//       x: Math.floor(Math.random() * (canvas.width + 1)),
//       y: Math.floor(Math.random() * canvas.height + 1),
//       width: Math.floor(Math.random() * (canvas.width - 158)),
//       height: 20,
//     };
//     console.log(random);
//   }
// };
