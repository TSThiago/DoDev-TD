class Tower{
    #Name : string
    #Power : number
    #Range : number
    #Level : number
    #Price : number

    constructor(name : string, power : number, range : number, level: number, price : number){
        this.#Name = name
        this.#Power = power
        this.#Range = range
        this.#Level = level
        this.#Price = price
    }
    setName(name : string) : void{
        this.#Name = name
    }
    getName() : string{
        return this.#Name
    }

    setPower(power : number) : void{
        this.#Power = power
    }
    getPower() : number{
        return this.#Power
    }

    setRange(range : number) : void{
        this.#Range = range
    }
    getRange() : number{
        return this.#Range
    }
    
    setLevel(level : number) : void{
        this.#Level = level
    }
    getLevel() : number{
        return this.#Level
    }

    setPrice(price : number) : void{
        this.#Price = price
    }
    getPrice() : number{
        return this.#Price
    }

    Attack() : number{
        return this.#Power
    }
}

class Enemy{
    #Name : string
    #HealthPoints : number

    constructor(name : string, HP : number){
        this.#Name = name
        this.#HealthPoints = HP
    }

    setName(name : string) : void{
        this.#Name = name
    }
    getName() : string{
        return this.#Name
    }

    setHealthPoints(HP : number) : void{
        this.#HealthPoints = HP
    }
    getHealthPoints() : number{
        return this.#HealthPoints
    }
    
    TakeDamage(damage : number) : void{
        this.setHealthPoints(this.getHealthPoints() - damage)
        return
    }
}

let Tower1 = new Tower("A",3,1,1,5)
let Enemy1 = new Enemy("Goblin",12)

while(Enemy1.getHealthPoints() > 0){
    Enemy1.TakeDamage(Tower1.Attack())
    console.log(Enemy1.getHealthPoints())
}
