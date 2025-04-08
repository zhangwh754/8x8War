import { FC } from "react";

interface UnitInfoProps {
  name: string;
  speed: number;
  weaponCount?: number;
  image: string;
  weaponImage?: string;
}

const UnitInfo: FC<UnitInfoProps> = ({
  name,
  speed,
  // weaponCount,
  // image,
  // weaponImage,
}) => {
  return (
    <div className="absolute left-1 bottom-1 select-none">
      {/* 单位基础信息 */}
      <div className="flex items-center">
        <div className="px-4 text-white bg-[#100f19] border border-[#5a607c]">
          {name}
        </div>

        <div className="ml-2 bg-[#008e26]">{speed}</div>
      </div>
    </div>
  );
};

export default UnitInfo;
