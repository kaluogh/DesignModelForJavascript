//工厂设计模式
//制定生产规则
//按照规则设计生产线
//调用生产线得到生产结果

class IShape{
    draw () {
        throw 'must be implementation'
    }
}

class Circle extends IShape{
    constructor(){
        super()
    }

    draw(){
        console.log('This is Circle.')
    }
}

class Rect extends IShape{
    constructor(){
        super()
    }

    draw(){
        console.log('This is Rect.')
    }
}

function getShape(type){
    if(type == Circle.name){
        return new Circle()
    }else if(type == Rect.name){
        return new Rect()
    }else{
        return null
    }
}

let tempCircle = getShape('Circle')
tempCircle.draw()
let tempRect = getShape('Rect')
tempRect.draw()