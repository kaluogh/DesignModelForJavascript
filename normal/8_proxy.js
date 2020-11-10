//代理设计模式
//作为卖家不具备物流送货的能力，但是可以通过联系物流公司来帮忙完成送货任务
//本身不具备某种能力，但可以委托的方式来实现，让委托来代替自身缺少的功能

class IDelegate{
    constructor(name){
        this.name = name
    }

    getName () {
        return this.name
    }

    deliver (goods, destination) {
        throw 'must be implementation'
    }
}

class Delegate extends IDelegate{
    constructor(name){
        super(name)
    }

    deliver (goods, destination) {
        console.log(`Express ${goods} to ${destination} By Delegate ${this.name}.`)
    }
}

const delegateA = new Delegate('A')
const delegateB = new Delegate('B')

class Shop{
    constructor(name, delegate){
        this.name = name
        this.delegate = delegate
    }

    deliver(goods, destination){
        this.delegate.deliver(goods, destination)
    }    
}

const shop1 = new Shop('Shop1', delegateA)
const shop2 = new Shop('Shop2', delegateB)
shop1.deliver('goods1', 'dest1')
shop2.deliver('goods2', 'dest2')