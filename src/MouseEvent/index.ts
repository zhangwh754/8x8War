export type TileCoord = {
  x: number;
  y: number;
} | null;

class MouseEvent {
  canvas: HTMLCanvasElement;
  gridSize: number;
  tileWidth: number;
  tileHeight: number;

  hoveredTile: TileCoord | null;
  selectedTile: TileCoord | null;

  constructor(
    canvas: HTMLCanvasElement,
    gridSize: number,
    tileWidth: number,
    tileHeight: number
  ) {
    this.canvas = canvas;
    this.gridSize = gridSize;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;

    this.hoveredTile = null;
    this.selectedTile = null;

    this.init();
  }

  init() {
    this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

  handleMouseMove(event: globalThis.MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const tile = this.screenToIso(mouseX, mouseY);

    if (
      tile.x >= 0 &&
      tile.x < this.gridSize &&
      tile.y >= 0 &&
      tile.y < this.gridSize
    ) {
      this.hoveredTile = tile;
    } else {
      this.hoveredTile = null;
    }
  }

  handleClick() {
    if (this.hoveredTile) {
      console.log(this.hoveredTile);

      this.selectedTile = this.hoveredTile;
    }
  }

  // 将屏幕坐标转换为等距网格坐标
  screenToIso(mouseX: number, mouseY: number) {
    // 调整为相对画布中心的坐标
    const x = mouseX - this.canvas.width / 2;
    const y = mouseY - this.canvas.height / 4;

    // 等距坐标转换，考虑瓦片的宽高比
    const gridX = Math.floor(
      (x / (this.tileWidth / 2) + y / (this.tileHeight / 2)) / 2
    );
    const gridY = Math.floor(
      (y / (this.tileHeight / 2) - x / (this.tileWidth / 2)) / 2
    );

    return { x: gridX, y: gridY };
  }
}

export default MouseEvent;
