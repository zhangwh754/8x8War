class Unit {
  constructor(
    public x: number,
    public y: number,
    public name: string,
    public health: number,
    public speed: number,
    public image: HTMLImageElement,
    public imageSize: number = 100
  ) {}

  render() {}

  // 基础单位方法
  takeDamage(amount: number): void {
    this.health = Math.max(0, this.health - amount);
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}

class PartyMember extends Unit {
  public damage: number;

  constructor(
    x: number,
    y: number,
    name: string,
    imageSrc: string,
    health: number = 3,
    speed: number = 3,
    damage: number = 1
  ) {
    const image = new Image();
    image.src = imageSrc;

    super(x, y, name, health, speed, image);

    this.image = image;
    this.damage = damage;
  }

  attack(target: Unit): void {
    target.takeDamage(this.damage);
  }
}

class Enemy extends Unit {
  public damage: number;

  constructor(
    x: number,
    y: number,
    name: string,
    imageSrc: string,
    health: number = 3,
    speed: number = 3,
    damage: number = 1
  ) {
    const image = new Image();
    image.src = imageSrc;

    super(x, y, name, health, speed, image);

    this.image = image;
    this.damage = damage;
  }

  attack(target: Unit): void {
    target.takeDamage(this.damage);
  }
}

export { Unit, PartyMember, Enemy };
