//装饰器设计模式
//装饰一个模型，本质不会变，让他更丰富
//和建造者的区别,建造者是一起合作创造一个完成的模型，装饰是去丰富一个已有的模型
//和class继承区别 不依赖于特定类型，很多类型都可以进行装饰

//@Decorator 还不能用

class TestModule{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

function DecoratorNickname(module){
    module.prototype.nickname = 'default_nickname'
    module.prototype.getNickname = function(){
        return this.nickname
    }
    return module
}

let tempTestModule = new TestModule('name1')
console.log(tempTestModule.getName())
//console.log(tempTestModule.getNickname())

const TestModuleWithNickname = DecoratorNickname(TestModule)
let tempTestModuleWithNickname = new TestModuleWithNickname('name2')

console.log(tempTestModuleWithNickname.getName())
console.log(tempTestModuleWithNickname.nickname)
console.log(tempTestModuleWithNickname.getNickname())

