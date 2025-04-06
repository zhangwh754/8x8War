/**
 * @description: 敌人
 * 敌人1-史莱姆
 * 敌人2-哥布林
 * 敌人3-狼
 * 敌人4-蜜蜂
 */

import { Enemy } from "./unit";
import Enemy1Walk from "/enemy/1_walk.png";
import Enemy2Walk from "/enemy/2_walk.png";
import Enemy3Walk from "/enemy/3_walk.png";
import Enemy4Walk from "/enemy/4_walk.png";

import { PartyMember } from "./unit";
import Partner1Walk from "/partner/1_walk.png";
import Partner2Walk from "/partner/2_walk.png";
import Partner3Walk from "/partner/3_walk.png";

export const currentEnemy = [
  new Enemy(0, 0, "敌人1", Enemy1Walk, 2, 2, 1),
  new Enemy(0, 2, "敌人2", Enemy2Walk, 3, 2, 2),
  new Enemy(1, 3, "敌人3", Enemy3Walk, 3, 3, 2),
  new Enemy(6, 6, "敌人4", Enemy4Walk, 2, 3, 2),
];

export const currentPartner = [
  new PartyMember(3, 3, "伙伴1", Partner1Walk, 2, 3, 2),
  new PartyMember(2, 4, "伙伴2", Partner2Walk, 2, 3, 2),
  new PartyMember(5, 6, "伙伴3", Partner3Walk, 2, 3, 2),
];
