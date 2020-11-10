// 责任链式设计模式
// 用来连接一连串的处理任务，页可以将复杂的任务分解为多个处理任务，可以灵活的添加、修改、删除其中的处理任务
// 组合处理任务，构建责任链

class IResponsibility{
    constructor(nextResponsibility){
        this.nextResponsibility = nextResponsibility
    }

    resp(){
        throw 'must be implementation'
    }

    nextResp(result){
        if(this.nextResponsibility){
            return this.nextResponsibility.resp(result)
        }else{
            return result
        }
    }
}

class ResponsibilityA extends IResponsibility{
    
    constructor(nextResponsibility){
        super(nextResponsibility)
    }

    resp(value){
        // complete current task
        let result =  value + ' - ResponsibilityA Progressed'
        // transfer task to next or return value
        return this.nextResp(result)
    }
}

class ResponsibilityB extends IResponsibility{
    constructor(nextResponsibility){
        super(nextResponsibility)
    }

    resp(value){
        // complete current task
        let result =  value + ' - ResponsibilityB Progressed'
        // transfer task to next or return value
        return this.nextResp(result)
    }
}

class ResponsibilityC extends IResponsibility{
    constructor(nextResponsibility){
        super(nextResponsibility)
    }

    resp(value){
        // complete current task
        let result =  value + ' - ResponsibilityC Progressed'
        // transfer task to next or return value
        return this.nextResp(result)
    }
}

let responsibilityA = new ResponsibilityA()
let responsibilityB = new ResponsibilityB()
let responsibilityC = new ResponsibilityC()


class ResponsibilityTasker{
    constructor(startValue, responsibilityArray){
        this.startValue = startValue
        this.responsibilityArray = responsibilityArray
        this.starter = null
        if(this.responsibilityArray && this.responsibilityArray.length > 0){
            this.starter = this.responsibilityArray[0]
            let target = this.starter
            for(let i = 1; i < this.responsibilityArray.length; i++){
                target.nextResponsibility = this.responsibilityArray[i]
                target = target.nextResponsibility
            }
        }
    }

    task () {
        return this.starter.resp(this.startValue) + ' --Task Over!'
    }
}

let responsibilityTasker = new ResponsibilityTasker(
    'ResponsibilityTasker Start:', 
    [responsibilityA, responsibilityB, responsibilityC])
let resStr = responsibilityTasker.task()
console.log(resStr)
