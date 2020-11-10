// 命令设计模式
// 命令设计模式常常用来进行复杂功能实现与使用的解耦。其核心是将功能的调用封装成命令， 对使用方来说， 只需要提供正确的命令和参数即可。
// 例如比较常的　if 和　switch 下的逻辑，可以把它们封装为对应的命令任务，来降低一个方法作用域的复杂度

function run (methord, params){
    this.join = function (array){
        return array.join(' ')
    }

    this.strimEach = function (array){
        return array.map(item => {
            if(typeof item == "string"){
                return item.trim()
            }
        })
    }

    if(this[methord] && typeof this[methord] == "function"){
        return this[methord](params)
    }else{
        return null
    }
}

console.log(run('join', ['hello, world']))
console.log(run('strimEach', [' abc', 'def ']))
