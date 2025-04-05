import MapManager from "./MapManager";
import "./style.css";

const canvasWidth = 800;
const canvasHeight = 800;

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;

    // 设置画布大小
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
  }

  start() {
    console.log("游戏开始");
    new MapManager(this.canvas, this.ctx, canvasWidth, canvasHeight);
  }
}

window.addEventListener("load", () => {
  const game = new Game();
  game.start();
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <canvas id="gameCanvas"></canvas>
`;
