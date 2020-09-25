//建造者设计模式
//建造一个房子，需要leader带很多个member来完成，leader分配任务给member,member完成被分配的任务，最终得到一个完整的房子完成交付

class IHouse{
    getBuilding() {
        throw 'must be implementation'
    }
    getGarden() {
        throw 'must be implementation'
    }
}

class Building{
    constructor(name){
        this.name = name
    }

    toString(){
        return this.name
    }
}
class Garden{
    constructor(name){
        this.name = name
    }

    toString(){
        return this.name
    }
}

class House extends IHouse{
    constructor(building, garden){
        super()
        this.building = building
        this.garden = garden
    }

    getBuilding(){
        return this.building
    }

    getGarden(){
        return this.garden
    }
}

function getHouse(buildingType, gardenType){
    //建造建筑
    let tempBuilding = new Building(buildingType)
    //建造园子
    let tempGarden = new Building(gardenType)
    //交付这个房子
    return new House(tempBuilding, tempGarden)
}

let tempHouse = getHouse('myBuilding', 'myGarden')
console.log(tempHouse.getBuilding().toString())
console.log(tempHouse.getGarden().toString())