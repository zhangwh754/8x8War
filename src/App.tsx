import { useEffect, useRef } from "react";
import MapManager from "./MapManager";
import GameLayout from "./Layout/GameLayout";

const canvasWidth = 800;
const canvasHeight = 800;

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    // 设置画布大小
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 初始化游戏
    console.log("游戏开始");
    new MapManager(canvas, ctx, canvasWidth, canvasHeight);
  }, []);

  return (
    <GameLayout>
      <canvas ref={canvasRef} id="gameCanvas" />;
    </GameLayout>
  );
}
