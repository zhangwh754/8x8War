class MapManager {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  gridSize: number;
  tileWidth: number;
  tileHeight: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.canvasWidth = width;
    this.canvasHeight = height;

    this.gridSize = 8; // 网格个数
    this.tileWidth = 100; // 瓦片宽度
    this.tileHeight = 64; // 瓦片高度

    this.render();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // 从后向前绘制瓦片，确保正确的重叠顺序
    for (let y = 0; y < this.gridSize; y++) {
      for (let x = 0; x < this.gridSize; x++) {
        this.drawTile(x, y);
      }
    }
  }

  // 转换坐标为等距坐标
  toIso(x: number, y: number) {
    return {
      x: ((x - y) * this.tileWidth) / 2 + this.canvasWidth / 2,
      y: ((x + y) * this.tileHeight) / 2 + this.canvasHeight / 4,
    };
  }

  // 绘制单个瓦片
  drawTile(x: number, y: number) {
    const pos = this.toIso(x, y);
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
}

export default MapManager;
