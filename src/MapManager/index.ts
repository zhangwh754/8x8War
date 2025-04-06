import TileManager from "../TileManager";
import MouseEvent from "../MouseEvent";

class MapManager {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;

  gridSize: number;
  tileWidth: number;
  tileHeight: number;

  tiles: TileManager[]; // 存储所有的瓦片
  hoverTile: TileManager | null; // 覆盖的瓦片
  activeTile: TileManager | null; // 激活的瓦片

  private mouseEvent: MouseEvent;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvasWidth = width;
    this.canvasHeight = height;

    this.gridSize = 8; // 网格个数
    this.tileWidth = 100; // 瓦片宽度
    this.tileHeight = 64; // 瓦片高度

    this.tiles = [];
    this.hoverTile = null;
    this.activeTile = null;

    this.mouseEvent = new MouseEvent(
      this.canvas,
      this.gridSize,
      this.tileWidth,
      this.tileHeight
    );

    this.init();
  }

  init() {
    this.gameLoop();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    const { hoveredTile, selectedTile } = this.mouseEvent;

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

        const { isHovered, isSelected } = tile.checkStatus(
          hoveredTile,
          selectedTile
        );

        this.tiles.push(tile);

        tile.renderFloor(
          this.canvasWidth,
          this.canvasHeight,
          isHovered,
          isSelected
        );
        tile.renderUnit(this.canvasWidth, this.canvasHeight);
      }
    }
  }

  gameLoop() {
    // 清空画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 渲染游戏画面
    this.render();

    // 继续下一帧
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

export default MapManager;
