// 瓦片类

class TileManager {
  ctx: CanvasRenderingContext2D;
  tileWidth: number;
  tileHeight: number;
  x: number;
  y: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    x: number,
    y: number
  ) {
    this.ctx = ctx;
    this.tileWidth = width;
    this.tileHeight = height;
    this.x = x;
    this.y = y;
  }

  // 绘制单个瓦片
  render(canvasWidth: number, canvasHeight: number) {
    const pos = this.toIso(this.x, this.y, canvasWidth, canvasHeight);
    // 绘制矩形瓦片
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
    this.ctx.lineTo(pos.x + this.tileWidth / 2, pos.y + this.tileHeight / 2);
    this.ctx.lineTo(pos.x, pos.y + this.tileHeight);
    this.ctx.lineTo(pos.x - this.tileWidth / 2, pos.y + this.tileHeight / 2);
    this.ctx.closePath();
    this.ctx.fillStyle = "#ccc";

    this.ctx.fill();
    this.ctx.strokeStyle = "#000";
    this.ctx.stroke();
  }

  // 转换坐标为等距坐标
  toIso(x: number, y: number, canvasWidth: number, canvasHeight: number) {
    return {
      x: ((x - y) * this.tileWidth) / 2 + canvasWidth / 2,
      y: ((x + y) * this.tileHeight) / 2 + canvasHeight / 4,
    };
  }
}

export default TileManager;
