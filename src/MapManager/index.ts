import TileManager from "../TileManager";

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
        const tile = new TileManager(
          this.ctx,
          this.tileWidth,
          this.tileHeight,
          x,
          y
        );

        tile.render(this.canvasWidth, this.canvasHeight);
      }
    }
  }
}

export default MapManager;
