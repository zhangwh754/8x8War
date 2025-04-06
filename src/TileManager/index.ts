import { TileCoord } from "../MouseEvent";
import { currentEnemy, currentPartner } from "../UnitManager";

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
  renderFloor(
    canvasWidth: number,
    canvasHeight: number,
    isHovered = false,
    isSelected = false
  ) {
    const pos = this.toIso(this.x, this.y, canvasWidth, canvasHeight);
    // 绘制矩形瓦片
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
    this.ctx.lineTo(pos.x + this.tileWidth / 2, pos.y + this.tileHeight / 2);
    this.ctx.lineTo(pos.x, pos.y + this.tileHeight);
    this.ctx.lineTo(pos.x - this.tileWidth / 2, pos.y + this.tileHeight / 2);
    this.ctx.closePath();

    // 根据状态设置颜色
    if (isSelected) {
      this.ctx.fillStyle = "#4CAF50";
    } else if (isHovered) {
      this.ctx.fillStyle = "#81C784";
    } else {
      this.ctx.fillStyle = "#ccc";
    }

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

  checkStatus(hoveredTile: TileCoord, selectedTile: TileCoord) {
    const isHovered = hoveredTile?.x === this.x && hoveredTile?.y === this.y;
    const isSelected = selectedTile?.x === this.x && selectedTile?.y === this.y;

    return {
      isHovered,
      isSelected,
    };
  }

  renderUnit(canvasWidth: number, canvasHeight: number) {
    this.renderEnemy(canvasWidth, canvasHeight);
    this.renderPartner(canvasWidth, canvasHeight);
  }

  renderEnemy(canvasWidth: number, canvasHeight: number) {
    const enemy =
      currentEnemy.find((enemy) => this.x === enemy.x && this.y === enemy.y) ||
      null;

    if (enemy) {
      const pos = this.toIso(this.x, this.y, canvasWidth, canvasHeight);

      // 计算当前应该显示的帧
      const frameWidth = 48; // 单帧宽度
      const frameHeight = 48; // 帧高度
      const totalFrames = 6; // 总帧数
      const frameIndex = Math.floor(Date.now() / 200) % totalFrames; // 每200ms切换一帧

      this.ctx.drawImage(
        enemy.image,
        frameIndex * frameWidth, // 源图片裁剪起点x
        0, // 源图片裁剪起点y
        frameWidth, // 源图片裁剪宽度
        frameHeight, // 源图片裁剪高度
        pos.x - enemy.imageSize / 2, // 目标位置x
        pos.y - enemy.imageSize / 2 + 20, // 目标位置y
        enemy.imageSize, // 目标宽度
        enemy.imageSize // 目标高度
      );
    }

    return enemy;
  }

  renderPartner(canvasWidth: number, canvasHeight: number) {
    const partner =
      currentPartner.find(
        (partner) => this.x === partner.x && this.y === partner.y
      ) || null;

    if (partner) {
      const pos = this.toIso(this.x, this.y, canvasWidth, canvasHeight);

      // 计算当前应该显示的帧
      const frameWidth = 48; // 单帧宽度
      const frameHeight = 48; // 帧高度
      const totalFrames = 6; // 总帧数
      const frameIndex = Math.floor(Date.now() / 200) % totalFrames; // 每200ms切换一帧

      this.ctx.drawImage(
        partner.image,
        frameIndex * frameWidth, // 源图片裁剪起点x
        0, // 源图片裁剪起点y
        frameWidth, // 源图片裁剪宽度
        frameHeight, // 源图片裁剪高度
        pos.x - partner.imageSize / 2 + 15, // 目标位置x
        pos.y - partner.imageSize / 2, // 目标位置y
        partner.imageSize, // 目标宽度
        partner.imageSize // 目标高度
      );
    }

    return partner;
  }
}

export default TileManager;
