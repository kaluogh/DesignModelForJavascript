//适配器设计模式
//最常见的电源适配器，为电源规格不同的设配都能充电
//虽然是一种设计方式，平时并不常用于程序结构中，通常通过数据预处理来简单的带到目的

class ICharge{
    charge() {
        throw 'must be implementation'
    }
}

class ACharge extends ICharge{    
    constructor(){
        super()
        this.type = 'A'
    }

    charge() {
        console.log('charging power ... type A')
    }
}

class BCharge extends ICharge{    
    constructor(){
        super()
        this.type = 'B'
    }

    charge() {
        console.log('charging power ... type B')
    }
}

class MultiCharge extends ICharge{
    constructor(chargeArray){
        super()
        this.chargeArray = chargeArray
    }
    charge(type){
        let tempCharge = this.chargeArray.find(item => item.type == type)
        if(tempCharge){
            tempCharge.charge()
        }else{
            console.log('cant\'t charge for this type.')
        }
    }
}

let multiCharge = new MultiCharge([new ACharge(), new BCharge()])
multiCharge.charge('A')
multiCharge.charge('B')
multiCharge.charge('C')