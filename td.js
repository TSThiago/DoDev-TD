class Tower {
    #Name;
    #Power;
    #Range;
    #Level;
    #Price;
    constructor(name, power, range, level, price) {
        this.#Name = name;
        this.#Power = power;
        this.#Range = range;
        this.#Level = level;
        this.#Price = price;
    }
    setName(name) {
        this.#Name = name;
    }
    getName() {
        return this.#Name;
    }
    setPower(power) {
        this.#Power = power;
    }
    getPower() {
        return this.#Power;
    }
    setRange(range) {
        this.#Range = range;
    }
    getRange() {
        return this.#Range;
    }
    setLevel(level) {
        this.#Level = level;
    }
    getLevel() {
        return this.#Level;
    }
    setPrice(price) {
        this.#Price = price;
    }
    getPrice() {
        return this.#Price;
    }
    Attack() {
        return this.#Power;
    }
}
class Enemy {
    #Name;
    #HealthPoints;
    constructor(name, HP) {
        this.#Name = name;
        this.#HealthPoints = HP;
    }
    setName(name) {
        this.#Name = name;
    }
    getName() {
        return this.#Name;
    }
    setHealthPoints(HP) {
        this.#HealthPoints = HP;
    }
    getHealthPoints() {
        return this.#HealthPoints;
    }
    TakeDamage(damage) {
        this.setHealthPoints(this.getHealthPoints() - damage);
        return;
    }
}
const arrayTower = new Array(10);
const arrayEnemy = new Array(10);
let Tower1 = new Tower("A", 3, 1, 1, 5);
let Enemy1 = new Enemy("Goblin", 12);
PutTower(Tower1, 11);
console.log(arrayTower);
function PutTower(tower, position) {
    if (position < 1 || position > 10) {
        console.log("Número da casa inválida!");
        return;
    }
    else {
        arrayTower[position - 1] = tower;
        return;
    }
}
