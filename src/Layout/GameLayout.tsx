import { ReactNode } from "react";
import UnitInfo from "../components/UnitInfo";

interface GameLayoutProps {
  children: ReactNode;
}

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <div>
      <UnitInfo
        name="阿凯夫坦克"
        speed={4}
        image="/units/tank_preview.png"
        weaponImage="/weapons/cannon.png"
        weaponCount={1}
      />

      {children}
    </div>
  );
}
