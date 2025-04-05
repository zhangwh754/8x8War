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

    this.tileWidth = width / this.gridSize; // 瓦片宽度
    this.tileHeight = height / this.gridSize; // 瓦片高度

    this.render();
  }

  render() {
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        const x = i * this.tileWidth;
        const y = j * this.tileHeight;

        this.drawTile(x, y);
      }
    }
  }

  // 绘制单个瓦片
  drawTile(x: number, y: number) {
    // 绘制矩形瓦片
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    this.ctx.fillRect(x, y, this.tileWidth, this.tileHeight);

    // 绘制网格线
    this.ctx.beginPath();
    this.ctx.moveTo(x, 0);
    this.ctx.lineTo(x, this.canvasHeight);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(0, y);
    this.ctx.lineTo(this.canvasWidth, y);
    this.ctx.stroke();
  }
}

export default MapManager;
